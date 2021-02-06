import { Component } from '@angular/core';
import { LoaderService } from './modules/shared/services/loader.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loader = false;

  constructor(
    private _router: Router,
    private _loaderService: LoaderService
  ) {

  }
  ngOnInit() {
    this.listenRouterEvents();
  }

  /**
  * Method For Initiating and stopping loader on route change
  */
  listenRouterEvents() {
    this._router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this._loaderService.loader.next(true)
      }
      else if (event instanceof NavigationEnd) {
        this._loaderService.loader.next(false)
      }
    });
    this._loaderService.loader.subscribe(
      data => {
        setTimeout(() => {
          this.loader = data;
        })
      }
    )
  }

}
