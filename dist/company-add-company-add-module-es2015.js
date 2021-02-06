(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-add-company-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company-add/component/company-add.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company-add/component/company-add.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom_container\">\n  <div class=\"white_wrapper\">\n    <h2 class=\"heading\">Add Company</h2>\n    <div class=\"flex_row\">\n      <ul class=\"breadcrumb\">\n        <li>\n          <a [routerLink]=\"'COMPANY' | absolutePath\">Company</a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\" class=\"active\">Add</a>\n        </li>\n      </ul>\n    </div>\n    <form\n      action=\"\"\n      [formGroup]=\"companyForm\"\n      (submit)=\"addCompany(companyForm.value)\"\n    >\n      <div class=\"form_wrapper\">\n        <div class=\"flex_row\">\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Company Code</mat-label>\n                <input appNospace formControlName=\"companyCode\" matInput />\n                <mat-error>{{\n                  getControl(\"companyCode\") | validate: \"Company Code\"\n                }}</mat-error>\n                <mat-error *ngIf=\"isCompanyUniqueMsg\">{{\n                  isCompanyUniqueMsg\n                }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Company Name</mat-label>\n                <input\n                  appNospace\n                  formControlName=\"name\"\n                  matInput\n                  maxlength=\"50\"\n                />\n                <mat-error>{{\n                  getControl(\"name\") | validate: \"Company Name\"\n                }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n        <div class=\"flex_row\">\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Email ID</mat-label>\n                <input formControlName=\"email\" matInput />\n                <mat-error>{{\n                  getControl(\"email\") | validate: \"Email id\"\n                }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"flex_col_sm_5\" formArrayName=\"contactNumber\">\n            <div\n              class=\"form_filed_wrapper\"\n              *ngFor=\"\n                let number of contactNumber.controls;\n                let j = index;\n                last as last\n              \"\n              [formGroupName]=\"j\"\n            >\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Contact Number</mat-label>\n                <input matInput formControlName=\"phoneNumber\" numberOnly />\n                <mat-error>{{\n                  getArrayControl(\"phoneNumber\") | validate: \"Phone Number\"\n                }}</mat-error>\n              </mat-form-field>\n              <mat-icon\n                class=\"add\"\n                *ngIf=\"j == 0 && contactNumber.controls.length <= 2\"\n                matTooltip=\"Add More\"\n                matTooltipPosition=\"before\"\n                (click)=\"addItem()\"\n              >\n                add_circle\n              </mat-icon>\n\n              <mat-icon\n                class=\"add\"\n                *ngIf=\"j > 0\"\n                matTooltip=\"Remove\"\n                matTooltipPosition=\"before\"\n                (click)=\"removeNumber(j)\"\n              >\n                remove_circle\n              </mat-icon>\n            </div>\n          </div>\n        </div>\n        <div class=\"flex_row\">\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Select company Type</mat-label>\n                <mat-select\n                  formControlName=\"companyType\"\n                  placeholder=\"Select company type\"\n                >\n                  <mat-option\n                    *ngFor=\"let type of companyTypes\"\n                    [value]=\"type.id\"\n                  >\n                    {{ type.companyType }}</mat-option\n                  >\n                </mat-select>\n                <mat-error>{{\n                  getControl(\"companyType\") | validate: \"Company Type\"\n                }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper search\">\n              <mat-form-field\n                appearance=\"outline\"\n                [ngClass]=\"isAddress ? 'mat-form-field-invalid' : ''\"\n              >\n                <mat-label>Search Branch Location</mat-label>\n                <input\n                  matInput\n                  appGooglePlaces\n                  class=\"textbox\"\n                  placeholder=\"Search Branch Location\"\n                  (selectAddress)=\"setAddress($event)\"\n                  formControlName=\"address\"\n                />\n                <mat-error>{{\n                  getControl(\"address\") | validate: \"Address\"\n                }}</mat-error>\n              </mat-form-field>\n              <mat-icon matPrefix class=\"searchPanel\">search</mat-icon>\n            </div>\n          </div>\n        </div>\n        <div class=\"flex_row\">\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Total Employees</mat-label>\n                <input formControlName=\"totalEmp\" numberOnly matInput />\n                <mat-error>{{\n                  getControl(\"totalEmp\") | validate: \"number Of employees\"\n                }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Select subscription</mat-label>\n                <mat-select\n                  formControlName=\"planeId\"\n                  placeholder=\"Select subscription \"\n                >\n                  <mat-option\n                    *ngFor=\"let sub of allSubscriptions\"\n                    [value]=\"sub._id\"\n                  >\n                    {{ sub.name }}</mat-option\n                  >\n                </mat-select>\n                <mat-error>{{\n                  getControl(\"planeId\") | validate: \"subscription plan\"\n                }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"flex_row\">\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Max Service Range (In Km)</mat-label>\n                <input\n                  appNospace\n                  type=\"number\"\n                  formControlName=\"maxGroupRadius\"\n                  matInput\n                />\n                <mat-error>{{\n                  getControl(\"maxGroupRadius\") | validate: \"Max Service Range\"\n                }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div\n            class=\"flex_col_sm_5\"\n            *ngIf=\"companyForm.controls.serverType.value == 'house'\"\n          >\n            <div class=\"form_filed_wrapper\">\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Enter Url</mat-label>\n                <input appNospace formControlName=\"url\" matInput />\n                <mat-error>{{ getControl(\"url\") | validate: \"url\" }}</mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"flex_row\">\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <mat-label class=\"form_label\">Server Type</mat-label>\n              <mat-radio-group\n                formControlName=\"serverType\"\n                (change)=\"checkServerType($event.value)\"\n              >\n                <mat-radio-button\n                  [checked]=\"server.checked\"\n                  *ngFor=\"let server of serverTypes\"\n                  [value]=\"server.id\"\n                >\n                  {{ server.name }}\n                </mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n\n          <div class=\"flex_col_sm_5\">\n            <div class=\"form_filed_wrapper\">\n              <label class=\"form_label\">Payment Type</label>\n              <mat-radio-group formControlName=\"paymentType\">\n                <mat-radio-button\n                  [checked]=\"payment.checked\"\n                  *ngFor=\"let payment of paymentTypes\"\n                  [value]=\"payment.id\"\n                >\n                  {{ payment?.name }}\n                </mat-radio-button>\n              </mat-radio-group>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"flex_row\">\n          <div class=\"flex_col_sm_10\">\n            <div class=\"form_filed_wrapper text-center\">\n              <ul class=\"btn_wrapper\">\n                <li>\n                  <button\n                    mat-raised-button\n                    [routerLink]=\"'COMPANY' | absolutePath\"\n                    type=\"button\"\n                  >\n                    Cancel\n                  </button>\n                </li>\n                <li>\n                  <button mat-raised-button color=\"primary\">Send Invite</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/layout/company/company-add/company-add.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/layout/company/company-add/company-add.module.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddModule", function() { return CompanyAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _company_add_component_company_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../company-add/component/company-add.component */ "./src/app/modules/layout/company/company-add/component/company-add.component.ts");
/* harmony import */ var _pipes_absolute_routing_absolute_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../pipes/absolute-routing/absolute-routing.module */ "./src/app/pipes/absolute-routing/absolute-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _layout_shared_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../layout-shared/search-filter/search-filter.module */ "./src/app/modules/layout/layout-shared/search-filter/search-filter.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_company_add_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/company-add.service */ "./src/app/modules/layout/company/company-add/service/company-add.service.ts");
/* harmony import */ var src_app_pipes_validation_error_validation_error_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/validation-error/validation-error.pipe.module */ "./src/app/pipes/validation-error/validation-error.pipe.module.ts");
/* harmony import */ var src_app_directives_google_places_google_places_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/directives/google-places/google-places.module */ "./src/app/directives/google-places/google-places.module.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js");
/* harmony import */ var src_app_directives_nospace_nospace_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/directives/nospace/nospace.module */ "./src/app/directives/nospace/nospace.module.ts");
/* harmony import */ var src_app_directives_number_only_number_only_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/directives/number-only/number-only.module */ "./src/app/directives/number-only/number-only.module.ts");












 // <-- #2 import module


