import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Distrito } from '../model/Distrito';
import { Estado } from '../model/Estado';
import { Mesorregioes } from '../model/Mesorregioes';
import { Microrrgioes } from '../model/Microrregioes';
import { Municipios } from '../model/Municipios';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  urlTodosEstados: string = environment.apiURLBaseIBGE;
  urlEstado: string = environment.apiURLBaseIBGE;
  urlDistrito: string = environment.apiURLBaseIBGE;
  urlMesorregioes: string = environment.apiURLBaseIBGE;
  urlMicrorregioes: string = environment.apiURLBaseIBGE;
  urlMunicipios: string = environment.apiURLBaseIBGE;
  httpParams = new HttpParams().set('orderBy', 'nome')

  constructor(
    private http: HttpClient
  ) { }

  getAllEstadosService(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.urlTodosEstados + '?' + this.httpParams);
  }

  getEstadoInfoService(uf: string): Observable<Estado> {
    return this.http.get<Estado>(this.urlEstado + `${uf}`)
  }

  getAllDistritosService(uf: string): Observable<Distrito[]> {
    return this.http.get<Distrito[]>(this.urlDistrito + `${uf}` + '/distritos?' + this.httpParams)
  }

  getAllMesorregiosService(uf: string): Observable<Mesorregioes[]> {
    return this.http.get<Mesorregioes[]>(this.urlMesorregioes + `${uf}` + '/mesorregioes?' + this.httpParams)
  }

  getAllMicrorregioesService(uf: string): Observable<Microrrgioes[]> {
    return this.http.get<Microrrgioes[]>(this.urlMicrorregioes + `${uf}` + '/microrregioes?' + this.httpParams)
  }

  getAllMunicipiosService(id: number): Observable<Municipios[]> {
    return this.http.get<Municipios[]>(this.urlMunicipios + `${id}` + '/municipios')
  }
}
