import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'video',
    loadChildren: './video/video.module#VideoModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app/video/all'
  },
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class ContentModule { }
