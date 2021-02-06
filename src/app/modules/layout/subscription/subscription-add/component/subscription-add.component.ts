import { Component, OnInit } from '@angular/core';
import { SubscriptionAddService } from '../service/subscription-add.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SUBSCRIPTION } from 'src/app/constant/absolute-routes';
import { MONTHS, YEARS } from 'src/app/constant/app-constant'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-subscription-add',
  templateUrl: './subscription-add.component.html',
  styleUrls: ['./subscription-add.component.scss']
})
export class SubscriptionAddComponent implements OnInit {

  subscriptionForm: FormGroup;
  subscriptionId: string;
  months = MONTHS;
  year = YEARS;
  isSubUniqueMsg: string;
  allMonths: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor(private _subAddService: SubscriptionAddService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.subscriptionId = this._route.snapshot.params.subId;
    if (this.subscriptionId) {
      this.getSubscriptionDetail();
    }
    else {
      this.validateName();
    }

  }

  /* Method For getting subscription details
    *
  */
  getSubscriptionDetail() {
    this._subAddService.getSubscriptionDetails({ subscriptionId: this.subscriptionId }).subscribe(
      response => {
        this.patchValue(response.data);
      },
      err => {
        this._router.navigate([SUBSCRIPTION]);
      }
    )
  }

  patchValue(data) {
    let formValue = {
      "name": data.name,
      "price": data.price,
      "gracePeriod": data.gracePeriod,
      "description": data.description,
      "month": data.month,
      "year": data.year,
    };
    this.subscriptionForm.patchValue(formValue);
  }

  /********* Create Subcription form ***********/
  createForm() {
    this.subscriptionForm = this._subAddService.createSubscriptionForm();
    // this.subscriptionForm.controls.month.setValue(6); // set paymemt mode initail value
    // this.subscriptionForm.controls.year.setValue(0); // set server type initail value
  }
  /***********  END   ************/

  /********  Validate company code is unique or not ********/
  validateName() {
    this.subscriptionForm.controls.name.valueChanges.pipe(debounceTime(800), distinctUntilChanged()).subscribe(res => {
      if (res && res.length >= 3) {
        this.checkSubNameUnique(res);
      }
    });
  }
  /***********  END   ************/


  /***********  For checking company code is unique or not  ************/
  checkSubNameUnique(data: string) {

    this._subAddService.checkSubNameUnique({ name: data }).subscribe(resp => {
      if (resp && resp.statusCode == 200) {
        this.isSubUniqueMsg = null;
      }
      else if (resp && resp.statusCode == 400) {
        this.subscriptionForm.controls['name'].setErrors({ 'incorrect': true });
        this.isSubUniqueMsg = "Subscription Name must be unique";
      }
    })
  }
  /***********  END   ************/

  /***********  Get all controls   ************/
  getControl(control) {
    return this.subscriptionForm.controls[control];
  }
  /***********  END   ************/


  /***********  For adding the Subcription   ************/

  addSubcription(formValue: object) {
    if (this.subscriptionForm.invalid || this.subscriptionForm.disabled) {
      return;
    }
    let data = { ...formValue };
    this.subscriptionForm.disable();
    if (this.subscriptionId) {
      data['subscriptionId'] = this.subscriptionId;
    }
    this._subAddService.addSubscription(data).subscribe(resp => {
      if (resp && resp.statusCode == 200) {
        this._router.navigate([SUBSCRIPTION]);
      }
    },
      err => {
        this.subscriptionForm.enable();
      }
    )
  }
  /***********  END   ************/


  setMonths(event) {
    if (event === 0) {
      this.months.splice(0, 1)
    }
    else {
      this.months = this.allMonths;
    }
  }

}
