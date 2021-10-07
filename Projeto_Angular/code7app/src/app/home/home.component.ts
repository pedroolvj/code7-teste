import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageLoaded: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 400);
  }

  setPage(page: string) {
    this.pageLoaded = false;
    setTimeout(() => {
      this.router.navigate([`/${page}`]);
    }, 500);
  }

}
