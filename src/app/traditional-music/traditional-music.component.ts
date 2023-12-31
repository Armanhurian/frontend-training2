import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PlayService } from '../play.service';

@Component({
  selector: 'app-traditional-music',
  templateUrl: './traditional-music.component.html',
  styleUrls: ['./traditional-music.component.css']
})
export class TraditionalMusicComponent implements OnInit{

  traditionalMusic : any = []
  loading ?: boolean 
  
  constructor(private dataService : DataService , private playService : PlayService){}
 
  ngOnInit(): void {
    
    this.loading = true

    this.dataService.musics.subscribe((music)=>{

      this.loading = false

      Object.values(music).forEach(item =>{

        if(item.type === 'سنتی'){
          this.traditionalMusic.push(item)
        }
        console.log(this.traditionalMusic);
        
      })
 
    })
    
  }

  myMusicPlayClick(musicID : any){
    
    this.playService.playPauseMusic(musicID)

  }


}
