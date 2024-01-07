import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Subject, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-play-music',
  template: `
  <div class="playonline">
  <div #audioPlayer class="audio-player">
<div (click)="timelineClick($event)" #timeline class="timeline">
  <div #progress class="progress"></div>
</div>
<div class="controls">
  <div class="play-container">
    <div (click)="playBtn($event)" class="toggle-play play">
  </div>
  </div>
  <div class="time">
    <div #length class="length"></div>
    <div class="divider">/</div>
    <div #current class="current">0:00</div>
  </div>
  <div class="name d-flex gap-1" style=";font-family: yekan;flex-direction: column;"> 
   <div style="font-size: 0.82rem;" > {{creatorName}}</div>
   <div > {{songName}}</div>
  </div>
  <div class="cover" >
    <img style="width: 70px;" src="../../assets/images/{{imageSrc}}" alt="" srcset="">
  </div>
<!--     credit for icon to https://saeedalipoor.github.io/icono/ -->
  <div class="volume-container">
    <div class="volume-button">
      <div class="volume icono-volumeMedium"></div>
    </div>
    
    <div (click)="voloumeSliderHandler($event)" class="volume-slider">
      <div class="volume-percentage"></div>
    </div>
  </div>
</div>
</div>   
      <audio controls autoplay #audio [src]="src" class="d-none" (loadeddata)="loadDataHandler()"><source type="audio/mp3"> مرورگر شما از پخش موزیک آنلاین پشتیبانی نمی کند </audio>
  </div>
`,
  styleUrls: ['./play-music.component.css']
})
export class PlayMusicComponent implements OnInit{

  // private readonly newProperty = `
  ;

  constructor(private route : ActivatedRoute , private dataServise : DataService){}

  @ViewChild('audioPlayer') 'audioPlayer' : ElementRef
  @ViewChild('audio') 'audio' : ElementRef
  @ViewChild('length') 'length' : ElementRef
  @ViewChild('current') 'current' : ElementRef
  @ViewChild('progress') 'progress' : ElementRef
  @ViewChild('timeline') 'timeline' : ElementRef
  
  
  playMusic ?: any
  
  srcMusic ?: string

  
  @Input() src ?: string 

  @Input() songName ?: string 

  @Input() creatorName ?: string 

  @Input() imageSrc ?: string 
  
  loadDataHandler(){

    this.length.nativeElement.textContent = Math.floor (this.audio.nativeElement.duration/60) + ":" + Math.floor(this.audio.nativeElement.duration - (60 * Number(Math.floor (this.audio.nativeElement.duration/60))))

    this.audio.nativeElement.volume = .75;
  }



  playBtn(event : any){
    console.log(this.audio.nativeElement.paused);
    
      if (this.audio.nativeElement.paused) {
        event.target.classList.remove("play");
        event.target.classList.add("pause");
        this.audio.nativeElement.play();
      } else {
        event.target.classList.remove("pause");
        event.target.classList.add("play");
        this.audio.nativeElement.pause();
      }
  }

  voloumeSliderHandler(event : any){
    const sliderWidth = window.getComputedStyle(event).width;
    const newVolume = event.offsetX / parseInt(sliderWidth);
    this.audio.nativeElement.volume = newVolume;
    this.audioPlayer.nativeElement.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
  }

  getTimeCodeFromNum(num : any) {
    let seconds = parseInt(num);
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    const hours = Math.floor(minutes / 60);
    minutes -= hours * 60;

  }

  ngOnInit(): void {

    console.log(this.src);
    console.log(this.songName);
    console.log(this.imageSrc);

    setInterval(() => {
      this.progress.nativeElement.style.width = this.audio.nativeElement.currentTime / this.audio.nativeElement.duration * 100 + "%";
      this.current.nativeElement.textContent = Math.floor (this.audio.nativeElement.currentTime/60) + ":" + Math.floor(this.audio.nativeElement.currentTime - (60 * Number(Math.floor (this.audio.nativeElement.currentTime/60))))
    }, 500);
  }

  timelineClick(e : any){
    const timelineWidth = window.getComputedStyle(this.timeline.nativeElement).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * this.audio.nativeElement.duration;
    this.audio.nativeElement.currentTime = timeToSeek;
  }

}
