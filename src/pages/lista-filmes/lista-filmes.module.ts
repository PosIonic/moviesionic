import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFilmesPage } from './lista-filmes';

@NgModule({
  declarations: [
    ListaFilmesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFilmesPage),
  ],
})
export class ListaFilmesPageModule {}
