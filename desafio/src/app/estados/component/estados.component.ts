import { Component, OnInit } from '@angular/core';
import { Distrito } from 'src/app/model/Distrito';
import { Estado } from 'src/app/model/Estado';
import { Mesorregioes } from 'src/app/model/Mesorregioes';
import { Microrrgioes } from 'src/app/model/Microrregioes';
import { Municipios } from 'src/app/model/Municipios';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  allEstados: Estado[] = [];
  estadoInfo: Estado;
  idEstado!: number;
  allDistritos: Distrito[] = [];
  allMesorregioes: Mesorregioes[] = [];
  allMicrorregioes: Microrrgioes[] = [];
  allMunicipios: Municipios[] = [];
  mostrarInfo: boolean = false;
  mensagemError?: string;
  message: string = 'Nenhum Registro Encontrado'

  constructor(
    private service: EstadoService
  ) {
    this.estadoInfo = new Estado();
  }

  ngOnInit(): void {
    this.getAllEstados();
  }

  getAllEstados() {
    this.service.getAllEstadosService().subscribe(res => {
      this.allEstados = res;
    })
  }

  onChange(event: any) {
    const estadoSelecionado = this.allEstados.find(elemento => elemento.id === Number(event.value));
    this.service.getEstadoInfoService(String(estadoSelecionado?.sigla)).subscribe(res => {
      this.estadoInfo = res;
      this.mostrarInfo = true;
      this.mensagemError = '';
    }, error => {
      this.mostrarInfo = false;
      this.mensagemError = 'Error ao tentar coletar dados da API!!.'
    });

    this.service.getAllDistritosService(String(estadoSelecionado?.sigla)).subscribe(res => this.allDistritos = res);

    this.service.getAllMesorregiosService(String(estadoSelecionado?.sigla)).subscribe(res => this.allMesorregioes = res);

    this.service.getAllMicrorregioesService(String(estadoSelecionado?.sigla)).subscribe(res => this.allMicrorregioes = res);

    this.service.getAllMunicipiosService(Number(estadoSelecionado?.id)).subscribe(res => this.allMunicipios = res);
  }
}