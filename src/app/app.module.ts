import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NostalgyMusicComponent } from './nostalgy-music/nostalgy-music.component';
import { PopMusicComponent } from './pop-music/pop-music.component';
import { TraditionalMusicComponent } from './traditional-music/traditional-music.component';
import { RapMusicComponent } from './rap-music/rap-music.component';
import { PlayMusicComponent } from './play-music/play-music.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    NostalgyMusicComponent,
    PopMusicComponent,
    TraditionalMusicComponent,
    RapMusicComponent,
    PlayMusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
