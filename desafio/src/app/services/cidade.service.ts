import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cidade } from '../model/Cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidadesUrlJson: string = '/assets/Cidades.json'

  constructor(
    private http: HttpClient
  ) { }

  getCidade(): Observable<Cidade> {
    return this.http.get<Cidade>(this.cidadesUrlJson);
  }
}
