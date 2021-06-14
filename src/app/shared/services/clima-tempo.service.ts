import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CidadeModel } from 'src/app/models/cidade.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClimaTempoService {
  private readonly baseUrl = environment.baseUrlClimaTempo;

  constructor(private http: HttpClient) {}

  buscarClimaAtual(idCidade: number) {
    return this.http.get(`api/weather/locale/${idCidade}/current`, {
      params: {
        token: environment.tokenClimaTempo,
      },
    });
  }

  buscarCidadesEstado(siglaEstado: string): Observable<CidadeModel[]> {
    return this.http
      .get<any[]>(`api/locale/city`, {
        params: {
          state: siglaEstado,
          country: 'BR',
          token: environment.tokenClimaTempo,
        },
      })
      .pipe(
        map((cidades) =>
          cidades.map((cidade) => ({
            id: cidade.id,
            nome: cidade.name,
          }))
        )
      );
  }
}
