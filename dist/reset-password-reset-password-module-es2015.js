(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/reset-password/component/reset-password.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/reset-password/component/reset-password.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"form_heading\">Reset Password</h1>\n<form [formGroup]=\"resetForm\" (ngSubmit)=\"resetPassword()\">\n  <div class=\"form_filed_wrapper\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Enter New Password</mat-label>\n      <input matInput required [type]=\"passwordHide ? 'password'  :  'text'\" formControlName=\"password\">\n      <mat-icon matSuffix (click)=\"passwordHide= !passwordHide\">\n        {{passwordHide ? 'visibility_off' : 'visibility'}}\n      </mat-icon>\n      <mat-error>\n        {{getControl('password')|validate:'password'}}\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form_filed_wrapper\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Enter Confirm Password</mat-label>\n      <input matInput required [type]=\"confirmPasswordHide ? 'password' :'text'\" formControlName=\"confirmPassword\">\n      <mat-icon matSuffix (click)=\"confirmPasswordHide= !confirmPasswordHide\">\n        {{confirmPasswordHide ?'visibility_off' : 'visibility'}}\n      </mat-icon>\n      <mat-error>\n        {{getControl('confirmPassword')|validate:'confirm password'}}\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n\n  <div class=\"form_filed_wrapper text-center\">\n    <button mat-raised-button color=\"primary\">Submit</button>\n  </div>\n</form>");

/***/ }),

/***/ "./src/app/constant/error.ts":
/*!***********************************!*\
  !*** ./src/app/constant/error.ts ***!
  \***********************************/
/*! exports provided: PATTERN_ERRORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATTERN_ERRORS", function() { return PATTERN_ERRORS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/app/constant/message.ts");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns */ "./src/app/constant/patterns.ts");



const PATTERN_ERRORS = (pattern, key) => {
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].email) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].password) {
        return `${Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key)} can not contain blank spaces`;
    }
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].name) {
        return `${Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key)} can not be blank`;
    }
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].phone) {
        return `${Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key)} must contain only numbers and can not start with 0`;
    }
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].price) {
        return `${Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key)} must contain only numbers and can not start with 0`;
    }
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].alphaNumeric) {
        return `${Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key)} can contain only characters and numbers`;
    }
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].numeric) {
        return `${Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key)} can contain only numbers`;
    }
    if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].alphabetsWithSpace) {
        return `${Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key)} can contain only characters and space`;
    }
};


/***/ }),

/***/ "./src/app/modules/account/reset-password/component/reset-password.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/account/reset-password/component/reset-password.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9yZXNldC1wYXNzd29yZC9jb21wb25lbnQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/reset-password/component/reset-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/account/reset-password/component/reset-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_reset_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/reset-password.service */ "./src/app/modules/account/reset-password/service/reset-password.service.ts");




let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(_accountService, _route) {
        this._accountService = _accountService;
        this._route = _route;
        this.passwordHide = true;
        this.confirmPasswordHide = true;
        this.resetForm = this._accountService.createResetPasswordForm();
        this.token = this._route.snapshot.params.token;
    }
    ngOnInit() {
    }
    getControl(control) {
        return this.resetForm.controls[control];
    }
    resetPassword() {
        if (this.resetForm.invalid || this.resetForm.disabled)
            return;
        let data = Object.assign({}, this.resetForm.value);
        this.resetForm.disable();
        data['token'] = this.token;
        this._accountService.resetPassword(data)
            .subscribe(response => {
        }, err => {
            this.resetForm.enable();
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _service_reset_password_service__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/reset-password/component/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/modules/account/reset-password/component/reset-password.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_reset_password_service__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/modules/account/reset-password/reset-password.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/reset-password/reset-password.module.ts ***!
  \*************************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/reset-password.component */ "./src/app/modules/account/reset-password/component/reset-password.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_pipes_validation_error_validation_error_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/validation-error/validation-error.pipe.module */ "./src/app/pipes/validation-error/validation-error.pipe.module.ts");
/* harmony import */ var _service_reset_password_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/reset-password.service */ "./src/app/modules/account/reset-password/service/reset-password.service.ts");










const routes = [
    { path: '', component: _component_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] }
];
let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_pipes_validation_error_validation_error_pipe_module__WEBPACK_IMPORTED_MODULE_8__["ValidationErrorPipeModule"]
        ],
        declarations: [_component_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"]],
        providers: [_service_reset_password_service__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordService"]]
    })
], ResetPasswordModule);



/***/ }),

