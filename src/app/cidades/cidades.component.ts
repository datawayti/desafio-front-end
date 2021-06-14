import { CidadesService } from './cidades.service';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../models/cidade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor( 
    private cidadesService: CidadesService,
    private router: Router ) { }

  ngOnInit() {
    this.acharCidade();
  }

  acharCidade(){
    this.cidadesService.listarTodasAsCidades().subscribe((data : Cidade[]) =>{
      this.cidades = data;
  }
  )}

  selecionarCidade(id){  
    return this.router.navigateByUrl('/clima-tempo/'+ id);
  }

}
