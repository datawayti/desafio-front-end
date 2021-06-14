import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { capitais } from 'src/assets/data/capitais';

@Injectable()
export class CapitaisService {
  private capitais = capitais;

  constructor(private http: HttpClient) {}

  buscarDadosCapitais() {
    return of(this.capitais);
  }
}
