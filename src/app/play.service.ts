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


  srcURL = new Subject<{title : any}>()

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
      
      this.srcURL.next({title : this.srcMusic}) 
      
  
    })

    
  }

  
}
