import { Component } from '@angular/core';


export class Links {
  name: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'pos.borusan.com';

  constructor() {}

  ngOnInit() {
  }

  getLinks() {

  }


}
