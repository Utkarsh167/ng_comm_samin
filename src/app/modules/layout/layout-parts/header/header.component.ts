import { Component, OnInit } from '@angular/core';
import { POPUP_MESSAGES, SOMETHING_WENT_WRONG } from 'src/app/constant/message';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { LOGOUT } from 'src/app/constant/url';
import { LOGIN } from '../../../../constant/absolute-routes';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _utilityService: UtilityService,
    private _http: HttpService,
    private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    let data = {
      title: POPUP_MESSAGES.logout,
      message: POPUP_MESSAGES.logoutConfirmation,
      yes: POPUP_MESSAGES.logout
    }
    this._utilityService.openDialog(data).subscribe(success => {
      if (success) {
        this._http.post(LOGOUT, {})
          .pipe(
            tap(
              response => {
                if (response['statusCode'] === 200) {
                  this._utilityService.clearStorage();
                  this._router.navigate([LOGIN]);
                }
              }
            ),
            catchError(
              err => {
                this._utilityService.showAlert(SOMETHING_WENT_WRONG, 'error');
                return throwError(err);
              }
            )
          ).subscribe();
      }

    });

  }
}