const routes = [
    {
        path: '',
        component: _company_add_component_company_add_component__WEBPACK_IMPORTED_MODULE_1__["CompanyAddComponent"]
    },
];
let CompanyAddModule = class CompanyAddModule {
};
CompanyAddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_company_add_component_company_add_component__WEBPACK_IMPORTED_MODULE_1__["CompanyAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _layout_shared_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_4__["SearchFilterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _pipes_absolute_routing_absolute_routing_module__WEBPACK_IMPORTED_MODULE_2__["AbsoluteRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            src_app_pipes_validation_error_validation_error_pipe_module__WEBPACK_IMPORTED_MODULE_10__["ValidationErrorPipeModule"],
            src_app_directives_google_places_google_places_module__WEBPACK_IMPORTED_MODULE_11__["GooglePlacesModule"],
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__["RxReactiveFormsModule"],
            src_app_directives_nospace_nospace_module__WEBPACK_IMPORTED_MODULE_13__["NospaceModule"],
            src_app_directives_number_only_number_only_module__WEBPACK_IMPORTED_MODULE_14__["NumberOnlyModule"]
        ],
        providers: [_service_company_add_service__WEBPACK_IMPORTED_MODULE_9__["CompanyAddService"]]
    })
], CompanyAddModule);



/***/ }),

