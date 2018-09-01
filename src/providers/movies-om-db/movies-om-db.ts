import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoviesOmDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesOmDbProvider {

  public api_key: string = 'apikey=b446ef61'
  public api_url: string = 'http://www.omdbapi.com/?';

  getMovies(movietitle) {
    return this.http.get(this.api_url + this.api_key +"&s=" + movietitle);
  }
  
  getMovieById(movieid){
    return this.http.get(this.api_url + this.api_key +"&i=" + movieid);
  }
  constructor(public http: Http) {
    console.log('Hello MoviesOmDbProvider Provider');
    //strange
  }

}
