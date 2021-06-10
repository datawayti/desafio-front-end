import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Estado } from './capital.component.service';
import { Service } from './capital.component.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css'],
  providers: [Service]
})


export class CapitalComponent{

  exportGrid(e) {
    const workbook = new Workbook(); 
    const worksheet = workbook.addWorksheet("Main sheet"); 
    exportDataGrid({ 
        worksheet: worksheet, 
        component: e.component
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
        }); 
    }); 
    e.cancel = true; 
}


  dataSource: Estado[];

  constructor(service: Service) {
      this.dataSource = service.getEstado();
  }
}

