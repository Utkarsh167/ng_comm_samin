(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/modules/layout/company/company.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/layout/company/company.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/layout/company/company.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/layout/company/company.component.ts ***!
  \*************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyComponent = class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.scss */ "./src/app/modules/layout/company/company.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CompanyComponent);



/***/ }),

/***/ "./src/app/modules/layout/company/company.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/layout/company/company.module.ts ***!
  \**********************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.component */ "./src/app/modules/layout/company/company.component.ts");
/* harmony import */ var src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var src_app_constant_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constant/routes */ "./src/app/constant/routes.ts");







const companyRoutes = [
    {
        path: '', component: _company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"],
        children: [
            {
                path: '', loadChildren: () => Promise.all(/*! import() | company-list-company-list-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("default~company-list-company-list-module~dashboard-list-dashboard-list-module~earning-list-earning-l~1af28cb1"), __webpack_require__.e("common"), __webpack_require__.e("company-list-company-list-module")]).then(__webpack_require__.bind(null, /*! ./company-list/company-list.module */ "./src/app/modules/layout/company/company-list/company-list.module.ts")).then(m => m.CompanyListModule),
                canLoad: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]], canActivate: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]]
            },
            {
                path: src_app_constant_routes__WEBPACK_IMPORTED_MODULE_6__["COMPANY_ADD"], loadChildren: () => Promise.all(/*! import() | company-add-company-add-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("default~company-add-company-add-module~company-edit-company-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("company-add-company-add-module")]).then(__webpack_require__.bind(null, /*! ./company-add/company-add.module */ "./src/app/modules/layout/company/company-add/company-add.module.ts")).then(m => m.CompanyAddModule), canLoad: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]], canActivate: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]]
            },
            {
                path: `${src_app_constant_routes__WEBPACK_IMPORTED_MODULE_6__["COMPANY_DETAIL"]}/:companyId`, loadChildren: () => Promise.all(/*! import() | company-detail-company-detail-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("company-detail-company-detail-module")]).then(__webpack_require__.bind(null, /*! ./company-detail/company-detail.module */ "./src/app/modules/layout/company/company-detail/company-detail.module.ts")).then(m => m.CompanyDetailModule), canLoad: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]], canActivate: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]]
            },
            {
                path: `${src_app_constant_routes__WEBPACK_IMPORTED_MODULE_6__["COMPANY_EDIT"]}/:companyId`, loadChildren: () => Promise.all(/*! import() | company-edit-company-edit-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("default~company-add-company-add-module~company-edit-company-edit-module"), __webpack_require__.e("company-edit-company-edit-module")]).then(__webpack_require__.bind(null, /*! ./company-edit/company-edit.module */ "./src/app/modules/layout/company/company-edit/company-edit.module.ts")).then(m => m.CompanyEditModule), canLoad: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]], canActivate: [src_app_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]]
            },
        ]
    }
];
let CompanyModule = class CompanyModule {
};
CompanyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(companyRoutes),
        ]
    })
], CompanyModule);



/***/ })

}]);
//# sourceMappingURL=company-company-module-es2015.js.map