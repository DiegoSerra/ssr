import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../../core/services/video.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../../../models/video.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  video: Video;

  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {    
    this.route.data.subscribe((data) => {
      this.videoService.getOne(data.video._id)
        .subscribe(video => {
          this.video = video;
        })
    });
  }

}
