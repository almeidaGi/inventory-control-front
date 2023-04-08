import { Injectable } from '@angular/core';
import { Produtc } from '../produtc-model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly apiURL : string;
  public dataSubject = new BehaviorSubject<any>(null);
  public data = this.dataSubject.asObservable();
  constructor(protected http: HttpClient) {this.apiURL = 'http://localhost:8080';}

  public createdProduct(payload: Produtc): Observable<Produtc>{
    const url =  `${this.apiURL}/product`;
    return this.http.post<Produtc>(url, payload);
  } 

  public updateProduct(payload: Produtc): Observable<Produtc>{
    const url = `${this.apiURL}/product`;
    return this.http.put<Produtc>(url, payload);
  } 

  public litProduct(): Observable <Produtc>{
    const url = `${this.apiURL}/product`;
    return this.http.get<Produtc>(url);
  } 
  public updateData(data: any){
    this.dataSubject.next(data);
  }

}
