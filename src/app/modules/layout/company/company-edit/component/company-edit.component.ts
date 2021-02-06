import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, FormControl } from "@angular/forms";
import { CompanyEditService } from "../service/company-edit.service";
import {
  COMPANY_PAYMENT_TYPES,
  COMPANY_SERVER_TYPES
} from "src/app/constant/app-constant";
import { Router, ActivatedRoute } from "@angular/router";
import { COMPANY } from "src/app/constant/absolute-routes";
import { UtilityService } from "src/app/modules/shared/services/utility.service";

@Component({
  selector: "app-company-edit",
  templateUrl: "./company-edit.component.html",
  styleUrls: ["./company-edit.component.scss"]
})
export class CompanyEditComponent implements OnInit {
  companyForm: FormGroup;
  paymentTypes = COMPANY_PAYMENT_TYPES;
  serverTypes = COMPANY_SERVER_TYPES;
  companyTypes: any[] = [];
  allSubscriptions: any[] = [];
  isAddress: boolean = false;
  items: FormArray;
  phoneArrayLength: number = 0;
  companyId: string;

  constructor(
    private _companyEditService: CompanyEditService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _uitilityService: UtilityService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.companyId = this._route.snapshot.params.companyId;
    this.getAllCompanyType();
    this.getCabDetail();
  }

  getCabDetail() {
    this._companyEditService
      .getCompanyDetails({ userId: this.companyId })
      .subscribe(
        response => {
          if (!response.data) {
            this._router.navigate([COMPANY]);
          }
          this.getAndSetFormValue(response.data);
        },
        err => {
          this._router.navigate([COMPANY]);
        }
      );
  }

  getAndSetFormValue(data) {
    this.companyForm.patchValue({
      name: data.name,
      email: data.email,
      companyCode: data.companyCode,
      companyType: data.companyType._id,
      address: data.companyBranch.address,
      totalEmp: data.totalEmp,
      paymentType: data.paymentType,
      serverType: data.serverType,
      planeId: data.plane.name,
      url: data.url,
      longitude: data.companyBranch.coordinates[1],
      latitude: data.companyBranch.coordinates[0],
      maxGroupRadius: data.maxGroupRadius
    });
    data.contactNumber.map(phone => {
      this.contactNumber.push(
        this._fb.group({
          phoneNumber: phone.phoneNumber
        })
      );
    });
  }

  /********* Create company form ***********/
  createForm() {
    this.companyForm = this._companyEditService.createCompanyForm();
    this.companyForm.controls.paymentType.setValue("invoice"); // set paymemt mode initail value
    this.companyForm.controls.serverType.setValue("house"); // set server type initail value
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
    this.contactNumber.push(this._companyEditService.createItem());
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

  /***********  For getting all the company type   ************/
  getAllCompanyType() {
    this._companyEditService.getCmpnyType().subscribe(resp => {
      if (resp && resp.statusCode == 200) {
        this.companyTypes = resp.data;
      }
    });
  }
  /***********  END   ************/

  /***********  For editing the company   ************/

  editCompany(formValue: any) {
    if (this.companyForm.invalid || this.companyForm.disabled) {
      return;
    }
    if (formValue.address) {
      if (formValue.latitude && formValue.longitude) {
        delete formValue.planeId;
        let data = { ...formValue };
        this.companyForm.disable();
        if (this.companyId) {
          data["userId"] = this.companyId;
        }
        this._companyEditService.editCompany(data).subscribe(
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
}
