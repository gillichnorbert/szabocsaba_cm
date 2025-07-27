import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

// Csak ezt vagy a teljes NgbModule-t használd
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    // NgbCarouselModule ide NEM megy
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    AppRoutingModule,
    NgbModule,
    FormsModule
    // vagy ha külön akarod importálni, akkor:
    // NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
