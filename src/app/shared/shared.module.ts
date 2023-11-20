import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AsesoriaEvaluacionPageComponent } from './pages/asesoria-evaluacion-page/asesoria-evaluacion-page.component';
import { ComienzaPageComponent } from './pages/comienza-page/comienza-page.component';
import { DesplegableEntrenamientoComponent } from './components/desplegable-entrenamiento/desplegable-entrenamiento.component';
import { DivDesplegableComponent } from './components/div-desplegable-asesoria/div-desplegable-asesoria.component';
import { EntrenamientoPersonalPageComponent } from './pages/entrenamiento-personal-page/entrenamiento-personal-page.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanesPageComponent } from './pages/planes-page/planes-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    AsesoriaEvaluacionPageComponent,
    ComienzaPageComponent,
    DesplegableEntrenamientoComponent,
    DivDesplegableComponent,
    EntrenamientoPersonalPageComponent,
    FormContactoComponent,
    HomePageComponent,
    ImageCarouselComponent,
    NavbarComponent,
    PlanesPageComponent,
    ServicesPageComponent,
    SliderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    ImageCarouselComponent,
    NavbarComponent,
    ServicesPageComponent,
  ],
})
export class SharedModule {}
