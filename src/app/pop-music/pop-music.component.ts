import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pop-music',
  templateUrl: './pop-music.component.html',
  styleUrls: ['./pop-music.component.css']
})
export class PopMusicComponent implements OnInit{
  popMusic : any = []
  loading ?: boolean 
  
  constructor(private dataService : DataService){}
  
  ngOnInit(): void {
    
    this.loading = true

    this.dataService.musics.subscribe((music)=>{

      this.loading = false

      Object.values(music).forEach(item =>{

        if(item.type === 'پاپ'){
          this.popMusic.push(item)
        }
        console.log(this.popMusic);
        
      })
 
    })
    
  }
}
