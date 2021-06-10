import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelResponse } from './busca-clima/model.response.service';

var apiUrl: string = "http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token="
const apiKey = "de54a2b7f315a63a7691a01401d2ee43";
var finalUrl = ",BR&key=";

@Injectable({
  providedIn: 'root'
})

export class ServiceApiService { 

  cidade : string = "";

  //previsao do tempo
  
   nomeC : string ;
  
   temperatura : number;
  
   municipio : number;
  
   estado : number;

  constructor(private http: HttpClient) {}

  getData(city:string):Observable<ModelResponse[]> {
    return this.http.get<ModelResponse[]>(apiUrl + city + finalUrl + apiKey);
 }

 
  
}