import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { environment } from 'src/environments/environment';
import { CityModel } from '../models/cidade.model';
import { CapitalModel } from '../models/capital.model';

@Component({
  selector: 'app-capitais',
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.css']
})
export class CapitaisComponent implements OnInit {
  capitals: any[] = [];
  capitalEndPoint = 'https://br-cidade-estado-nodejs.glitch.me/';
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;
  loadingVisible = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCapitals();
  }

  /**
   * Busca as capitais
   */
  async getCapitals() {
    try {
      this.loadingVisible = true;

      const uri = `${this.capitalEndPoint}cidades?capital=true`;

      this.capitals = await this.http.get(encodeURI(uri)).toPromise() as any[];
      this.getForecast();
    } catch (error) {
      notify({
        message: 'Erro ao buscar as capitais',
        type: 'error',
      });
      console.error('getCapitals error', error);
    } finally {
      this.loadingVisible = false;

    }
  }

  /**
   * exporta o PDF
   */
  exportToPDF() {
    try {
      this.loadingVisible = true;

      const doc = new jsPDF();
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: this.dataGrid.instance
      }).then(() => {
        doc.save('Capitais.pdf');
      })
    } catch (error) {
      notify({
        message: 'Erro ao exportar o PDF',
        type: 'error',
      });

      console.error('exportToPDF error', error);
    } finally {
      this.loadingVisible = false;

    }

  }

  /**
   * Busca a previsão do tempo
   */
  getForecast() {
    // Busca de forma não assicrona
    for (const capital of this.capitals) {

      // busca o id da cidade no climatempo
      this.getCityId(capital).then(city => {

        if (city) {
          // registra o id da cidade
          this.registerCity(city).catch(error => {
            console.error(error);
          }).finally(() => {

            // busca a previsão para os próximos 15 dias
            const uri = `${environment.climaTempoBaseEndPoint}api/v1/forecast/locale/${city.id}/days/15?&token=${environment.climaTempoToken}`;
            this.http.get(encodeURI(uri)).toPromise().then((res: any) => {

              // seta a previsão para o dia atual
              if (res && res.data && res.data.length > 0 && res.data[0].temperature) {
                capital.minTemperature = res.data[0].temperature.min;
                capital.maxTemperature = res.data[0].temperature.max;
              }

            }).catch(error => {
              console.error(error);
            });
          });

        }
      }).catch(error => {
        console.error(error);
      });

    }
  }

  /**
   * busca o id da cidade no climatempo
   * @param capital
   * @returns Promise<CityModel | null>
   */
  async getCityId(capital: CapitalModel): Promise<CityModel | null> {
    try {
      if (capital) {
        const res = await this.http.get(`${environment.climaTempoBaseEndPoint}api/v1/locale/city?name=${capital.cidade}&state=${capital.estadoId}&token=${environment.climaTempoToken}`).toPromise() as any;
        if (res && res.length > 0) {
          return res[0];
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (error) {
      console.error('getCityId error', error);
      throw error;
    } finally {
      this.loadingVisible = false;
    }
  }


  /**
   * Registra a cidade no climatempo
   * @param city
   */
  async registerCity(city: CityModel) {
    try {
      if (city) {
        let headers = new HttpHeaders();


        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        const uri = `${environment.climaTempoBaseEndPoint}/api-manager/user-token/${environment.climaTempoToken}/locales`;
        const res = await this.http.put(encodeURI(uri), `localeId[]=${city.id}`, { headers, observe: 'response' }).toPromise() as any;
      }
    } catch (error) {
      console.error('registerCity error', error);
    } finally {
    }
  }

}