/***/ "./src/app/modules/account/reset-password/service/reset-password.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/account/reset-password/service/reset-password.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ResetPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordService", function() { return ResetPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/http.service */ "./src/app/modules/shared/services/http.service.ts");
/* harmony import */ var src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constant/message */ "./src/app/constant/message.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/utility.service */ "./src/app/modules/shared/services/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constant_absolute_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constant/absolute-routes */ "./src/app/constant/absolute-routes.ts");
/* harmony import */ var src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/shared/services/form.service */ "./src/app/modules/shared/services/form.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constant_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constant/url */ "./src/app/constant/url.ts");
/* harmony import */ var src_app_constant_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/constant/routes */ "./src/app/constant/routes.ts");













let ResetPasswordService = class ResetPasswordService {
    constructor(_formBuilder, _http, _utilityService, _router, _formService) {
        this._formBuilder = _formBuilder;
        this._http = _http;
        this._utilityService = _utilityService;
        this._router = _router;
        this._formService = _formService;
    }
    /*
        Method For Creating Registration Form
    */
    createResetPasswordForm() {
        return this._formBuilder.group({
            password: this._formService.getControl('password'),
            confirmPassword: this._formService.getControl('password')
        }, {
            validator: this._formService.matchPassword
        });
    }
    /*
        Method For Resetting The Password
    */
    resetPassword(data) {
        data = this._utilityService.trim(data);
        return this._http.post(`${_constant_url__WEBPACK_IMPORTED_MODULE_11__["RESET_PASSWORD"]}?accessToken=${data.token}`, { password: data.password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(response => {
            this.resetPasswordSuccess();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(error => {
            if (error.error.statusCode === 400 && error.error.responseType === 'INVALID_TOKEN') {
                this._router.navigate([`/${src_app_constant_routes__WEBPACK_IMPORTED_MODULE_12__["LINK_EXPIRED"]}`]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        }));
    }
    /*
       Method For Showing Reset Password Success
   */
    resetPasswordSuccess() {
        let data = {
            title: src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__["POPUP_MESSAGES"].passwordResetTitle,
            message: src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__["POPUP_MESSAGES"].passwordChanged,
            yes: src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__["POPUP_MESSAGES"].close,
            hideCancelButton: true
        };
        this._utilityService.openDialog(data).subscribe(success => {
            if (this._router.url.startsWith('/account'))
                this._router.navigate([_constant_absolute_routes__WEBPACK_IMPORTED_MODULE_8__["LOGIN"]]);
        });
    }
};
ResetPasswordService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_9__["FormService"] }
];
ResetPasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_9__["FormService"]])
], ResetPasswordService);



/***/ }),

/***/ "./src/app/pipes/validation-error/validation-error.pipe.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pipes/validation-error/validation-error.pipe.module.ts ***!
  \************************************************************************/
/*! exports provided: ValidationErrorPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorPipeModule", function() { return ValidationErrorPipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _validation_error_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-error.pipe */ "./src/app/pipes/validation-error/validation-error.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ValidationErrorPipeModule = class ValidationErrorPipeModule {
};
ValidationErrorPipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [
            _validation_error_pipe__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorPipe"],
        ],
        exports: [
            _validation_error_pipe__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorPipe"],
        ],
        providers: []
    })
], ValidationErrorPipeModule);



/***/ }),

/***/ "./src/app/pipes/validation-error/validation-error.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pipes/validation-error/validation-error.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ValidationErrorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorPipe", function() { return ValidationErrorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constant_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/error */ "./src/app/constant/error.ts");
/* harmony import */ var src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant/message */ "./src/app/constant/message.ts");




let ValidationErrorPipe = class ValidationErrorPipe {
    constructor() {
    }
    transform(control, name) {
        return control && control.errors ? this.getValidationError(control, name) : '';
    }
    getValidationError(control, name) {
        if (control.hasError('required')) {
            return `${Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name)} is required`;
        }
        if (control.hasError('pattern')) {
            let pattern = control.errors.pattern.requiredPattern;
            return Object(_constant_error__WEBPACK_IMPORTED_MODULE_2__["PATTERN_ERRORS"])(pattern, name);
        }
        if (control.hasError('minlength')) {
            return `${Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name)} must be at least ${control.errors.minlength.requiredLength} characters long`;
        }
        if (control.hasError('maxlength')) {
            return `${Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name)} can not be more than ${control.errors.maxlength.requiredLength} characters long`;
        }
        if (control.hasError('matchPassword')) {
            return src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["VALIDATION_MESSAGES"][name]['matchPassword'] || '';
        }
        if (control.hasError('min')) {
            return `${Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name)} can not be less than ${control.errors.min.min}`;
        }
        if (control.hasError('max')) {
            return `${Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name)} can not be greater than ${control.errors.max.max}`;
        }
        if (control.hasError('url')) {
            return ` Please enter correct ${Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name)}`;
        }
    }
};
ValidationErrorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'validate',
        pure: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ValidationErrorPipe);



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module-es2015.js.map