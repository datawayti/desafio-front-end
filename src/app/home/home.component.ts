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


  //Usar service no constructor
  //pegar a data da array de navegação
  constructor(private homeService: HomeService) { 
    this.navigation = homeService.getNavigationList();
  }

  //Ao iniciar pagina pegar os dados de todos os estados
  ngOnInit(): void {
    this.getAllEstados();
  }


  
  //Função para buscar os dados de todos os estados
  getAllEstados(): void {
    this.homeService.getEstados().subscribe(
      (response: Estado[]) => {
        this.estados = response;
        console.log(this.estados);
      }
    )
    
  }


  //Função para pegar municipios de acordo com sua sigla do estado
  getMunicipioByEstado(): void {
    this.homeService.getmunicipioByEstado(this.estadoInput).subscribe(
      (response: any) => {
        this.municipios = response;
        console.log(this.municipios);
      }
    )
  }

  //Função para pegar a o tempo na cidade e mandar para o output
  getClima(): void {
    //Função é executada se cidade e estado estão preenchidos
    if (this.cidadeInput != "" && this.estadoInput != "") {
    //Pega as informações sobre o clima do API
    this.homeService.getClima(this.cidadeInput, this.estadoInput).subscribe(
      (response: any) => {
        this.climaDados = response;
        
        //Pega todas as variaveis escolhidas do API para serem exibidas na página
        this.cidade = this.climaDados.results.city_name;
        this.temperatura = this.climaDados.results.temp;
        this.tempoAgora = this.climaDados.results.currently;
        this.ventoVelocidade = this.climaDados.results.wind_speedy;
        this.climaOutput = ("Cidade: " + this.cidade + "\nUF" + this.estadoInput + "\nTemperatura: " + this.temperatura + "\nTempo do dia: " + this.tempoAgora + "\nVelocidade do vento: " + this.ventoVelocidade);
        
      }
    )
    }

  }


  //Função ativada quando alguma cidade é escolhida no SelectBox
  valueChanged(input) {
    //Transforma o valor em lower case e tira os espaços
    this.cidadeInput = input.value.replace(/\s/g, "").toLowerCase();
    //this.cidadeNotSelected = false;
    //Executa a função para pegar os dados do API
    this.getClima();

  }

  //Função atividada quando algum estado é escolhido no SelectBox
  optionChanged(input) {
    this.estadoInput = input.value;

    //Pega os municipios do estado escolhido para serem exibidos na SelectBox de municipios
    this.getMunicipioByEstado();
    //Boolean que da enable na SelectBox de municipios
    this.estadoNotSelected = false;
  }

  //Define as propriedades dos itens da toolbar
  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
        icon: 'menu',
        onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    }
}];

  
  
}
