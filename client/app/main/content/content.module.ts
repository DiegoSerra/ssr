import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule, Route } from '@angular/router';
import { PlayerComponent } from './player/player.component';

const routes: Route[] = [
  {
    path: 'player',
    component: PlayerComponent
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
  declarations: [
    PlayerComponent
  ]
})
export class ContentModule { }
