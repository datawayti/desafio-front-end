import { CidadesService } from './../cidades/cidades.service';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../models/cidade';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {


  cidades: Cidade[] = [];
  uf: any;


  constructor( 
    private cidadesService: CidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
    this.acharEstado(routeParams.uf);
    });
  }
  
  selecionarCidade(id){  
    return this.router.navigateByUrl('/clima-tempo/'+ id);
  }

  acharEstado(uf) {
    this.cidadesService.listarCidadePorEstado(uf).subscribe((data : Cidade[]) =>{
    this.cidades = data;
  }
  )}
  

}
