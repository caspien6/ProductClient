import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  ITermek } from './model/termek-interface';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:54920/api/termek";

  getProductsById(id: number){

    const options = id ?
    { params: new HttpParams()
      .set('', id.toString() ) } : {};

    return this.http.get<ITermek[]>(this.baseUrl + '/' + id.toString() );
  }

  getProducts(){
    return this.http.get<ITermek[]>(this.baseUrl  );
  }

  getProductsByName(name: string){
    name = name.trim();

    const options = name ?
    { params: new HttpParams()
      .set('name', name)
       } : {};    

    return this.http.get<ITermek[]>(this.baseUrl + '/byName', options );
  }


}
