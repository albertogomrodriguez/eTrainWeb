import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { AsesoriaEvaluacionPageComponent } from './pages/asesoria-evaluacion-page/asesoria-evaluacion-page.component';
import { DivDesplegableComponent } from './components/div-desplegable-asesoria/div-desplegable-asesoria.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { EntrenamientoPersonalPageComponent } from './pages/entrenamiento-personal-page/entrenamiento-personal-page.component';
import { DesplegableEntrenamientoComponent } from './components/desplegable-entrenamiento/desplegable-entrenamiento.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    NavbarComponent,
    ServicesPageComponent,
    ImageCarouselComponent,
    AsesoriaEvaluacionPageComponent,
    DivDesplegableComponent,
    SliderComponent,
    FormContactoComponent,
    EntrenamientoPersonalPageComponent,
    DesplegableEntrenamientoComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    NavbarComponent,
    ServicesPageComponent,
    ImageCarouselComponent,
  ],
})
export class SharedModule {}
