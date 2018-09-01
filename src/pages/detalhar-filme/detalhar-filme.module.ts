import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalharFilmePage } from './detalhar-filme';

@NgModule({
  declarations: [
    DetalharFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalharFilmePage),
  ],
})
export class DetalharFilmePageModule {}
