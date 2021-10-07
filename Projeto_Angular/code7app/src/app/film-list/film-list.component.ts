import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList: Array<{
    nome: string,
    ano: number,
    diretor: string,
    genero: string,
    descricao: string,
    poster: string}> = [
    {
        "nome": "Avengers: Infinity War",
        "ano": 2018,
        "diretor": "Anthony Russo, Joe Russo",
        "genero": "Sci-fi/Action",
        "descricao": "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.",
        "poster": "https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg"
    },
    {
        "nome": "Spider-Man: Far From Home",
        "ano": 2019,
        "diretor": "Jon Watts",
        "genero": "Fantasy/Sci-fi",
        "descricao": "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
        "poster": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/Official_FFH_US_Poster.jpg/revision/latest?cb=20190522171521"
    },
    {
        "nome": "Thor: Ragnarok",
        "ano": 2017,
        "diretor": "Taika Waititi",
        "genero": "Fantasy/Sci-fi",
        "descricao": "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg"
    }
  ];

  featureIndex: number = 0;
  navScroll: boolean = false;
  filmSelected: number = -1;
  collapseFilm: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.featureIndex = this.selectRandomFeature(0, 2);

    window.addEventListener("scroll", e => {
      if(window.scrollY > 20) {
        this.navScroll = true;
      } else {
        this.navScroll = false;
      }
    });
  }

  selectRandomFeature(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  featureBackground() {
    let style = `linear-gradient(0deg, rgba(23,23,23,0.9), rgba(23,23,23,0.8)),url(${this.filmList[this.featureIndex].poster})`;
    return style;
  }

  selectMovie(index: number) {
    this.filmSelected = index;
    this.collapseFilm = true;
  }

}
