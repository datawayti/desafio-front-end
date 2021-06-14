import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/model/Cidade';
import { Estado } from 'src/app/model/Estado';
import { Municipios } from 'src/app/model/Municipios';
import { CidadeService } from 'src/app/services/cidade.service';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  allEstados: Estado[] = [];
  estado: any = new Estado();
  allMunicipios: Municipios[] = [];
  objetoCidade: Cidade = new Cidade();
  clima?: any;
  mostrar: boolean = false;

  constructor(
    private estadoService: EstadoService,
    private cidadeService: CidadeService
  ) { }

  ngOnInit(): void {
    this.getAllEstados();
  }

  getAllEstados() {
    this.estadoService.getAllEstadosService().subscribe(res => {
      this.allEstados = res;
    })
  }

  onChange(event: any) {
    const estadoSelecionado = this.allEstados.find(estado => estado.id === Number(event.value));
    this.estado = estadoSelecionado;
    this.estadoService.getAllMunicipiosService(Number(estadoSelecionado?.id)).subscribe(res => this.allMunicipios = res);
  }


  onChangeCidade(event: any) {
    const cidadeSelect = this.allMunicipios.find(cidade => cidade.id === Number(event.value));
    this.cidadeService.getIdDaCidade(String(cidadeSelect?.nome), String(this.estado.sigla)).subscribe(res => {
      this.clima = res;
      this.mostrar = true;
    });
  }

}
