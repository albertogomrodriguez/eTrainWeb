import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { ServicesPageComponent } from './shared/pages/services-page/services-page.component';
import { AsesoriaEvaluacionPageComponent } from './shared/pages/asesoria-evaluacion-page/asesoria-evaluacion-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contacto',
    component: ContactPageComponent,
  },
  {
    path: 'servicios',
    component: ServicesPageComponent,
  },
  {
    path: 'asesoria-online',
    component: AsesoriaEvaluacionPageComponent,
  },
  {
    path: '**',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
