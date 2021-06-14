import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cidade } from '../models/cidade';


import { ClimaTempoService } from './clima-tempo.service';

@Component({
  selector: 'app-clima-tempo',
  templateUrl: './clima-tempo.component.html',
  styleUrls: ['./clima-tempo.component.css']
})
export class ClimaTempoComponent implements OnInit {

  cidade: Cidade;


  constructor(
    private climaService: ClimaTempoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {

      this.adicionarCidade(parseInt(routeParams.id));
      this.acharCidade(routeParams);
      });

  }

 

  acharCidade(id){
    this.climaService.pegaInfoClima(id).subscribe((data : Cidade) =>{
      this.cidade = data;
      console.log(this.cidade);
    })
  }
  adicionarCidade(id){
  this.climaService.registrarCidade(id).subscribe();
  }  
}
