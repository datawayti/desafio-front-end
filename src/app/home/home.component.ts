import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { Estado } from '../estado';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public cidades: Cidade[] = [];
  public estados: Estado[] = [];
  public climaDados: any;
  data: any;
  public cidadeInput: string = "";
  public cidade: string = "";
  public temperatura: string = "";
  public tempoAgora: string = "";
  public ventoVelocidade: string = "";
  public climaOutput: string = "";



  constructor(private homeService: HomeService) { 
  }


  ngOnInit(): void {
    this.getAllCidades();
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

  getClima(): void {
    this.homeService.getClima(this.cidadeInput).subscribe(
      (response: any) => {
        this.climaDados = response;
        
        this.cidade = this.climaDados.results.city_name;
        this.temperatura = this.climaDados.results.temp;
        this.tempoAgora = this.climaDados.results.currently;
        this.ventoVelocidade = this.climaDados.results.wind_speedy;
        this.climaOutput = ("Cidade: " + this.cidade + "\nTemperatura: " + this.temperatura + "\nTempo do dia: " + this.tempoAgora + "\nVelocidade do vento: " + this.ventoVelocidade);
      }
    )

  }

  valueChanged(input) {
    this.cidadeInput = input.value.replace(/\s/g, "").toLowerCase();
    console.log(this.cidadeInput);

  }

  
  
}
