import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: 'fooldal', component: HomeComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: '', redirectTo: '/fooldal', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
