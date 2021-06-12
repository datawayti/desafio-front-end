import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import { CapitaisService } from './services/capitais.service';

interface CapitalModel {
  nome: string;
  sigla: string;
  capital: string;
}

@Component({
  selector: 'app-capitais',
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.scss'],
})
export class CapitaisComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;

  capitais: CapitalModel[] = [];

  constructor(private capitaisService: CapitaisService) {}

  ngOnInit(): void {
    this.carregarCapitais();
  }

  carregarCapitais() {
    this.capitaisService.buscarDadosCapitais().subscribe((response) => {
      this.capitais = response;
    });
  }

  exportarExcel(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    exportDataGrid({
      worksheet: worksheet,
      component: e.component,
    }).then(function () {
      workbook.xlsx.writeBuffer().then(function (buffer: BlobPart) {
        saveAs(
          new Blob([buffer], { type: 'application/octet-stream' }),
          'DataGrid.xlsx'
        );
      });
    });
    e.cancel = true;
  }

  exportarPdf() {
    const doc = new jsPDF();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid.instance,
    }).then(() => {
      doc.save('Capitais.pdf');
    });
  }
}
