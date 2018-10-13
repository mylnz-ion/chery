import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RestaurantCardsPage } from './restaurant-cards';

@NgModule({
  declarations: [
    RestaurantCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantCardsPage),
    TranslateModule.forChild()
  ],
  exports: [
    RestaurantCardsPage
  ]
})
export class RestaurantCardsModule { }
