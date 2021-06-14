import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Cidade } from '../models/cidade';

const url = 'http://apiadvisor.climatempo.com.br/api/v1/locale/city?'
const token = '&token=653fd668af13d9b4f6aacb5491a977e0';

@Injectable({
  providedIn: 'root'
})

export class CidadesService {

  constructor(private http: HttpClient) { }

  listarTodasAsCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(url + 'country=BR' + token);
  }

  listarCidadePorEstado(estado: string): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(url + 'province=' + estado + token);
  }

}