/***/ "./src/app/modules/layout/company/company-add/component/company-add.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/layout/company/company-add/component/company-add.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nmat-radio-button {\n  margin: 0 43px 0 0;\n}\n.flex_row {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.breadcrumb {\n  width: 100%;\n  padding: 10px 15px;\n}\n.breadcrumb li {\n  display: inline-block;\n}\n.breadcrumb li a {\n  color: #006CB8;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n  outline: none;\n}\n.breadcrumb li a:before {\n  padding: 0 5px;\n  color: #B7BEC1;\n  content: \"/ \";\n}\n.breadcrumb li a:after {\n  content: \"/ \";\n  padding: 0 2px;\n  color: #A2ABAE;\n}\n.breadcrumb li a.active {\n  color: #262c2d;\n  cursor: default;\n}\n.breadcrumb li a.active:after {\n  display: none;\n}\n.breadcrumb li:first-child a:before, .breadcrumb li:first-child a:after {\n  display: none;\n}\n.searchPanel {\n  position: absolute;\n  top: 20px;\n  right: 3px;\n  background: #fff;\n  width: 29px;\n  font-size: 23px;\n}\n.flex_row {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.flex_row .form_filed_wrapper {\n  position: relative;\n}\n.flex_row .form_filed_wrapper .add {\n  position: absolute;\n  top: 20px;\n  right: -40px;\n  cursor: pointer;\n  outline: none;\n}\n.search {\n  position: relative;\n}\n.search .searchPanel {\n  position: absolute;\n  top: 20px;\n  right: 10px;\n}\n.addrError {\n  position: absolute;\n  bottom: 3px;\n  font-size: 12px;\n  padding-left: 10px;\n}\n:host ::ng-deep .mat-select.mat-select-invalid .mat-select-placeholder {\n  color: #f00;\n}\n:host ::ng-deep .mat-form-field-invalid input::-webkit-input-placeholder {\n  color: #f00;\n}\n:host ::ng-deep .mat-form-field-invalid input::-moz-placeholder {\n  color: #f00;\n}\n:host ::ng-deep .mat-form-field-invalid input::-ms-input-placeholder {\n  color: #f00;\n}\n:host ::ng-deep .mat-form-field-invalid input::placeholder {\n  color: #f00;\n}\nbutton {\n  box-shadow: none !important;\n  border: 1px solid #79f2c0 !important;\n  min-width: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcGFueS9jb21wYW55LWFkZC9jb21wb25lbnQvY29tcGFueS1hZGQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmFuc2xhYmRldjIvRGV2L2FuZ3VsYXIvY29tbV9mZV9zYWRtaW4vc3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wYW55L2NvbXBhbnktYWRkL2NvbXBvbmVudC9jb21wYW55LWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtBREVKO0FDQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBREVKO0FDQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0RJO0VBQ0kscUJBQUE7QURHUjtBQ0ZRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURJWjtBQ0hZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FES2hCO0FDSFk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QURLaEI7QUNIWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FES2hCO0FDSmdCO0VBQ0ksYUFBQTtBRE1wQjtBQ0FnQjtFQUVJLGFBQUE7QURDcEI7QUNNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FESEo7QUNNQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QURISjtBQ0lJO0VBQ0ksa0JBQUE7QURGUjtBQ0dRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FERFo7QUNNQTtFQUNJLGtCQUFBO0FESEo7QUNJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURGUjtBQ01BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FESEo7QUNVUTtFQUNJLFdBQUE7QURQWjtBQ2FZO0VBQ0ksV0FBQTtBRFhoQjtBQ1VZO0VBQ0ksV0FBQTtBRFhoQjtBQ1VZO0VBQ0ksV0FBQTtBRFhoQjtBQ1VZO0VBQ0ksV0FBQTtBRFhoQjtBQ2dCQTtFQUNJLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBRGJKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcGFueS9jb21wYW55LWFkZC9jb21wb25lbnQvY29tcGFueS1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDQzcHggMCAwO1xufVxuXG4uZmxleF9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgLTEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5icmVhZGNydW1iIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJyZWFkY3J1bWIgbGkgYSB7XG4gIGNvbG9yOiAjMDA2Q0I4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJyZWFkY3J1bWIgbGkgYTpiZWZvcmUge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgY29sb3I6ICNCN0JFQzE7XG4gIGNvbnRlbnQ6IFwiLyBcIjtcbn1cbi5icmVhZGNydW1iIGxpIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIi/CoFwiO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgY29sb3I6ICNBMkFCQUU7XG59XG4uYnJlYWRjcnVtYiBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjYyYzJkO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uYnJlYWRjcnVtYiBsaSBhLmFjdGl2ZTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnJlYWRjcnVtYiBsaTpmaXJzdC1jaGlsZCBhOmJlZm9yZSwgLmJyZWFkY3J1bWIgbGk6Zmlyc3QtY2hpbGQgYTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWFyY2hQYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMjlweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uZmxleF9yb3cge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mbGV4X3JvdyAuZm9ybV9maWxlZF93cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsZXhfcm93IC5mb3JtX2ZpbGVkX3dyYXBwZXIgLmFkZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogLTQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2ggLnNlYXJjaFBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uYWRkckVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2YwMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW52YWxpZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2YwMDtcbn1cblxuYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzlmMmMwICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTA0cHg7XG59IiwibWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDQzcHggMCAwO1xufVxuXG4uZmxleF9yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICMwMDZDQjg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0I3QkVDMTtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIi8gXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIi9cXDAwYTBcIjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0EyQUJBRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDM4LCA0NCwgNDUpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2hQYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uZmxleF9yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC5mb3JtX2ZpbGVkX3dyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5hZGQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5zZWFyY2hQYW5lbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICB9XG59XG5cbi5hZGRyRXJyb3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDNweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5cbjpob3N0IDo6bmctZGVlcHtcbiAgICAubWF0LXNlbGVjdHtcbiAgICAgICAgJi5tYXQtc2VsZWN0LWludmFsaWR7XG4gICAgICAgIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVye1xuICAgICAgICAgICAgY29sb3I6I2YwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG4gICAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWR7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XG4gICAgICAgICAgICAgICAgY29sb3I6I2YwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmJ1dHRvbntcbiAgICBib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzlmMmMwICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOjEwNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/layout/company/company-add/component/company-add.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/layout/company/company-add/component/company-add.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CompanyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddComponent", function() { return CompanyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_company_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/company-add.service */ "./src/app/modules/layout/company/company-add/service/company-add.service.ts");
/* harmony import */ var src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constant/app-constant */ "./src/app/constant/app-constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constant_absolute_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constant/absolute-routes */ "./src/app/constant/absolute-routes.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js");
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ "./src/app/modules/shared/services/utility.service.ts");










