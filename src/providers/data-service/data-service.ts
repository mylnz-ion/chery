import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {RestApiProvider} from '../rest-api/rest-api';

/*
  Generated class for the DataServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  END_POINT_MENU_QRCODE = "qrOps/menuList";

  constructor(public http: Http, public restApi: RestApiProvider) {
    console.log('Hello DataServiceProvider Provider');
  }

  getProducts() {
    return this.http.get('assets/data/products.json')
      .map((response: Response) => response.json());
  }


  getMenuItemByQrCode(qrCode: string) {
    return new Promise(resolve => {
      this.restApi.get(this.END_POINT_MENU_QRCODE, {qrCode: qrCode}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}

