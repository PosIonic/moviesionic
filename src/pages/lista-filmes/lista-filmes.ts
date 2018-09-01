import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesOmDbProvider } from '../../providers/movies-om-db/movies-om-db';

/**
 * Generated class for the ListaFilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-filmes',
  templateUrl: 'lista-filmes.html',
  providers: [
    MoviesOmDbProvider
  ]
})
export class ListaFilmesPage {

  public moviesList = new Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public movieOMDbProvider: MoviesOmDbProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFilmes');
    this.movieOMDbProvider.getMovies("strange").subscribe(
      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);

        this.moviesList = obj.results;
        console.log(JSON.stringify(obj));
      },
      error => {
        console.log(error);
      }
    )
  }

  buttonClick(event){
    console.log("button clicked");
    console.log(event);
   }
  
   itemClicked(event,itemData){
     console.log("item clicked");
     console.log(event);
     console.log(itemData);
   }

}
