function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/dashboard/dashboard.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/dashboard/dashboard.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLayoutDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/modules/layout/dashboard/dashboard.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/layout/dashboard/dashboard.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLayoutDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/layout/dashboard/dashboard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/layout/dashboard/dashboard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesLayoutDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/modules/layout/dashboard/dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/layout/dashboard/dashboard.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/layout/dashboard/dashboard.module.ts ***!
    \**************************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppModulesLayoutDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/modules/layout/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var dashboardRoutes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-list-dashboard-list-module */
          [__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("default~company-list-company-list-module~dashboard-list-dashboard-list-module~earning-list-earning-l~1af28cb1"), __webpack_require__.e("dashboard-list-dashboard-list-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard-list/dashboard-list.module */
          "./src/app/modules/layout/dashboard/dashboard-list/dashboard-list.module.ts")).then(function (m) {
            return m.DashboardListModule;
          });
        }
      }]
    }];

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(dashboardRoutes)],
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
    })], DashboardModule);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map