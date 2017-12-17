import { NgModule } from '@angular/core';
import {SharedModule} from '../core/modules/shared.module';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './content/content.module#ContentModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ContentComponent,
    MainComponent,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
