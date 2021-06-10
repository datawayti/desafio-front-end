import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { Estado } from '../estado';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-capitais',
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.css']
})
export class CapitaisComponent implements OnInit {
  public cidades: Cidade[] = [];
  public estados: Estado[] = [];

  constructor(private homeService: HomeService) { 
  }


  ngOnInit(): void {
    this.getAllEstados();
  }

  getAllCidades(): void {
    this.homeService.getCidades().subscribe(
      (response: Cidade[]) => {
        this.cidades = response;
        console.log(this.cidades);
      }
    )
  }

  getAllEstados(): void {
    this.homeService.getEstados().subscribe(
      (response: Estado[]) => {
        this.estados = response;
        console.log(this.estados);
      }
    )
    
  }

  

}
