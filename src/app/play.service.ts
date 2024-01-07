import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  playMusic ?: any

  srcMusic ?: string

  nameOfMusic ?: string

  nameOfCreator ?: string

  srcOfImage ?: string


  srcURL = new Subject<{title : any}>()

  songname = new Subject<{title : any}>()

  creatorname = new Subject<{title : any}>()

  imgsrc = new Subject<{title : any}>()

  constructor(private route :ActivatedRoute , private dataService : DataService) { }

  playPauseMusic(id : any) {
 

    this.route.params.subscribe((param)=>{
  
      let filteredArray = this.dataService.musicsOffline.filter((item:any)=>{

        console.log(item.id);
        
        if(id === item.id){
          return item
        }
      })
      
      this.playMusic = filteredArray

      this.srcMusic = this.playMusic[0]['src']
      this.nameOfMusic = this.playMusic[0]['title']
      this.nameOfCreator = this.playMusic[0]['creator']
      this.srcOfImage = this.playMusic[0]['image']


      console.log(this.srcOfImage?.slice(17,this.srcOfImage.length));
      
      
      
      this.srcURL.next({title : this.srcMusic}) 
      this.songname.next({title : this.nameOfMusic}) 
      this.creatorname.next({title : this.nameOfCreator}) 
      this.imgsrc.next({title : this.srcOfImage?.slice(17,this.srcOfImage.length)}) 
      
  
    })

    
  }

  
}
