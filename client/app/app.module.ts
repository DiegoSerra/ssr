import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {SharedModule} from './core/modules/shared.module';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  {
    path: 'app',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: '',
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: '**',
    redirectTo: './landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: '**',
    redirectTo: 'app/player'
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
