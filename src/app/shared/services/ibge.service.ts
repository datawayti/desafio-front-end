import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CidadeModel } from 'src/app/models/cidade.model';
import { EstadoModel } from 'src/app/models/estado.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IbgeService {
  private readonly baseUrl = environment.baseUrlIBGE;

  constructor(private http: HttpClient) {}

  buscarEstados() {
    return this.http.get<EstadoModel[]>(`${this.baseUrl}/estados`, {
      params: {
        orderBy: 'nome',
      },
    });
  }

  buscarCidadesPorEstado(estadoId: number | string) {
    return this.http.get<CidadeModel[]>(
      `${this.baseUrl}/estados/${estadoId}/distritos`,
      {
        params: {
          orderBy: 'nome',
        },
      }
    );
  }
}
