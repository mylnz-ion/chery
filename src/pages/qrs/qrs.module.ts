import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {QrsPage} from './qrs';

@NgModule({
  declarations: [
    QrsPage,
  ],
  imports: [
    IonicPageModule.forChild(QrsPage),
  ],
})
export class QrsPageModule {
}
