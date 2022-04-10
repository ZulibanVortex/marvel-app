import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesAppService {

  constructor() { }

  private heroeBanner: Heroe = {
    id: 5,
    imagen: 'https://www.xtrafondos.com/wallpapers/resized/iron-man-marvel-s-midnight-suns-8743.jpg?s=large',
    nombre: 'Ironman?',
    info: 'ron Man posee una armadura motorizada que le da fuerza y durabilidad sobrehumanas, vuelo y una gran variedad de armas. La armadura es inventada y usada por Stark (con excepciones ocasionales a corto plazo).',
    detalle: 'https://es.wikipedia.org/wiki/Iron_Man',
    like: 0,
    dislike: 0
  }
  private heroes: Heroe [] = [
    {
      id: 1,
      imagen: 'https://www.xtrafondos.com/wallpapers/resized/henry-cavill-como-superman-4874.jpg?s=large',
      nombre: 'Superman',
      info: 'Superman nace en un mundo extraño a una especie tecnológicamente avanzada que se parece a los humanos.',
      detalle: 'https://es.wikipedia.org/wiki/Superman',
      like: 0,
      dislike: 0
    },
    {
      id: 2,
      imagen: 'https://images5.alphacoders.com/113/thumb-350-1134925.jpg',
      nombre: 'Thor',
      info: 'Thor tiene una vida increíblemente larga y depende del consumo periódico de las Golden Apples de Idunn para mantener su vida útil extendida',
      detalle: 'https://es.wikipedia.org/wiki/Thor_(c%C3%B3mic)',
      like: 0,
      dislike: 0
    },
    {
      id: 3,
      imagen: 'https://www.xtrafondos.com/descargar.php?id=7081&resolucion=3840x2160',
      nombre: 'Batman',
      info: 'Es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger,',
      detalle: 'https://es.wikipedia.org/wiki/Batman',
      like: 0,
      dislike: 0
    },
    {
      id: 4,
      imagen: 'https://images8.alphacoders.com/117/thumb-1920-1176537.jpg',
      nombre: 'Spiderman',
      info: 'Agobiado por problemas personales, Peter crea un suero para dejar de tener habilidades arácnidas en «The Six Arms Saga»',
      detalle: 'https://es.wikipedia.org/wiki/Spider-Man',
      like: 0,
      dislike: 0
    }
  ]

  getDatosHeroes() {
    return this.heroes;
  }
  getDatosBanner() {
    return this.heroeBanner;
  }
}
