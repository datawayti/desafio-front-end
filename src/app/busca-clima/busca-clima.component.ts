import { Component, OnInit, Input } from '@angular/core';
import { ModelResponse } from './model.response.service';
import { ServiceApiService } from "../service-api.service";

@Component({
  selector: 'app-busca-clima',
  templateUrl: './busca-clima.component.html',
  styleUrls: ['./busca-clima.component.css'],
  template: `city : {{city}}`
})
export class BuscaClimaComponent implements OnInit {

  public model:ModelResponse;

  city:string = "sao paulo"; 
  valor_input: any;
  
  cidade:any
  temperatura:any
  estado:any
  municipio:any
  sensacao:any
  


  constructor(private myservice: ServiceApiService) { }

  ngOnInit() {
     let dataWeather;
     this.myservice.getData(this.city).subscribe((data) => {
     dataWeather = data;
     this.model = dataWeather.data[0]
     this.cidade = this.model.name;
     this.temperatura = this.model.temperature;
     this.estado = this.model.state;
     this.municipio = this.model.country;
      
     // this.retorno = this.model
     // console.log(this.model)
     // this.model =  Object.create(data).data[0];
      
    })
 };
   mostraValor() {
    
  }

}
