import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from '../modules/shared/services/utility.service';
import { ADMIN } from '../constant/routes';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate, CanLoad {

  constructor(
    private _router: Router,
    private _utilityService: UtilityService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._utilityService.getAuthToken()) {
      return true;
    }
    return this.navigate();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._utilityService.getAuthToken()) {
      return true;
    }
    return this.navigate();

  }

  navigate() {
    this._router.navigate([`/${ADMIN}`]);
    return false;
  }
}

