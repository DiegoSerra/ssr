import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../core/services/video.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(videoService: VideoService) { }

  ngOnInit() {
  }

}
