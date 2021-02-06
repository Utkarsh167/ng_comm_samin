import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChangePasswordService } from './service/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  hideConfirmPassword = true;
  hidePassword = true;
  changePasswordForm: FormGroup;
  constructor(
    private _changePasswordService: ChangePasswordService,
    ) {
      this.changePasswordForm = this._changePasswordService.getChangePasswordForm();
     }

  ngOnInit() {
  }

  getControl(name) {
    return this.changePasswordForm.controls[name];
  }

  changePassword() {
    if (this.changePasswordForm.valid || this.changePasswordForm.disabled) {
      let data = { ...this.changePasswordForm.value };
      this.changePasswordForm.disable();
      this._changePasswordService.changePassword(data)
        .subscribe(
          response => {},
          error => {
            this.changePasswordForm.enable();
          }

        )
    }
  }

}
