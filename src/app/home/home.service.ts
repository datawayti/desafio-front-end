import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../cidade';
import { Estado } from '../estado';

export class List {
    id: number | undefined;
    text: string | undefined;
    icon: string | undefined;
    route: string | undefined;
}

let navigation: List[] = [
    { id: 1, text: "Home", icon: "product", route: "" },
    { id: 2, text: "Capitais", icon: "chart", route: "capitais" },
];

@Injectable({
    providedIn: 'root'
  })

  export class HomeService { 

    private cidadesUrl: string = '/assets/Cidades.json';
    private estadosUrl: string = '/assets/Estados.json';
    private climaApiUrl: string = 'http://api.hgbrasil.com/weather?format=json-cors&key=1afaf54d&city_name=';
    private municipiosUrl: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

    constructor(private http: HttpClient) {}

    getCidades(): Observable<Cidade[]> {
        return this.http.get<Cidade[]>(this.cidadesUrl);
    }

    getEstados(): Observable<Estado[]> {
        return this.http.get<Estado[]>(this.estadosUrl);
    }

    getClima(cidade: string, estado:string): any {
        return this.http.get<any>(`${this.climaApiUrl}${cidade},${estado}`);
    }

    getmunicipioByEstado(estado: string): any {
        return this.http.get<any>(`${this.municipiosUrl}${estado}/municipios`)
    }

    getNavigationList(): List[] {
        return navigation;
    }
    
  }