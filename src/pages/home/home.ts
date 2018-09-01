import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesOmDbProvider } from '../../providers/movies-om-db/movies-om-db';
import { DetalharFilmePage } from '../detalhar-filme/detalhar-filme';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MoviesOmDbProvider
  ]
})
export class HomePage {

  public moviesList = new Array<any>();
  constructor(public navCtrl: NavController,
              public movieOMDbProvider: MoviesOmDbProvider,) {

  }

  ionViewDidLoad() {
    //this.testeDeFuncaoVoid();
    //alert("Resultado = " + this.testeDeFuncaoParam(2,2))
    console.log('ionViewDidLoad ');
    this.movieOMDbProvider.getMovies("2012").subscribe(
      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);
        this.moviesList = obj.Search;
        console.log(JSON.stringify(obj));
      },
      error => {
        console.log(error);
      }
    )
  }

  getMovies(ev: any) {
    // Reset items back to all of the items
    this.movieOMDbProvider.getMovies(ev.target.value).subscribe(
      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);
        this.moviesList = obj.Search;
        console.log(JSON.stringify(obj));
      },
      error => {
        console.log(error);
      }
    )
  }

  itemSelected(id) {
    console.log("imdbID: " + id);
    this.navCtrl.push(DetalharFilmePage,{
      data: id
    });
  }

}
