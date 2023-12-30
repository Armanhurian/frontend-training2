import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NostalgyMusicComponent } from './nostalgy-music/nostalgy-music.component';
import { PopMusicComponent } from './pop-music/pop-music.component';
import { TraditionalMusicComponent } from './traditional-music/traditional-music.component';
import { RapMusicComponent } from './rap-music/rap-music.component';
import { PlayMusicComponent } from './play-music/play-music.component';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'about-us' , component : AboutComponent},
  {path : 'nostalgy-music' , component : NostalgyMusicComponent},
  {path : 'pop-music' , component : PopMusicComponent},
  {path : 'traditional-music' , component : TraditionalMusicComponent},
  {path : 'rap-music' , component : RapMusicComponent},
  {path : 'play/:id' , component : PlayMusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
