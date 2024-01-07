import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';
import { PlayService } from './play.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-training2';

  isPlaying: boolean = false;

  src ?: any 

  songName ?: any

  creatorName ?: any

  imageSrc ?: any

  @ViewChild('audioPlayer') 'audioPlayer' : ElementRef

  constructor(private route : ActivatedRoute, private dataService : DataService , private playService : PlayService){}

  
  
  ngOnInit(): void {

    this.playService.srcURL.subscribe((item)=>{
      if(item.title){
        this.src = item.title
      }
    })

    this.playService.songname.subscribe((item)=>{
      if(item.title){
        this.songName = item.title
      }
    })

    this.playService.creatorname.subscribe((item)=>{
      if(item.title){
        this.creatorName = item.title
      }
    })

    this.playService.imgsrc.subscribe((item)=>{
      if(item.title){
        this.imageSrc = item.title
      }
    })
    
  }

}
