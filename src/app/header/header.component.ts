import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { allAppRoutes } from '../routers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'ClimaTempo';
  router: '../routers';

  constructor() { }

  ngOnInit(): void {
  }

}
