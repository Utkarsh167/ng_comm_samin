(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/login/component/login.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/login/component/login.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"form_heading\">Login</h1>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n  <div class=\"form_filed_wrapper\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput formControlName=\"email\">\n      <!-- <mat-error>{{getControl('email')|validate:'email'}}</mat-error> -->\n    </mat-form-field>\n  </div>\n  <div class=\"form_filed_wrapper\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input matInput formControlName=\"password\" [type]=\"hide ? 'password' :'text'\">\n      <!-- <mat-error>{{getControl('password')|validate:'password'}}</mat-error> -->\n      <mat-icon matSuffix (click)=\"hide = !hide\">\n        {{hide ? 'visibility_off' :'visibility'}}\n      </mat-icon>\n    </mat-form-field>\n  </div>\n  <div class=\"form_filed_wrapper text-right\">\n    <a class=\"forgot\" [routerLink]=\"'FORGOT_PASSWORD'|absolutePath\">Forgot Password</a>\n  </div>\n  <div class=\"form_filed_wrapper text-center\">\n    <button mat-raised-button color=\"primary\">Submit</button>\n  </div>\n</form>");

/***/ }),

/***/ "./src/app/modules/account/login/component/login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/account/login/component/login.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9sb2dpbi9jb21wb25lbnQvbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/account/login/component/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/account/login/component/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ "./src/app/modules/account/login/service/login.service.ts");



let LoginComponent = class LoginComponent {
    constructor(_loginService) {
        this._loginService = _loginService;
        this.hide = true;
        this.createLoginForm();
    }
    ngOnInit() {
    }
    /*
        Method For Creating Login Form
    */
    createLoginForm() {
        this.loginForm = this._loginService.createLoginForm();
    }
    getControl(control) {
        return this.loginForm.controls[control];
    }
    /*
         Method For Calling Login API
    */
    login() {
        if (this.loginForm.invalid || this.loginForm.disabled) {
            return;
        }
        const data = Object.assign({}, this.loginForm.value);
        this.loginForm.disable();
        this._loginService.login(data).subscribe(response => {
        }, err => {
            this.loginForm.enable();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/login/component/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/account/login/component/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/account/login/login.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/account/login/login.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/login.component */ "./src/app/modules/account/login/component/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/login.service */ "./src/app/modules/account/login/service/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









const routes = [
    { path: '', component: _component_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]
        ],
        providers: [_service_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/modules/account/login/service/login.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/account/login/service/login.service.ts ***!
  \****************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/http.service */ "./src/app/modules/shared/services/http.service.ts");
/* harmony import */ var _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/utility.service */ "./src/app/modules/shared/services/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/form.service */ "./src/app/modules/shared/services/form.service.ts");
/* harmony import */ var src_app_constant_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constant/url */ "./src/app/constant/url.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let LoginService = class LoginService {
    constructor(_formBuilder, _http, _utilityService, _router, _formService // private _dataTransferService: DataTransferService
    ) {
        this._formBuilder = _formBuilder;
        this._http = _http;
        this._utilityService = _utilityService;
        this._router = _router;
        this._formService = _formService;
    }
    /*
          Method For Creating Login Form
      */
    createLoginForm() {
        return this._formBuilder.group({
            email: this._formService.getControl("email"),
            password: this._formService.getControl("password")
        });
    }
    /*
          Method For Calling Login API
      */
    login(data) {
        data = this._utilityService.trim(data);
        return this._http.post(src_app_constant_url__WEBPACK_IMPORTED_MODULE_8__["LOGIN"], data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(response => {
            this.loginSuccess(response.data);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err)));
    }
    /*
          Method For Login
      */
    loginSuccess(data) {
        localStorage.setItem("fleet-super-admin-token", data["accessToken"]);
        localStorage.setItem("fleet-super-admin-id", data.adminObject["id"]);
        // this._dataTransferService.profileData = data.adminObject;
        this._router.navigate(["/admin/company"]);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"] // private _dataTransferService: DataTransferService
     }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _shared_services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"] // private _dataTransferService: DataTransferService
    ])
], LoginService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map