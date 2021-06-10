import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextAreaModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  eventValue: string;
  valueChangeEvents: any[];
  value: string;
  valueForEditableTextArea: string;

  constructor() { 
   
    }
  }

