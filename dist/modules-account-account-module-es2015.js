(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app_account_wrapper\">\n    <div class=\"inner_wrapper\">\n        <div class=flex-col-row>\n            <div class=\"col-left\">\n                <div class=\"form_wrapper\">\n                    <figure class=\"log_wraper\">\n                        <img src=\"assets/images/new-logo.png\" alt=\"Flet Management\">\n                    </figure>\n                    <router-outlet></router-outlet>\n                </div>\n\n            </div>\n            <div class=\"col-right\">\n                <figure class=\"img_wrapper\">\n                    <img src=\"assets/images/ic_car_graphic.jpg\">\n                </figure>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/account/account.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/account/account.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app_account_wrapper {\n  position: relative;\n  min-height: 100%;\n  width: 100%;\n  padding: 25px 40px;\n  background-image: url('background-bg.jpg');\n}\n\n.flex-col-row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.col-left, .col-right {\n  width: 50%;\n  padding: 0 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.img_wrapper img {\n  width: 100%;\n}\n\n.inner_wrapper {\n  box-shadow: 2px 2px 10px #00000030;\n  height: 90vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-image: url('building.png');\n  background-position: bottom;\n  background-repeat: repeat-x;\n  background-position: 0 115%;\n  background-color: #fff;\n}\n\n.form_wrapper {\n  padding: 50px;\n  width: 500px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYW5zbGFiZGV2Mi9EZXYvYW5ndWxhci9jb21tX2ZlX3NhZG1pbi9zcmMvYXBwL21vZHVsZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBfYWNjb3VudF93cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtYmcuanBnJylcbn1cblxuLmZsZXgtY29sLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb2wtbGVmdCwgLmNvbC1yaWdodCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltZ193cmFwcGVyIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmlubmVyX3dyYXBwZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjMDAwMDAwMzA7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDExNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmZvcm1fd3JhcHBlciB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59IiwiLmFwcF9hY2NvdW50X3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1iZy5qcGdcIik7XG59XG5cbi5mbGV4LWNvbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC1sZWZ0LCAuY29sLXJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1nX3dyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbm5lcl93cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICMwMDAwMDAzMDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1aWxkaW5nLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmZvcm1fd3JhcHBlciB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/account/account.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/account/account.component.ts ***!
  \******************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.scss */ "./src/app/modules/account/account.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccountComponent);



/***/ }),

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/modules/account/account.component.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.routing */ "./src/app/modules/account/account.routing.ts");





let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _account_routing__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/modules/account/account.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/account/account.routing.ts ***!
  \****************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/modules/account/account.component.ts");
/* harmony import */ var _constant_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/routes */ "./src/app/constant/routes.ts");
/* harmony import */ var src_app_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/account.guard */ "./src/app/guards/account.guard.ts");






const accountRoutes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        children: [
            { path: '', redirectTo: _constant_routes__WEBPACK_IMPORTED_MODULE_4__["LOGIN"], pathMatch: 'full' },
            { path: _constant_routes__WEBPACK_IMPORTED_MODULE_4__["LOGIN"], loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/modules/account/login/login.module.ts")).then(m => m.LoginModule), canLoad: [src_app_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__["AccountGuard"]], canActivate: [src_app_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__["AccountGuard"]] },
            { path: _constant_routes__WEBPACK_IMPORTED_MODULE_4__["FORGOT_PASSWORD"], loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "./src/app/modules/account/forgot-password/forgot-password.module.ts")).then(m => m.ForgotPasswordModule), canLoad: [src_app_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__["AccountGuard"]], canActivate: [src_app_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__["AccountGuard"]] },
            { path: `${_constant_routes__WEBPACK_IMPORTED_MODULE_4__["RESET_PASSWORD"]}/:token`, loadChildren: () => __webpack_require__.e(/*! import() | reset-password-reset-password-module */ "reset-password-reset-password-module").then(__webpack_require__.bind(null, /*! ./reset-password/reset-password.module */ "./src/app/modules/account/reset-password/reset-password.module.ts")).then(m => m.ResetPasswordModule), canLoad: [src_app_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__["AccountGuard"]], canActivate: [src_app_guards_account_guard__WEBPACK_IMPORTED_MODULE_5__["AccountGuard"]] },
        ]
    }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(accountRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], AccountRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-account-account-module-es2015.js.map