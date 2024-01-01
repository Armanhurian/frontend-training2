import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})
export class MenuComponent {

  showCategory :boolean = false


  @Output() scrollToSectionEvent = new EventEmitter<string>();

  isShowMenu : boolean = false

  deferredPrompt ?: any

  @ViewChild('menuList') 'menuList' : ElementRef

  constructor(private router : Router , private swUpdate: SwUpdate){
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(() => {
        if (confirm('یک نسخه جدید از اپلیکیشن در دسترس است. آیا می‌خواهید به‌روزرسانی شود؟')) {
          window.location.reload();
        }
      });
    }

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event;
  
    })

  }

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




 installPWA() {
  if (this.deferredPrompt) {
    this.deferredPrompt.prompt();

    this.deferredPrompt.userChoice.then((choiceResult : any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('کاربر نصب را قبول کرد');
      } else {
        console.log('کاربر نصب را رد کرد');
      }

      this.deferredPrompt = null;
    });
  }
}


  clickCategory(){
    this.showCategory = !this.showCategory
  }

}
