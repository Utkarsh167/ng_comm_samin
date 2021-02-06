(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/forgot-password/component/forgot-password.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/forgot-password/component/forgot-password.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"form_heading\">Forgot Password</h1>\n<p class=\"form-para\">\n  {{title}}\n</p>\n<form [formGroup]=\"forgotForm\" (ngSubmit)=\"validateEmail()\">\n  <div class=\"form_filed_wrapper\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Enter Email Id</mat-label>\n      <input matInput placeholder=\"Email\" formControlName=\"email\">\n      <mat-error>\n        {{getControl('email')|validate:'email'}}\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form_filed_wrapper text-right\">\n    <a class=\"forgot\" [routerLink]=\"'LOGIN'|absolutePath\">Back</a>\n  </div>\n  <div class=\"form_filed_wrapper text-center\">\n    <button mat-raised-button color=\"primary\">Submit</button>\n  </div>\n</form>");

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

/***/ "./src/app/modules/account/forgot-password/component/forgot-password.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/account/forgot-password/component/forgot-password.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-para {\n  font-size: 18px;\n  line-height: 1.8;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYW5zbGFiZGV2Mi9EZXYvYW5ndWxhci9jb21tX2ZlX3NhZG1pbi9zcmMvYXBwL21vZHVsZXMvYWNjb3VudC9mb3Jnb3QtcGFzc3dvcmQvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hY2NvdW50L2ZvcmdvdC1wYXNzd29yZC9jb21wb25lbnQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9mb3Jnb3QtcGFzc3dvcmQvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXBhcmEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59IiwiLmZvcm0tcGFyYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/account/forgot-password/component/forgot-password.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/account/forgot-password/component/forgot-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/forgot-password.service */ "./src/app/modules/account/forgot-password/service/forgot-password.service.ts");
/* harmony import */ var src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant/message */ "./src/app/constant/message.ts");




let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(_forgotPasswordService) {
        this._forgotPasswordService = _forgotPasswordService;
        this.showSpinner = false;
        this.title = src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["POPUP_MESSAGES"].forgotPasswordTitle;
        this.createForgotPasswordForm();
    }
    ngOnInit() {
    }
    /*
        Method For Creating Forgot Password Form
    */
    createForgotPasswordForm() {
        this.forgotForm = this._forgotPasswordService.createForgotForm();
    }
    getControl(control) {
        return this.forgotForm.controls[control];
    }
    /*
         Method For Calling Validating Email
    */
    validateEmail() {
        if (this.forgotForm.invalid)
            return;
        const data = Object.assign({}, this.forgotForm.value);
        this.forgotForm.disable();
        this._forgotPasswordService.validateEmail(data)
            .subscribe(response => {
        }, err => {
            this.forgotForm.enable();
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _service_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/forgot-password/component/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/modules/account/forgot-password/component/forgot-password.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordService"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/modules/account/forgot-password/forgot-password.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/account/forgot-password/forgot-password.module.ts ***!
  \***************************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/forgot-password.component */ "./src/app/modules/account/forgot-password/component/forgot-password.component.ts");
/* harmony import */ var _guards_account_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../guards/account.guard */ "./src/app/guards/account.guard.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_forgot_password_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/forgot-password.service */ "./src/app/modules/account/forgot-password/service/forgot-password.service.ts");
/* harmony import */ var src_app_pipes_validation_error_validation_error_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/validation-error/validation-error.pipe.module */ "./src/app/pipes/validation-error/validation-error.pipe.module.ts");











const routes = [
    { path: '', component: _component_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"], canActivate: [_guards_account_guard__WEBPACK_IMPORTED_MODULE_6__["AccountGuard"]] }
];
let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            src_app_pipes_validation_error_validation_error_pipe_module__WEBPACK_IMPORTED_MODULE_10__["ValidationErrorPipeModule"]
        ],
        declarations: [_component_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]],
        providers: [_service_forgot_password_service__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordService"]]
    })
], ForgotPasswordModule);



/***/ }),

/***/ "./src/app/modules/account/forgot-password/service/forgot-password.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/account/forgot-password/service/forgot-password.service.ts ***!
  \************************************************************************************/
/*! exports provided: ForgotPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordService", function() { return ForgotPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/http.service */ "./src/app/modules/shared/services/http.service.ts");
/* harmony import */ var src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constant/message */ "./src/app/constant/message.ts");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/form.service */ "./src/app/modules/shared/services/form.service.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/utility.service */ "./src/app/modules/shared/services/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constant_absolute_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constant/absolute-routes */ "./src/app/constant/absolute-routes.ts");
/* harmony import */ var src_app_constant_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/constant/url */ "./src/app/constant/url.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");












let ForgotPasswordService = class ForgotPasswordService {
    constructor(_formBuilder, _http, _utilityService, _router, _formService) {
        this._formBuilder = _formBuilder;
        this._http = _http;
        this._utilityService = _utilityService;
        this._router = _router;
        this._formService = _formService;
    }
    /*
         Method For Creating Forgot Password Form
     */
    createForgotForm() {
        return this._formBuilder.group({
            email: this._formService.getControl('email')
        });
    }
    /*
       Method For Validating Forgot Password Email
   */
    validateEmail(data) {
        data = this._utilityService.trim(data);
        return this._http.post(src_app_constant_url__WEBPACK_IMPORTED_MODULE_9__["FORGOT_PASSWORD"], data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(response => {
            this.emailValidationSuccess();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["throwError"])(error)));
    }
    /*
       Method For Showing popup of successfully verifying and sending reset password link
   */
    emailValidationSuccess() {
        let data = {
            title: src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__["POPUP_MESSAGES"].passwordResetTitle,
            message: src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__["POPUP_MESSAGES"].passwordResetLink,
            yes: src_app_constant_message__WEBPACK_IMPORTED_MODULE_4__["POPUP_MESSAGES"].close,
            hideCancelButton: true
        };
        this._utilityService.openDialog(data).subscribe(success => {
            this._router.navigate([_constant_absolute_routes__WEBPACK_IMPORTED_MODULE_8__["LOGIN"]]);
        });
    }
};
ForgotPasswordService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"] }
];
ForgotPasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _shared_services_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"]])
], ForgotPasswordService);



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
//# sourceMappingURL=forgot-password-forgot-password-module-es2015.js.map