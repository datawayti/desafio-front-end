import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../cidade';
import { Estado } from '../estado';

//Cria uma classe para a lista de navegação
export class List {
    id: number | undefined;
    text: string | undefined;
    icon: string | undefined;
    route: string | undefined;
}

//Define as propriedades da lista de navegação
let navigation: List[] = [
    { id: 1, text: "Home", icon: "product", route: "" },
    { id: 2, text: "Capitais", icon: "chart", route: "capitais" },
];

@Injectable({
    providedIn: 'root'
  })

  export class HomeService { 

    //URL's para os JSON's e API's
    private estadosUrl: string = '/assets/Estados.json';
    private climaApiUrl: string = 'http://api.hgbrasil.com/weather?format=json-cors&key=1afaf54d&city_name=';
    private municipiosUrl: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

    constructor(private http: HttpClient) {}


    //Manda um get request para o JSON dos estados
    getEstados(): Observable<Estado[]> {
        return this.http.get<Estado[]>(this.estadosUrl);
    }

    //Manda um get request para o API consumir suas informações sobre o tempo
    getClima(cidade: string, estado:string): any {
        return this.http.get<any>(`${this.climaApiUrl}${cidade},${estado}`);
    }

    //Manda um get request para o API do IBGE consumindo as cidades de acordo com seu estado
    getmunicipioByEstado(estado: string): any {
        return this.http.get<any>(`${this.municipiosUrl}${estado}/municipios`)
    }

    //Manda um get request para a lista de navegação
    getNavigationList(): List[] {
        return navigation;
    }


    
  }