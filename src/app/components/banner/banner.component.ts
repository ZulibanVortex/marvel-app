import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  reacStatus = 0;
  constructor() { }

  ngOnInit(): void {
  }

  voteIronMan(status: number) {
    status == 0 ? this.reacStatus = 0: this.reacStatus = status;
  }

}
