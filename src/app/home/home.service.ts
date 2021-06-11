import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Home } from '../models/home';


const url = 'http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?'
const token = 'token=babdee91d98a9ccf31ec179d9dbf0eaf';


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }

  listarHome(): Observable<Home[]> {
    return this.http.get<Home[]>(url + token);
  }

}