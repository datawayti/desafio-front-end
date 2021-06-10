import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent{
  title = 'ClimaTempo';
  countries: string[];
  data: any;
  ClimaData:any;

  constructor(private http: HttpClient){} 

}






