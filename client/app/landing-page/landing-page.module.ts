import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../core/modules/shared.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
