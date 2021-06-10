import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../cidade';
import { Estado } from '../estado';

@Injectable({
    providedIn: 'root'
  })

  export class HomeService { 

    private cidadesUrl: string = '/assets/Cidades.json';
    private estadosUrl: string = '/assets/Estados.json';
    private climaApiUrl: string = 'http://api.hgbrasil.com/weather?format=json-cors&key=1afaf54d&city_name=';

    constructor(private http: HttpClient) {}

    getCidades(): Observable<Cidade[]> {
        return this.http.get<Cidade[]>(this.cidadesUrl);
    }

    getEstados(): Observable<Estado[]> {
        return this.http.get<Estado[]>(this.estadosUrl);
    }

    getClima(cidade: string): any {
        return this.http.get<any>(`${this.climaApiUrl}${cidade}`);
    }
  }