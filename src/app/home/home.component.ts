import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ESTADOS } from '../consts/estados';
import { CityModel } from '../models/cidade.model';
import { StateModel } from '../models/state.model';
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  states: StateModel[] = ESTADOS;
  cities: CityModel[] = [];

  ibgeEndPoint = 'https://servicodados.ibge.gov.br/api/v1/';

  weathers: any[] = [];

  loadingVisible = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  /**
   * Busca cidade pelo estado
   * @param StateModel
   */
  async getCitiesByState(state: StateModel) {
    try {
      this.loadingVisible = true;

      this.cities = await this.http.get(`${environment.climaTempoBaseEndPoint}api/v1/locale/city?state=${state.Sigla}&token=${environment.climaTempoToken}`).toPromise() as any;
    } catch (error) {
      notify({
        message: 'Erro ao buscar as cidades',
        type: 'error',
      });

      console.error('getCitiesByState error', error);
    } finally {
      this.loadingVisible = false;
    }
  }

  /**
   *Busca o clima atual da cidade
   *@param CityModel
   */
  async getWeather(city: CityModel) {
    try {
      if (city) {
        this.loadingVisible = true;

        // Registra a cidade na api do climatempo
        // Como está sendo usada a versão gratuita é possivel registrar apenas uma cidade a cada 24hrs
        // o try catch impede que a função pare apesar do erro de não poder registrar mais de uma cidade
        try {
          await this.registerCity(city);
        } catch (error) {
          console.error(error);
        }

        const res = await this.http.get(`${environment.climaTempoBaseEndPoint}api/v1/weather/locale/${city.id}/current?token=${environment.climaTempoToken}`).toPromise() as any;

        if (res && res.data) {
          this.weathers.push(res.data);
        }
      }
    } catch (error) {

      notify({
        message: 'Erro ao carregar o clima',
        type: 'error',
      });

      console.error('getClimate error', error);
    } finally {
      this.loadingVisible = false;

    }
  }

  /**
    * Registra a cidade no climatempo
    * @param CityModel
    */
  async registerCity(city: CityModel) {
    try {


      const body = `localeId[]=${city.id}`;

      const header = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      await this.http.put(`${environment.climaTempoBaseEndPoint}/api-manager/user-token/${environment.climaTempoToken}/locales`, body, header).toPromise() as any;
    } catch (error) {
      console.error('registerCity error', error);
    } finally {
    }
  }



}
