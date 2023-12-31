import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { PlayService } from '../play.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  newListMusic ?: any

  constructor(private dataService : DataService , private playService : PlayService){}



  @ViewChild('newList') 'newList' : ElementRef

  scrollToSection() {
    this.newList.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  ngOnInit(): void {
    let filteredArray = this.dataService.musicsOffline.filter((item)=>{
      console.log(item.type);
      
      if(item.type === 'جدیدترین ها'){
        return item
      }
    })

    this.newListMusic = filteredArray

    console.log(this.newListMusic);
    
    
  }

  myMusicPlayClick(musicID : any){
    
    this.playService.playPauseMusic(musicID)

  }

}
