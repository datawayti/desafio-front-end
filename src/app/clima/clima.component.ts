import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Service } from '../capital/capital.component.service';
import { ServiceApiService } from '../service-api.service';
import { ModelResponse } from '../busca-clima/model.response.service'
import { DxSelectBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})

export class ClimaComponent {

  public model: ModelResponse;

  city:string = 'São paulo';
  valor_input: any;

  cidade:any
  temperatura:any
  estado:any
  municipio:any
  sensacao:any

  constructor(private service: ServiceApiService) { }

  ngOnInit(): any {
      this.mostraValor();
  }

  getValue(event){
    this.city = event.target.value;
  }

  callApi(valor:string) {
    let dataWeather;
    this.service.getData(valor).subscribe((data) => {
      dataWeather = data;
      this.model = dataWeather.data[0];
      
      this.cidade = this.model.name;
      this.temperatura = this.model.temperature;
      this.estado = this.model.state;
      this.municipio = this.model.country;
      

      // this.model =  Object.create(data).data[0];
      // this.retorno = this.model
      // console.log(this.model)

    })
  }
         mostraValor() {
                 this.callApi(this.city);

}
}