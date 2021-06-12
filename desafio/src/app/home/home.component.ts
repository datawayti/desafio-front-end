import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model/Cidade';
import { Distrito } from '../model/Distrito';
import { Estado } from '../model/Estado';
import { Mesorregioes } from '../model/Mesorregioes';
import { Microrrgioes } from '../model/Microrregioes';
import { Municipios } from '../model/Municipios';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estadoSelected!: string;
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

  getEstadoInfo() {

    this.service.getEstadoInfoService(this.estadoSelected).subscribe(res => {
      this.estadoInfo = res;
      this.mostrarInfo = true;
      this.mensagemError = '';
    }, error => {
      this.mostrarInfo = false;
      this.mensagemError = 'Nenhuma informação encontrada...'
    });

    this.service.getAllDistritosService(this.estadoSelected).subscribe(res => this.allDistritos = res);

    this.service.getAllMesorregiosService(this.estadoSelected).subscribe(res => this.allMesorregioes = res);

    this.service.getAllMicrorregioesService(this.estadoSelected).subscribe(res => this.allMicrorregioes = res);
  }
}
