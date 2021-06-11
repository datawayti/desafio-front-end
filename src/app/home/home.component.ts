import { Component, OnInit } from '@angular/core';
import { Home } from '../models/home';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  home: Home[] = [];
  texto: (string | undefined)[]

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.listarHomeBR();
  }

  listarHomeBR() {
    this.homeService.listarHome().subscribe((data: Home[]) => {
      this.home = data;
      this.texto = data.map(({ text }) => text);
    });
  }

}