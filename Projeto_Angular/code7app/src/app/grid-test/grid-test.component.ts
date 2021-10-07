import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.css']
})
export class GridTestComponent implements OnInit {

  pageLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 200);
  }

}
