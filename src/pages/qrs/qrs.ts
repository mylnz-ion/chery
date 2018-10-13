import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Toast} from '@ionic-native/toast';
import {DataServiceProvider} from '../../providers/data-service/data-service';

/**
 * Generated class for the QrsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrs',
  templateUrl: 'qrs.html',
})
export class QrsPage {
  foundItems = [];
  qrCodeItemFound: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public platform: Platform,
              private barcodeScanner: BarcodeScanner,
              private toast: Toast,
              public dataService: DataServiceProvider) {

    this.qrCodeItemFound = false;
    this.foundItems = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrsPage');
  }

  scanQrCode() {
    this.foundItems = [];

    if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {

        this.dataService.getMenuItemByQrCode(barcodeData.text).then(resData => {
          // @ts-ignore
          for (let i = 0; i < resData.length; i++) {
            this.foundItems.push(resData[i]);
          }

          console.log(this.foundItems);
        });

        if (this.foundItems !== undefined) {
          this.qrCodeItemFound = true;
          console.log(this.foundItems);
        } else {
          this.foundItems = [];
          this.qrCodeItemFound = false;
          this.toast.show('Product not found', '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        }
      }, (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    } else {
      let barcodeDataText = "24f5d661cf444d6df27a29c5b94a30adfde0503ac3279da6df8bc6bc3aab30b5";

      this.dataService.getMenuItemByQrCode(barcodeDataText).then(resData => {
        // @ts-ignore
        for (let i = 0; i < resData.length; i++) {
          this.foundItems.push(resData[i]);
        }

        if (this.foundItems == undefined) {
          this.foundItems = [];
          this.qrCodeItemFound = false;
          this.toast.show('Product not found', '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        } else {
          this.qrCodeItemFound = true;
          this.goPlaceMenuList(this.foundItems);
        }
      });

    }
  }

  // navigate to menu list
  goPlaceMenuList(foundItems) {
    this.navCtrl.push('PlaceMenuListPage', {
      paramItemsMenuList: foundItems,
    });
  }
}
