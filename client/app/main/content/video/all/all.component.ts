import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
