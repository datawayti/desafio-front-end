import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cidade } from '../model/Cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  urlTempo: string = environment.urlTempo;


  constructor(
    private http: HttpClient
  ) { }

  getIdDaCidade(nome: string, uf: string): Observable<Cidade> {
    const httpParams = new HttpParams()
      .set("format", "json-cors")
      .set("key", "efb9dacc")
      .set("city_name", nome)
    return this.http.get<Cidade>(this.urlTempo + httpParams + ',' + uf);
  }
}
