function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifiation-notifiation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/notifiation/notifiation.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/notifiation/notifiation.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLayoutNotifiationNotifiationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/modules/layout/notifiation/notifiation.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/layout/notifiation/notifiation.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLayoutNotifiationNotifiationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L25vdGlmaWF0aW9uL25vdGlmaWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/layout/notifiation/notifiation.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/layout/notifiation/notifiation.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NotifiationComponent */

  /***/
  function srcAppModulesLayoutNotifiationNotifiationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifiationComponent", function () {
      return NotifiationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotifiationComponent =
    /*#__PURE__*/
    function () {
      function NotifiationComponent() {
        _classCallCheck(this, NotifiationComponent);
      }

      _createClass(NotifiationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotifiationComponent;
    }();

    NotifiationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifiation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifiation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/notifiation/notifiation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifiation.component.scss */
      "./src/app/modules/layout/notifiation/notifiation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotifiationComponent);
    /***/
  },

  /***/
  "./src/app/modules/layout/notifiation/notifiation.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/layout/notifiation/notifiation.module.ts ***!
    \******************************************************************/

  /*! exports provided: NotifiationModule */

  /***/
  function srcAppModulesLayoutNotifiationNotifiationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifiationModule", function () {
      return NotifiationModule;
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


    var _notifiation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifiation.component */
    "./src/app/modules/layout/notifiation/notifiation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_constant_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/constant/routes */
    "./src/app/constant/routes.ts");

    var notifyRoutes = [{
      path: '',
      component: _notifiation_component__WEBPACK_IMPORTED_MODULE_3__["NotifiationComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | notification-list-notification-list-module */
          [__webpack_require__.e("default~company-add-company-add-module~company-detail-company-detail-module~company-edit-company-edi~65439945"), __webpack_require__.e("default~company-list-company-list-module~dashboard-list-dashboard-list-module~earning-list-earning-l~1af28cb1"), __webpack_require__.e("notification-list-notification-list-module")]).then(__webpack_require__.bind(null,
          /*! ./notification-list/notification-list.module */
          "./src/app/modules/layout/notifiation/notification-list/notification-list.module.ts")).then(function (m) {
            return m.NotificationListModule;
          });
        }
      }, {
        path: src_app_constant_routes__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_ADD"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notification-add-notification-add-module */
          "notification-add-notification-add-module").then(__webpack_require__.bind(null,
          /*! ./notification-add/notification-add.module */
          "./src/app/modules/layout/notifiation/notification-add/notification-add.module.ts")).then(function (m) {
            return m.NotificationAddModule;
          });
        }
      }]
    }];

    var NotifiationModule = function NotifiationModule() {
      _classCallCheck(this, NotifiationModule);
    };

    NotifiationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(notifyRoutes)],
      declarations: [_notifiation_component__WEBPACK_IMPORTED_MODULE_3__["NotifiationComponent"]]
    })], NotifiationModule);
    /***/
  }
}]);
//# sourceMappingURL=notifiation-notifiation-module-es5.js.map