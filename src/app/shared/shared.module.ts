import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { AsesoriaEvaluacionPageComponent } from './pages/asesoria-evaluacion-page/asesoria-evaluacion-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    NavbarComponent,
    ServicesPageComponent,
    ImageCarouselComponent,
    AsesoriaEvaluacionPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    NavbarComponent,
    ServicesPageComponent,
    ImageCarouselComponent,
  ],
})
export class SharedModule {}
