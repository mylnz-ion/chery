import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlacesProvider} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-place-cards',
  templateUrl: 'place-cards.html',
})
export class PlaceCardsPage {
  xPlaces = [];
  seed: number = 1;
  pageNum: number = 1;
  pageSize: number = 10;

  isLastPage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public placesProvider: PlacesProvider) {
    this.createCardItems(1, 1, 10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceCardsPage');
  }

  createCardItems(seed: number, pageNum: number, pageSize: number) {
    let firstIndex = 0;
    let lastIndex = 0;

    this.placesProvider.getPlaces(seed, pageNum, pageSize).then(resData => {
      firstIndex = (pageNum - 1) * this.pageSize;
      lastIndex = firstIndex + this.pageSize;

      for (let i = firstIndex; i < lastIndex; i++) {
        // @ts-ignore
        if (i == resData.length) {
          this.isLastPage = true;
          break;
        } else {
          this.xPlaces.push(resData[i]);
        }
      }
      console.log(this.xPlaces);
    });
  }

  doInfinite(infiniteScroll): Promise<any> {
    console.log('Begin async operation');

    this.pageNum = this.pageNum + 1;
    return new Promise((resolve) => {
      setTimeout(() => {
        this.createCardItems(this.seed, this.pageNum, this.pageSize);

        console.log('Async operation has ended');

        resolve();
        infiniteScroll.complete();
      }, 500);
    })
  }
}
