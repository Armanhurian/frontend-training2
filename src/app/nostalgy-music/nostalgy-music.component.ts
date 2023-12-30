import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayService } from '../play.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nostalgy-music',
  templateUrl: './nostalgy-music.component.html',
  styleUrls: ['./nostalgy-music.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class NostalgyMusicComponent implements OnInit{

  nostalgyMusic : any = []
  loading ?: boolean

  playMusic ?: any

  srcMusic ?: string


  
  constructor(private dataService : DataService , private router : Router , private route : ActivatedRoute , private playService : PlayService){}
  
  ngOnInit(): void {

    this.loading = true



    this.dataService.musics.subscribe((music)=>{

      this.loading = false

      Object.values(music).forEach(item =>{

        if(item.type === 'نوستالژی'){
          this.nostalgyMusic.push(item)
        }
        console.log(this.nostalgyMusic);
        
      })
 
    })
    
    

  }

  

  myMusicPlayClick(musicID : any){
    
    this.playService.playPauseMusic(musicID)

  }

  
}
