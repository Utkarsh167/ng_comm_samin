function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["earning-earning-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/earning/earning.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/earning/earning.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLayoutEarningEarningComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/modules/layout/earning/earning.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/layout/earning/earning.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLayoutEarningEarningComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2Vhcm5pbmcvZWFybmluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/layout/earning/earning.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/layout/earning/earning.component.ts ***!
    \*************************************************************/

  /*! exports provided: EarningComponent */

  /***/
  function srcAppModulesLayoutEarningEarningComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EarningComponent", function () {
      return EarningComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EarningComponent =
    /*#__PURE__*/
    function () {
      function EarningComponent() {
        _classCallCheck(this, EarningComponent);
      }

      _createClass(EarningComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EarningComponent;
    }();

    EarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-earning',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./earning.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/earning/earning.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./earning.component.scss */
      "./src/app/modules/layout/earning/earning.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EarningComponent);
    /***/
  },

  /***/
  "./src/app/modules/layout/earning/earning.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/layout/earning/earning.module.ts ***!
    \**********************************************************/

  /*! exports provided: EarningModule */

  /***/
  function srcAppModulesLayoutEarningEarningModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EarningModule", function () {
      return EarningModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _constant_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../constant/routes */
    "./src/app/constant/routes.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _earning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./earning.component */
    "./src/app/modules/layout/earning/earning.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var subscribeRoutes = [{
      path: '',
      component: _earning_component__WEBPACK_IMPORTED_MODULE_4__["EarningComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | earning-list-earning-list-module */
          [__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("default~company-list-company-list-module~dashboard-list-dashboard-list-module~earning-list-earning-l~1af28cb1"), __webpack_require__.e("common"), __webpack_require__.e("earning-list-earning-list-module")]).then(__webpack_require__.bind(null,
          /*! ./earning-list/earning-list.module */
          "./src/app/modules/layout/earning/earning-list/earning-list.module.ts")).then(function (m) {
            return m.EarningListModule;
          });
        }
      }, {
        path: "".concat(_constant_routes__WEBPACK_IMPORTED_MODULE_1__["EARNING_DETAIL"], "/:earningId"),
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | earning-detail-earning-detail-module */
          "earning-detail-earning-detail-module").then(__webpack_require__.bind(null,
          /*! ./earning-detail/earning-detail.module */
          "./src/app/modules/layout/earning/earning-detail/earning-detail.module.ts")).then(function (m) {
            return m.EarningDetailModule;
          });
        }
      }]
    }];

    var EarningModule = function EarningModule() {
      _classCallCheck(this, EarningModule);
    };

    EarningModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(subscribeRoutes)],
      declarations: [_earning_component__WEBPACK_IMPORTED_MODULE_4__["EarningComponent"]]
    })], EarningModule);
    /***/
  }
}]);
//# sourceMappingURL=earning-earning-module-es5.js.map