import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../../core/services/video.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  videos = [
    {title: 'titulo',author:'autor',visualizations:'100 visualizaciones',uploadDate:'Hace 4 años',image:'assets/user.jpg'},
    {title: 'titulo1',author:'autor1',visualizations:'101 visualizaciones',uploadDate:'Hace 5 años',image:'assets/user.jpg'},
    {title: 'titulo2',author:'autor2',visualizations:'102 visualizaciones',uploadDate:'Hace 6 años',image:'assets/user.jpg'},
    {title: 'titulo3',author:'autor3',visualizations:'103 visualizaciones', uploadDate:'Hace 7 años',image:'assets/user.jpg'},
  ]

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.all()
      .subscribe(videos => {
        this.videos = videos;
      })
  }

}
