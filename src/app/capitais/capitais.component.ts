import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService, List } from '../home/home.service';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { DxDataGridComponent } from 'devextreme-angular';


@Component({
  selector: 'app-capitais',
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.css']
})
export class CapitaisComponent implements OnInit {
  applyFilterTypes: any;
  currentFilter: any;

  isDrawerOpen: Boolean = false;
  navigation: List[] = []

  readonly allowedPageSizes = [5, 10, 'all'];

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent | undefined;

  constructor(private homeService: HomeService) { 
    this.navigation = homeService.getNavigationList();
  }


  ngOnInit(): void {
  }


  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
        icon: 'menu',
        onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    }
}];

exportGrid() {
  const doc = new jsPDF();
  exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid?.instance
  }).then(() => {
      doc.save('Customers.pdf');
  })
}

}

  


