import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Video } from '../../models/video.model';

@Injectable()
export class VideoService {
  constructor(private http: Http) { }

  all() {
    return this.http.get(`api/video`)
      .map((result: Response) => {
        return result.json();
      });
  }

  getOne(videoId) {
    return this.http.get(`api/video/${videoId}`)
      .map((result: Response) => {
        return result.json();
      });
  }

  create(video: Event): Observable<any> {
    return this.http.post(`api/video`, video)
      .map((result: Response) => {
        return result.json();
      });
  }
}