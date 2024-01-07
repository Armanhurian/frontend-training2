import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayService } from '../play.service';

@Component({
  selector: 'app-category-music',
  templateUrl: './category-music.component.html',
  styleUrls: ['./category-music.component.css']
})
export class CategoryMusicComponent implements OnInit{

  nostalgyMusic : any = []
  popMusic : any = []
  rapMusic : any = []
  traditionalMusic : any = []
  loading ?: boolean

  playMusic ?: any

  srcMusic ?: string

  constructor(private dataService : DataService , private router : Router , private route : ActivatedRoute , private playService : PlayService){}
  
  ngOnInit(): void {

    this.loading = true

    this.route.params.subscribe((res)=>{
      console.log(res['title']);
      
      this.dataService.musics.subscribe((music)=>{
  
        this.loading = false
  
        Object.values(music).forEach(item =>{

          if(item.type === res['title']){
            
            if(item.type === 'نوستالژی'){
    
              this.nostalgyMusic.push(item)
              this.popMusic = []
              this.rapMusic = []
              this.traditionalMusic = []
              
            }else if(item.type === 'پاپ'){
              
              this.nostalgyMusic = []
              this.rapMusic = []
              this.traditionalMusic = []
              this.popMusic.push(item)
    
            }else if(item.type === 'رپ'){
              
              this.nostalgyMusic = []
              this.rapMusic.push(item)
              this.traditionalMusic = []
              this.popMusic = []
              
            }else if(item.type === 'سنتی'){
              
              this.traditionalMusic.push(item)
              this.popMusic = []
              this.nostalgyMusic = []
              this.rapMusic = []
    
            }

          }

        })
   
      })
    })



    
    

  }

  

  myMusicPlayClick(musicID : any){
    
    this.playService.playPauseMusic(musicID)

  }

}
