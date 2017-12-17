import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'player',
    loadChildren: './player/player.module#PlayerModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app/player'
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
