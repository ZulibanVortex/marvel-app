import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() data: Heroe;
  @Output() load: EventEmitter<any> = new EventEmitter<any>();
  reacStatus = 0;
  constructor() { }

  ngOnInit(): void {
  }

  voteIronMan(status: number) {
    status == 0 ? this.reacStatus = 0: this.reacStatus = status;
    this.voteHero(status)
  }

  voteHero(option: number) {
    if (option == 1) {
      this.data.like = this.data.like + 1;

    } else if(option == 2) {
      this.data.dislike = this.data.dislike + 1;
    }
    this.guardarStorage(this.data)
  }

  guardarStorage(heroe: Heroe) {
    localStorage.setItem('heroe', JSON.stringify(heroe));
    this.load.emit();
  }
}
