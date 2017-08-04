import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

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
  loading = false;
  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event ) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
