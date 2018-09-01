import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviesOmDbProvider } from '../providers/movies-om-db/movies-om-db';
import { HttpModule } from '@angular/http';
import { ListaFilmesPage } from '../pages/lista-filmes/lista-filmes';
import { DetalharFilmePage } from '../pages/detalhar-filme/detalhar-filme';

@NgModule({
  declarations: [
    MyApp,
    ListaFilmesPage,
    HomePage,
    DetalharFilmePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaFilmesPage,
    DetalharFilmePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesOmDbProvider
  ]
})
export class AppModule {}
