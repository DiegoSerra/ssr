import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../../core/services/video.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  videos = [
    {title: 'asd'},
    {title: 'asd1'},
    {title: 'asd2'},
    {title: 'asd3'},
  ]

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.all()
      .subscribe(videos => {
        this.videos = videos;
      })
  }

}
