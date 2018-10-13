import { Injectable } from '@angular/core';
import {RestApiProvider} from '../rest-api/rest-api';

@Injectable()
export class PlacesProvider {
  // https://qr-sboot-api.herokuapp.com/restaurants?seed=1&page=1&results=10

  constructor(public restApi: RestApiProvider) {
    console.log('Hello PlacesProvider Provider');
  }

  getPlaces(seed: number, pageNum :number, pageSize :number) {
    return new Promise(resolve => {
      this.restApi.get('/restaurants', { seed: seed, page: pageNum, results: pageSize}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
