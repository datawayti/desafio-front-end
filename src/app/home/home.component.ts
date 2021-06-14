import { Component, OnInit } from '@angular/core';

import { CidadeModel } from '../models/cidade.model';
import { EstadoModel } from '../models/estado.model';
import { ClimaTempoService } from '../shared/services/clima-tempo.service';
import { IbgeService } from '../shared/services/ibge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  estados: EstadoModel[] = [];
  cidades: CidadeModel[] = [];
  climas: any[] = [];

  estadoSelecionado!: string | number;
  cidadeSelecionada!: string | number;
  dadosPesquisa!: string;

  constructor(
    private ibgeService: IbgeService,
    private climaTempoService: ClimaTempoService
  ) {}

  ngOnInit(): void {
    this.carregarEstados();
  }

  carregarEstados() {
    this.ibgeService
      .buscarEstados()
      .subscribe((response) => (this.estados = response));
  }

  carregarCidadesIbge(idEstado: string) {
    this.ibgeService
      .buscarCidadesPorEstado(idEstado)
      .subscribe((response) => (this.cidades = response));
  }

  carregarCidades(siglaEstado: string) {
    this.climaTempoService
      .buscarCidadesEstado(siglaEstado)
      .subscribe((response) => {
        this.cidades = response;
      });
  }

  carregarClimaCidade(idCidade: number) {
    this.climaTempoService.buscarClimaAtual(idCidade).subscribe(
      (response) => {
        this.climas.push(response);
      },
      (error) => {
        console.error('Error');
        console.log(error);
      }
    );
  }
}
