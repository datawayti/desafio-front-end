import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { DxDrawerComponent } from 'devextreme-angular';
import { dxButtonOptions } from 'devextreme/ui/button';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css'],
  providers: [],
  preserveWhitespaces: true,
})
export class MenuTopoComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;

  showSubmenuModes: string[] = ['slide', 'expand'];
  positionModes: string[] = ['left', 'right'];
  showModes: string[] = ['push', 'shrink', 'overlap'];
  text: string;
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'left';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: Boolean = true;
  elementAttr: any;

  selectBoxOptions: any;
  menuToolbarOptions: any;

  botaoPesquisaOptions: any;

  estados: string[] = [
    "Todo o Brasil",
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RR",
    "RO",
    "RJ",
    "RN",
    "RS",
    "SC",
    "SP",
    "SE",
    "TO"
  ];


  ngOnInit(): void {

  }

  constructor( private router: Router ) {

  }


  escolherUF(uf){
    if(uf =='Todo o Brasil'){
      return this.router.navigateByUrl('/home');
    }
    else{
      return this.router.navigateByUrl('/estado/'+uf);
    }
  }

  buttonOptions: dxButtonOptions = {
    icon: "menu",
    onClick: () => {
      this.isDrawerOpen = !this.isDrawerOpen;
    }
  }


  itemClick (e) {

      console.log(e.itemData.id)

      if(e.itemData.id == 1) {
        return this.router.navigateByUrl('/home');
      }
      if(e.itemData.id == 2) {
        return this.router.navigateByUrl('/estado/');
      }

  }

  opcoesMenu = [
    {
      id: 1,
      text: 'Página Principal',
      icon: 'home',

    },

    { id: 2,
      text: 'Capitais',
      icon: 'globe'
    },
  ];

}