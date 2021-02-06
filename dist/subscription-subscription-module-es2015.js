(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/subscription/subscription.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/subscription/subscription.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/modules/layout/subscription/subscription.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/layout/subscription/subscription.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/layout/subscription/subscription.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/layout/subscription/subscription.component.ts ***!
  \***********************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubscriptionComponent = class SubscriptionComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscription',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/subscription/subscription.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subscription.component.scss */ "./src/app/modules/layout/subscription/subscription.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubscriptionComponent);



/***/ }),

/***/ "./src/app/modules/layout/subscription/subscription.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/layout/subscription/subscription.module.ts ***!
  \********************************************************************/
/*! exports provided: SubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.component */ "./src/app/modules/layout/subscription/subscription.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constant_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constant/routes */ "./src/app/constant/routes.ts");






const subscribeRoutes = [
    {
        path: '', component: _subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"],
        children: [
            {
                path: '', loadChildren: () => Promise.all(/*! import() | subscription-list-subscription-list-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("default~company-list-company-list-module~dashboard-list-dashboard-list-module~earning-list-earning-l~1af28cb1"), __webpack_require__.e("common"), __webpack_require__.e("subscription-list-subscription-list-module")]).then(__webpack_require__.bind(null, /*! ./subscription-list/subscription-list.module */ "./src/app/modules/layout/subscription/subscription-list/subscription-list.module.ts")).then(m => m.SubscriptionListModule),
            },
            {
                path: src_app_constant_routes__WEBPACK_IMPORTED_MODULE_5__["SUBSCRIPTION_ADD"], loadChildren: () => Promise.all(/*! import() | subscription-add-subscription-add-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("common"), __webpack_require__.e("subscription-add-subscription-add-module")]).then(__webpack_require__.bind(null, /*! ./subscription-add/subscription-add.module */ "./src/app/modules/layout/subscription/subscription-add/subscription-add.module.ts")).then(m => m.SubscriptionAddModule),
            },
            {
                path: `${src_app_constant_routes__WEBPACK_IMPORTED_MODULE_5__["SUBSCRIPTION_EDIT"]}/:subId`, loadChildren: () => Promise.all(/*! import() | subscription-add-subscription-add-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("common"), __webpack_require__.e("subscription-add-subscription-add-module")]).then(__webpack_require__.bind(null, /*! ./subscription-add/subscription-add.module */ "./src/app/modules/layout/subscription/subscription-add/subscription-add.module.ts")).then(m => m.SubscriptionAddModule),
            },
            {
                path: `${src_app_constant_routes__WEBPACK_IMPORTED_MODULE_5__["SUBSCRIPTION_DETAIL"]}/:subId`, loadChildren: () => Promise.all(/*! import() | subscription-detail-subscription-detail-module */[__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("subscription-detail-subscription-detail-module")]).then(__webpack_require__.bind(null, /*! ./subscription-detail/subscription-detail.module */ "./src/app/modules/layout/subscription/subscription-detail/subscription-detail.module.ts")).then(m => m.SubscriptionDetailModule),
            },
        ]
    }
];
let SubscriptionModule = class SubscriptionModule {
};
SubscriptionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(subscribeRoutes)
        ],
        declarations: [_subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"]]
    })
], SubscriptionModule);



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module-es2015.js.map