import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  tabs = [{ title: 'Início', route: '/home' }, { title: 'Capitais', route: '/capitais' }];
  title = 'desafio-front-end';


  ngOnInit(): void {

  }

  constructor(private router: Router) {
    this.router.navigate(['/home']);
  }

  tabSelect(tab) {
    this.router.navigate([tab.addedItems[0].route]);
  }


}
