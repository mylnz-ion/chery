import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceMenuListPage } from './place-menu-list';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PlaceMenuListPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceMenuListPage),
    TranslateModule.forChild()
  ],
})
export class PlaceMenuListPageModule {}
