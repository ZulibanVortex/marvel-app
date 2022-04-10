import { Component, OnInit } from '@angular/core';
import { ServicesAppService } from '../../services/services-app.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  width = 80;
  width2 = 20;
  heroes: Heroe[] = [];
  heroe: Heroe;

  constructor(private heroeService: ServicesAppService) {}

  ngOnInit() {
    this.cargarStorage();
    this.cargarStorageBanner();
  }

  cargarStorage() {
    if(localStorage.getItem('heroes')) {
      this.heroes = JSON.parse(localStorage.getItem('heroes'));
    } else {
      this.heroes = this.heroeService.getDatosHeroes();
    }
  }

  cargarStorageBanner() {
    if(localStorage.getItem('heroe')) {
      this.heroe =  JSON.parse(localStorage.getItem('heroe'));
    } else {
      this.heroe = this.heroeService.getDatosBanner();
    }
  }

  calculateVotes(like: number, dislike: number, option: number): number {
    let total = like + dislike;
    option == 1 ? total = (100/total) * like: total = (100/total) * dislike;
    return total;
  }

}
