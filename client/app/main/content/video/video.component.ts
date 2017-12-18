import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../core/services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(videoService: VideoService) { }

  ngOnInit() {
  }

}
