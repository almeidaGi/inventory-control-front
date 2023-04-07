import { Injectable } from '@angular/core';
import { Produtc } from '../produtc-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  public createdProduct(payload: Produtc){
    console.log(payload);
  }

}
