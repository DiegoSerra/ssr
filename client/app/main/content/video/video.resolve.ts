import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {VideoService} from '../../../core/services/video.service';

@Injectable()
export class VideoResolve implements Resolve<any> {

  constructor(private videoService: VideoService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.videoService.getOne(route.params['id']);
  }

}
