import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { AllComponent } from './all/all.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Route } from '@angular/router';
import { VideoResolve } from './video.resolve';
import { CreateComponent } from './create/create.component';

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'view/:id',
        component: ViewComponent,
        resolve: {
          video: VideoResolve
        }
      }, {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'all',
        component: AllComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app/video/all'
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllComponent, ViewComponent, CreateComponent],
  providers: [
    VideoResolve
  ]
})
export class VideoModule { }
