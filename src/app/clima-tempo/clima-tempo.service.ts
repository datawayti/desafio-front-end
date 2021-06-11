import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Cidade } from '../models/cidade';


const url1 = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/';
const url2 = 'http://apiadvisor.climatempo.com.br/api-manager/user-token/';
const token = '653fd668af13d9b4f6aacb5491a977e0';


@Injectable({
  providedIn: 'root'
})
export class ClimaTempoService {

  constructor(private http: HttpClient) { }

  pegaInfoClima(id): Observable<Cidade> {
    return this.http.get<Cidade>(url1 + id + '/current?token=' + token);
  }




  registrarCidade(id) {
    let body = 'localeId[]=' + id;
    console.log(body);
    return this.http.put(url2 + token + '/locales', body, { headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded') } );

  }

}