let CompanyAddComponent = class CompanyAddComponent {
    constructor(_companyAddService, _fb, _router, _uitilityService) {
        this._companyAddService = _companyAddService;
        this._fb = _fb;
        this._router = _router;
        this._uitilityService = _uitilityService;
        this.paymentTypes = src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_4__["COMPANY_PAYMENT_TYPES"];
        this.serverTypes = src_app_constant_app_constant__WEBPACK_IMPORTED_MODULE_4__["COMPANY_SERVER_TYPES"];
        this.companyTypes = [];
        this.allSubscriptions = [];
        this.isAddress = false;
        this.phoneArrayLength = 0;
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(800), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
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
        return this.companyForm.controls.contactNumber["controls"][0].controls[control];
    }
    /***********  END   ************/
    /***********  Form array getter   ************/
    get contactNumber() {
        return this.companyForm.controls["contactNumber"];
    }
    /***********  END   ************/
    address() {
        return this.companyForm.controls["address"];
    }
    /***********  For adding more contact number   ************/
    addItem() {
        this.contactNumber.push(this._companyAddService.createItem());
        this.phoneArrayLength = this.contactNumber.controls.length;
    }
    /***********  END   ************/
    /***********  For removing contact number from from array   ************/
    removeNumber(index) {
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
    checkCompanyCodeUnique(data) {
        this._companyAddService
            .checkCompanyCodeUnique({ companyCode: data })
            .subscribe(resp => {
            if (resp && resp.statusCode == 200) {
                this.isCompanyUniqueMsg = null;
            }
            else if (resp && resp.statusCode == 400) {
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
                let data = Object.assign({}, formValue);
                this.companyForm.disable();
                this._companyAddService.addCompany(data).subscribe(resp => {
                    if (resp && resp.statusCode == 200) {
                        this._router.navigate([src_app_constant_absolute_routes__WEBPACK_IMPORTED_MODULE_7__["COMPANY"]]);
                    }
                }, err => {
                    this.companyForm.enable();
                });
            }
            else {
                this._uitilityService.showAlert("Please select the valid address");
            }
        }
        else {
            this._uitilityService.showAlert("Please select the address");
        }
    }
    /***********  END   ************/
    checkServerType(event) {
        if (event == "fleet") {
            this.companyForm.controls.url.clearValidators();
            this.companyForm.controls.url.setErrors(null);
        }
        else {
            this.companyForm.controls.url.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].url()
            ]);
        }
    }
};
CompanyAddComponent.ctorParameters = () => [
    { type: _service_company_add_service__WEBPACK_IMPORTED_MODULE_3__["CompanyAddService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] }
];
CompanyAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-company-add",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company-add/component/company-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-add.component.scss */ "./src/app/modules/layout/company/company-add/component/company-add.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_company_add_service__WEBPACK_IMPORTED_MODULE_3__["CompanyAddService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]])
], CompanyAddComponent);



/***/ }),

