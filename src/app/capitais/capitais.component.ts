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


  isDrawerOpen: Boolean = false;
  navigation: List[] = []

  //Configura quais as quantidades permitidas de objetos exibidos por página
  readonly allowedPageSizes = [5, 10, 'all'];

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent | undefined;

  //Usa o service do Home no constructor e pega a lista de navegação
  constructor(private homeService: HomeService) { 
    this.navigation = homeService.getNavigationList();
  }


  ngOnInit(): void {
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

//Configura e executa o download do Data Grid para PDF
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

  


