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

  products: any[] = [];
  selectedProduct: any;
  productFound: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public platform: Platform,
              private barcodeScanner: BarcodeScanner,
              private toast: Toast,
              public dataService: DataServiceProvider) {

    this.dataService.getProducts()
      .subscribe((response) => {
        this.products = response;
        console.log(this.products);
      });

    this.productFound = false;
    this.selectedProduct = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrsPage');
  }

  scan() {
    this.selectedProduct = {};

    if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {
        this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);

        if (this.selectedProduct !== undefined) {
          this.productFound = true;
          console.log(this.selectedProduct);
        } else {
          this.selectedProduct = {};
          this.productFound = false;
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
      let barcodeDataText = "01234567895";

      this.selectedProduct = this.products.find(product => product.plu === barcodeDataText);

      if (this.selectedProduct == undefined) {
        this.selectedProduct = {};
        this.productFound = false;
        this.toast.show('Product not found', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      } else {
        this.productFound = true;
        console.log(this.selectedProduct);
      }
    }
  }
}
