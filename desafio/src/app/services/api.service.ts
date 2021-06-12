import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrlPesquisarCidade: string = environment.apiURLBase + 'locale/city?';
  private token: string = environment.token;

  constructor(
    private http: HttpClient
  ) { }

  // buscarIdDeEstadoPorSigla(nomeCidade: string, siglaEstado: string): Observable<any> {

  //   // const headers = new Headers();
  //   // headers.append('Content-Type', 'application/x-www-form-urlencoded');

  //   const httpParams = new HttpParams()
  //     .set("name", nomeCidade)
  //     .set("state", siglaEstado)
  //     .set("token", this.token);

  //   const url = this.apiUrlPesquisarCidade + httpParams.toString();

  //   const objetoCidadeApi = this.http.get<any>(url);
  //   console.log(objetoCidadeApi);

  //   return;
  // }
} 
