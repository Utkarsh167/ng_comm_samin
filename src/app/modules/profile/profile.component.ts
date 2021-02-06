import { Component, OnInit } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData;
  isEdit: boolean= false;
  editProfileForm: FormGroup;
  constructor(private _editProfileService: ProfileService) {
    this.editProfileForm = this._editProfileService.createEditProfileForm();
   }

  ngOnInit() {
    this.ProfileDetails();
  }

  ProfileDetails() {
    this._editProfileService.getProfileDetails().subscribe(resp => {
      this.userData = resp.data;
    })
  }

  getControl(name) {
    return this.editProfileForm.controls[name];
  }

  onUpdateProfile() {
    if (this.editProfileForm.invalid || this.editProfileForm.value.name.trim() == this.userData.name ) {
      return;
    }
    this.isEdit = false;
    let data = { ...this.editProfileForm.value, email: this.userData.email  };
    this._editProfileService.editProfile(data)
      .subscribe(
        response => {
          this.ProfileDetails();
        },
        error => {
          // this.changePasswordForm.enable();
        }

      )

  }

  onCancel() {
    this.isEdit = false;
  }

  onEdit() {
    this.isEdit = true;
    this.editProfileForm.patchValue({name: this.userData.name});

  }

}
