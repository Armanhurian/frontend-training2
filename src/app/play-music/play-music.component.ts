import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Subject, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-play-music',
  template: `>
    <div >   
        <audio controls autoplay #audioPlayer [src]="src" class="playonline"><source type="audio/mp3"> مرورگر شما از پخش موزیک آنلاین پشتیبانی نمی کند </audio>
    </div>
  `,
  styleUrls: ['./play-music.component.css']
})
export class PlayMusicComponent implements OnInit{

  constructor(private route : ActivatedRoute , private dataServise : DataService){}

  playMusic ?: any

  srcMusic ?: string

  @Input() src ?: string 

  ngOnInit(): void {

    console.log(this.src);

  }

}
