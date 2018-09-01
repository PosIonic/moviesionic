import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesOmDbProvider } from '../../providers/movies-om-db/movies-om-db';

/**
 * Generated class for the DetalharFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhar-filme',
  templateUrl: 'detalhar-filme.html',
  providers: [
    MoviesOmDbProvider
  ]
})
export class DetalharFilmePage {

  public movieDetail:any;
  public movieID:string

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public movieOMDbProvider: MoviesOmDbProvider,) {
    this.movieID = navParams.get("data");
    console.log("Valor passado:" + this.movieID);
    console.log(this.movieDetail);
    this.movieOMDbProvider.getMovieById(this.movieID).subscribe(
      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);
        console.log(JSON.stringify(obj));
        this.movieDetail = obj;
      },
      error => {
        console.log(error);
      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalharFilmePage');
    this.movieOMDbProvider.getMovieById(this.movieID).subscribe(
      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);
        console.log(JSON.stringify(obj));
        this.movieDetail = obj;
      },
      error => {
        console.log(error);
      }
    );
  }

}