/***/ "./src/app/modules/layout/company/company-add/service/company-add.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/layout/company/company-add/service/company-add.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CompanyAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddService", function() { return CompanyAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ "./src/app/modules/shared/services/utility.service.ts");
/* harmony import */ var src_app_modules_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/http.service */ "./src/app/modules/shared/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/form.service */ "./src/app/modules/shared/services/form.service.ts");
/* harmony import */ var src_app_constant_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constant/url */ "./src/app/constant/url.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_constant_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/constant/message */ "./src/app/constant/message.ts");










let CompanyAddService = class CompanyAddService {
    constructor(_formService, _formBuilder, _http, _uitilityService) {
        this._formService = _formService;
        this._formBuilder = _formBuilder;
        this._http = _http;
        this._uitilityService = _uitilityService;
    }
    createCompanyForm() {
        return this._formBuilder.group({
            "name": this._formService.getControl('name'),
            "email": this._formService.getControl('email'),
            "companyCode": this._formService.getControl('alphaNumeric'),
            "companyType": this._formService.getControl('dropdown'),
            "address": this._formService.getControl('address'),
            "totalEmp": this._formService.getControl('employeeCapacity'),
            "paymentType": this._formService.getControl('alphabetic'),
            "serverType": this._formService.getControl('dropdown'),
            "planeId": this._formService.getControl('address'),
            "url": this._formService.getControl('url'),
            "longitude": "",
            "latitude": "",
            "maxGroupRadius": this._formService.getControl('dropdown'),
            "contactNumber": this._formBuilder.array([this.createItem()]),
        });
    }
    createItem() {
        return this._formBuilder.group({
            phoneNumber: this._formService.getControl('phone')
        });
    }
    getAllSubscription() {
        return this._http.get(src_app_constant_url__WEBPACK_IMPORTED_MODULE_6__["GET_ALL_SUBSCRIPTION"]);
    }
    getCmpnyType() {
        return this._http.get(src_app_constant_url__WEBPACK_IMPORTED_MODULE_6__["GET_ALL_COMPANYS_TYPE"]);
    }
    checkCompanyCodeUnique(data) {
        return this._http.get(src_app_constant_url__WEBPACK_IMPORTED_MODULE_6__["COMPANY_CODE_UNIQUE"], data, false);
    }
    addCompany(data) {
        return this._http.post(src_app_constant_url__WEBPACK_IMPORTED_MODULE_6__["ADD_NEW_COMPANY"], data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(response => {
            this._uitilityService.showAlert(src_app_constant_message__WEBPACK_IMPORTED_MODULE_9__["COMMON_MESSAGES"]['ADDED']('Company'));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(error)));
    }
};
CompanyAddService.ctorParameters = () => [
    { type: src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_modules_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }
];
CompanyAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_modules_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
], CompanyAddService);



/***/ })

}]);
//# sourceMappingURL=company-add-company-add-module-es2015.js.map