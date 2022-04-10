import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() data: Heroe;
  @Input() heroes: Heroe[] = [];
  constructor() { }

  ngOnInit() {
  }

  calculateVotes(like: number, dislike: number, option: number): number {
    let total = like + dislike;
    option == 1 ? total = (100/total) * like: total = (100/total) * dislike;
    return total;
  }

  voteHero(option: number) {
    if (option == 1) {
      this.heroes[this.data.id -1].like = this.heroes[this.data.id -1].like + 1;

    } else {
      this.heroes[this.data.id -1].dislike = this.heroes[this.data.id -1].dislike + 1;
    }
    this.guardarStorage(this.heroes)
  }

  guardarStorage(heroes: Heroe[]) {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }
}
