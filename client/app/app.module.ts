import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {SharedModule} from './core/modules/shared.module';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VideoService } from './core/services/video.service';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

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
    redirectTo: 'app/video/all'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    VideoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
