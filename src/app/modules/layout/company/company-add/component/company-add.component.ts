import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from "@angular/forms";
import { CompanyAddService } from "../service/company-add.service";
import {
  COMPANY_PAYMENT_TYPES,
  COMPANY_SERVER_TYPES
} from "src/app/constant/app-constant";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Router } from "@angular/router";
import { COMPANY } from "src/app/constant/absolute-routes";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { UtilityService } from "src/app/modules/shared/services/utility.service";

@Component({
  selector: "app-company-add",
  templateUrl: "./company-add.component.html",
  styleUrls: ["./company-add.component.scss"]
})
export class CompanyAddComponent implements OnInit {
  companyForm: FormGroup;
  paymentTypes = COMPANY_PAYMENT_TYPES;
  serverTypes = COMPANY_SERVER_TYPES;
  companyTypes: any[] = [];
  allSubscriptions: any[] = [];
  isAddress: boolean = false;
  isCompanyUniqueMsg: string;
  items: FormArray;
  phoneArrayLength: number = 0;

  constructor(
    private _companyAddService: CompanyAddService,
    private _fb: FormBuilder,
    private _router: Router,
    private _uitilityService: UtilityService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getAllSubscriptions();
    this.getAllCompanyType();
    this.validateCode();
  }

  /********* Create company form ***********/
  createForm() {
    this.companyForm = this._companyAddService.createCompanyForm();
    this.companyForm.controls.paymentType.setValue("invoice"); // set paymemt mode initail value
    this.companyForm.controls.serverType.setValue("house"); // set server type initail value
  }
  /***********  END   ************/

  /********  Validate company code is unique or not ********/
  validateCode() {
    this.companyForm.controls.companyCode.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged()
      )
      .subscribe(res => {
        if (res) {
          this.checkCompanyCodeUnique(res);
        }
      });
  }
  /***********  END   ************/

  /***********  Get all controls   ************/
  getControl(control) {
    return this.companyForm.controls[control];
  }
  /***********  END   ************/

  /***********  Get form array all controls   ************/
  getArrayControl(control) {
    return this.companyForm.controls.contactNumber["controls"][0].controls[
      control
    ];
  }
  /***********  END   ************/

  /***********  Form array getter   ************/
  get contactNumber() {
    return this.companyForm.controls["contactNumber"] as FormArray;
  }
  /***********  END   ************/

  address(): FormControl {
    return this.companyForm.controls["address"] as FormControl;
  }

  /***********  For adding more contact number   ************/
  addItem(): void {
    this.contactNumber.push(this._companyAddService.createItem());
    this.phoneArrayLength = this.contactNumber.controls.length;
  }
  /***********  END   ************/

  /***********  For removing contact number from from array   ************/
  removeNumber(index: number): void {
    this.contactNumber.removeAt(index);
    this.phoneArrayLength = this.contactNumber.controls.length;
  }
  /***********  END   ************/

  /***********  This method call when address select from google autocomplete   ************/
  setAddress(data) {
    this.companyForm.controls.address.setValue(data.formatted_address);
    this.companyForm.controls.latitude.setValue(data.latitude);
    this.companyForm.controls.longitude.setValue(data.longitude);
  }
  /***********  END   ************/

  /***********  For getting all the subscriptions   ************/
  getAllSubscriptions() {
    this._companyAddService.getAllSubscription().subscribe(resp => {
      if (resp && resp.statusCode == 200) {
        this.allSubscriptions = resp.data.subscriptionList;
      }
    });
  }
  /***********  END   ************/

  /***********  For getting all the company type   ************/
  getAllCompanyType() {
    this._companyAddService.getCmpnyType().subscribe(resp => {
      if (resp && resp.statusCode == 200) {
        this.companyTypes = resp.data;
      }
    });
  }
  /***********  END   ************/

  /***********  For checking company code is unique or not  ************/
  checkCompanyCodeUnique(data: string) {
    this._companyAddService
      .checkCompanyCodeUnique({ companyCode: data })
      .subscribe(resp => {
        if (resp && resp.statusCode == 200) {
          this.isCompanyUniqueMsg = null;
        } else if (resp && resp.statusCode == 400) {
          this.companyForm.controls["companyCode"].setErrors({
            incorrect: true
          });
          this.isCompanyUniqueMsg = "Company code must be unique";
        }
      });
  }
  /***********  END   ************/

  /***********  This method is call when user click outside the google input for validate the error   ************/
  // checkLocation() {
  //   if (!this.companyForm.controls["address"].value) {
  //     this.isAddress = true;
  //   } else {
  //     this.isAddress = false;
  //   }
  // }
  /***********  END   ************/

  /***********  For adding the company   ************/
  addCompany(formValue) {
    if (this.companyForm.invalid || this.companyForm.disabled) {
      return;
    }
    if (formValue.address) {
      if (formValue.latitude && formValue.longitude) {
        let data = { ...formValue };
        this.companyForm.disable();

        this._companyAddService.addCompany(data).subscribe(
          resp => {
            if (resp && resp.statusCode == 200) {
              this._router.navigate([COMPANY]);
            }
          },
          err => {
            this.companyForm.enable();
          }
        );
      } else {
        this._uitilityService.showAlert("Please select the valid address");
      }
    } else {
      this._uitilityService.showAlert("Please select the address");
    }
  }
  /***********  END   ************/

  checkServerType(event) {
    if (event == "fleet") {
      this.companyForm.controls.url.clearValidators();
      this.companyForm.controls.url.setErrors(null);
    } else {
      this.companyForm.controls.url.setValidators([
        Validators.required,
        // RxwebValidators.url()
      ]);
    }
  }
}
