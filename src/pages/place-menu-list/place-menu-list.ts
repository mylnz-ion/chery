import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PlaceMenuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-menu-list',
  templateUrl: 'place-menu-list.html',
})
export class PlaceMenuListPage {
  menuItemList = [];
  restaurantName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menuItemList = navParams.get('paramItemsMenuList') || this.getDefaultMenuList;
    this.setRestaurantName();

    console.log(this.menuItemList);
    console.log(this.restaurantName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceMenuListPage');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter PlaceMenuListPage');
  }

  getDefaultMenuList() {
    console.log('getDefaultMenuList');
    return this.menuItemList;
  }

  setRestaurantName() {
    if (this.menuItemList.length != 0) {
      this.restaurantName = this.menuItemList[0].restaurantName;
    }
    console.log(this.restaurantName);
  }
}
