import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PlayMusicComponent } from './play-music/play-music.component';
import { CategoryMusicComponent } from './category-music/category-music.component';

const routes: Routes = [
  {path : '' , component : HomeComponent  },
  {path : 'about-us' , component : AboutComponent},
  {path : 'category-music/:title' , component : CategoryMusicComponent},
  {path : 'play/:id' , component : PlayMusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
