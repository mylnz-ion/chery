import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestApiProvider {
  url: string = 'https://qr-sboot-api.herokuapp.com';
  // https://qr-sboot-api.herokuapp.com/restaurants?seed=1&page=1&results=10
  //https://qr-sboot-api.herokuapp.com/qrOps/menuList?qrCode=24f5d661cf444d6df27a29c5b94a30adfde0503ac3279da6df8bc6bc3aab30b5

  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

}
