import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PlaceCardsPage} from './place-cards';

import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PlaceCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceCardsPage),
    TranslateModule.forChild()
  ],
  exports: [
    PlaceCardsPage
  ]
})

export class PlaceCardsPageModule {
}
