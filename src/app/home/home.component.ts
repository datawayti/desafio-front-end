import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { Estado } from '../estado';
import { HomeService, List } from './home.service';


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
  public municipios: any;
  data: any;

  public estadoNotSelected: boolean = true;
  public cidadeNotSelected: boolean = true;

  public estadoInput: string = "";
  public cidadeInput: string = "";
  public cidade: string = "";
  public temperatura: string = "";
  public tempoAgora: string = "";
  public ventoVelocidade: string = "";
  public climaOutput: string = "";

  isDrawerOpen: Boolean = true;
  navigation: List[] = []



  constructor(private homeService: HomeService) { 
    this.navigation = homeService.getNavigationList();
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
    console.log(this.cidades.entries())
  }

  

  getAllEstados(): void {
    this.homeService.getEstados().subscribe(
      (response: Estado[]) => {
        this.estados = response;
        console.log(this.estados);
      }
    )
    
  }

  getMunicipioByEstado(): void {
    this.homeService.getmunicipioByEstado(this.estadoInput).subscribe(
      (response: any) => {
        this.municipios = response;
        console.log(this.municipios);
      }
    )
  }

  getClima(): void {
    if (this.cidadeInput != "" && this.estadoInput != "") {
    this.homeService.getClima(this.cidadeInput, this.estadoInput).subscribe(
      (response: any) => {
        this.climaDados = response;
        
        console.log(this.cidadeInput)

        this.cidade = this.climaDados.results.city_name;
        this.temperatura = this.climaDados.results.temp;
        this.tempoAgora = this.climaDados.results.currently;
        this.ventoVelocidade = this.climaDados.results.wind_speedy;
        this.climaOutput = ("Cidade: " + this.cidade + "\nTemperatura: " + this.temperatura + "\nTempo do dia: " + this.tempoAgora + "\nVelocidade do vento: " + this.ventoVelocidade);
      }
    )
    }

  }

  valueChanged(input) {
    this.cidadeInput = input.value.replace(/\s/g, "").toLowerCase();
    console.log(this.cidadeInput);
    this.cidadeNotSelected = false;
    this.getClima();

  }

  optionChanged(input) {
    this.estadoInput = input.value;
    console.log(input.value);
    this.getMunicipioByEstado();
    this.estadoNotSelected = false;
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
        icon: 'menu',
        onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    }
}];

  
  
}
