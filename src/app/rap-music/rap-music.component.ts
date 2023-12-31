import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PlayService } from '../play.service';

@Component({
  selector: 'app-rap-music',
  templateUrl: './rap-music.component.html',
  styleUrls: ['./rap-music.component.css']
})
export class RapMusicComponent implements OnInit{

  rapMusic : any = []
  loading ?: boolean 
  
  constructor(private dataService : DataService , private playService : PlayService){}
  
  ngOnInit(): void {
    
    this.loading = true

    this.dataService.musics.subscribe((music)=>{

      this.loading = false

      Object.values(music).forEach(item =>{

        if(item.type === 'رپ'){
          this.rapMusic.push(item)
        }
        console.log(this.rapMusic);
        
      })
 
    })
    
  }
   

  myMusicPlayClick(musicID : any){
    
    this.playService.playPauseMusic(musicID)

  }

}
