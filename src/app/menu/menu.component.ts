import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})
export class MenuComponent {

  showCategory :boolean = false


  @Output() scrollToSectionEvent = new EventEmitter<string>();

  isShowMenu : boolean = false

  @ViewChild('menuList') 'menuList' : ElementRef

  constructor(private router : Router){}

  scrollToSection() {
    this.scrollToSectionEvent.emit('newList');
  }


  // @HostListener('document:click', ['$event'])

 toggleMenu(event : any) {
  this.isShowMenu = !this.isShowMenu;
  if(this.isShowMenu){
    this.menuList.nativeElement.style.display = 'block'
    // event.target.style.display = 'none'
  }else{
    this.menuList.nativeElement.style.display = 'none'
    // event.target.style.display = 'flex'

  }
 }




  clickCategory(){
    this.showCategory = !this.showCategory
  }

}
