function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-detail-company-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company-detail/component/company-detail.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company-detail/component/company-detail.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLayoutCompanyCompanyDetailComponentCompanyDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"custom_container\">\n    <div class=\"white_wrapper\">\n        <h2 class=\"heading\">Company</h2>\n\n        <div class=\"flex_row\">\n            <ul class=\"breadcrumb\">\n                <li>\n                    <a [routerLink]=\"'COMPANY'|absolutePath\">Company </a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"active\">Company 1</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"form_wrapper\">\n            <div class=\"flex_row\">\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Company Code</label>\n                        <span class=\"show_label\">{{company?.companyCode | checkNull}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Company Name</label>\n                        <span class=\"show_label\">{{company?.name | checkNull}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Email ID</label>\n                        <span class=\"show_label\">{{company?.email | checkNull}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"flex_row\">\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Contact Number</label>\n                        <span class=\"show_label\" *ngFor=\"let contact of company?.contactNumber\">{{contact.phoneNumber | checkNull}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Type</label>\n                        <span class=\"show_label\">{{company?.companyType?.type | checkNull}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Branch Location</label>\n                        <span class=\"show_label\">{{company?.companyBranch?.address | checkNull}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"flex_row\">\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Added On</label>\n                        <span class=\"show_label\">{{company?.created | customDate}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Total Employees</label>\n                        <span class=\"show_label\">{{company?.totalEmp | checkNull}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Subscription Plan</label>\n                        <span class=\"show_label\">{{company?.plane?.name | checkNull}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"flex_row\">\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Payment Type</label>\n                        <span class=\"show_label\">{{company?.paymentType | checkNull}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Server Type</label>\n                        <span class=\"show_label\">{{company?.serverType}}</span>\n                    </div>\n                </div>\n                <div class=\"flex_col_sm_3\">\n                    <div class=\"form_filed_wrapper_details\">\n                        <label class=\"form_label\">Status</label>\n                        <span class=\"show_label\">{{company?.status}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"flex_row\">\n            <div class=\"flex_col_sm_10\">\n                <div class=\"form_filed_wrapper_details text-center\">\n                    <ul class=\"btn_wrapper\">\n                        <li *ngIf=\"company?.status=='unblocked'\" (click)=\"changeStatus('blocked')\"> <button mat-raised-button type=\"button\">Block</button> </li>\n                        <li *ngIf=\"company?.status=='blocked'\" (click)=\"changeStatus('unblocked')\"> <button mat-raised-button type=\"button\">Unblock</button> </li>\n                        <li> <button mat-raised-button color=\"primary\" [routerLink]=\"['COMPANY_EDIT' | absolutePath,company?._id]\">Edit</button> </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/layout/company/company-detail/company-detail.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/layout/company/company-detail/company-detail.module.ts ***!
    \********************************************************************************/

  /*! exports provided: CompanyDetailModule */

  /***/
  function srcAppModulesLayoutCompanyCompanyDetailCompanyDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyDetailModule", function () {
      return CompanyDetailModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pipes_absolute_routing_absolute_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../pipes/absolute-routing/absolute-routing.module */
    "./src/app/pipes/absolute-routing/absolute-routing.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _layout_shared_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../layout-shared/search-filter/search-filter.module */
    "./src/app/modules/layout/layout-shared/search-filter/search-filter.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_company_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/company-detail.component */
    "./src/app/modules/layout/company/company-detail/component/company-detail.component.ts");
    /* harmony import */


    var _service_company_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/company-detail.service */
    "./src/app/modules/layout/company/company-detail/service/company-detail.service.ts");
    /* harmony import */


    var src_app_pipes_check_null_check_null_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/pipes/check-null/check-null-pipe.module */
    "./src/app/pipes/check-null/check-null-pipe.module.ts");
    /* harmony import */


    var src_app_pipes_custom_date_custom_date_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pipes/custom-date/custom-date-pipe.module */
    "./src/app/pipes/custom-date/custom-date-pipe.module.ts");

    var routes = [{
      path: '',
      component: _component_company_detail_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailComponent"]
    }];

    var CompanyDetailModule = function CompanyDetailModule() {
      _classCallCheck(this, CompanyDetailModule);
    };

    CompanyDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_component_company_detail_component__WEBPACK_IMPORTED_MODULE_7__["CompanyDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _layout_shared_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_3__["SearchFilterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _pipes_absolute_routing_absolute_routing_module__WEBPACK_IMPORTED_MODULE_1__["AbsoluteRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], src_app_pipes_check_null_check_null_pipe_module__WEBPACK_IMPORTED_MODULE_9__["CheckNullPipeModule"], src_app_pipes_custom_date_custom_date_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CustomDatePipeModule"]],
      providers: [_service_company_detail_service__WEBPACK_IMPORTED_MODULE_8__["CompanyDetailService"]]
    })], CompanyDetailModule);
    /***/
  },

  /***/
  "./src/app/modules/layout/company/company-detail/component/company-detail.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/layout/company/company-detail/component/company-detail.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLayoutCompanyCompanyDetailComponentCompanyDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\nth,\ntd {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n.form_filed_wrapper_details {\n  margin-bottom: 50px;\n}\n.sm_img_preview {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.sm_img_preview img {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.flex_row {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -10px;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.flex_row.aggrement {\n  flex-wrap: wrap;\n}\n.flex_row.aggrement a {\n  color: #006CB8;\n}\n.breadcrumb {\n  width: 100%;\n  padding: 5px 15px;\n}\n.breadcrumb li {\n  display: inline-block;\n}\n.breadcrumb li a {\n  color: #006CB8;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n  outline: none;\n}\n.breadcrumb li a:before {\n  padding: 0 5px;\n  color: #B7BEC1;\n  content: \"/ \";\n}\n.breadcrumb li a:after {\n  content: \"/ \";\n  padding: 0 2px;\n  color: #A2ABAE;\n}\n.breadcrumb li a.active {\n  color: #262c2d;\n  cursor: default;\n}\n.breadcrumb li a.active:after {\n  display: none;\n}\n.breadcrumb li:first-child a:before {\n  display: none;\n}\n.breadcrumb li:last-child a:before, .breadcrumb li:last-child a:after {\n  display: none;\n}\n.show_label a {\n  display: block;\n  color: #006CB8;\n}\nbutton {\n  box-shadow: none !important;\n  border: 1px solid #79f2c0 !important;\n  min-width: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcGFueS9jb21wYW55LWRldGFpbC9jb21wb25lbnQvY29tcGFueS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmFuc2xhYmRldjIvRGV2L2FuZ3VsYXIvY29tbV9mZV9zYWRtaW4vc3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wYW55L2NvbXBhbnktZGV0YWlsL2NvbXBvbmVudC9jb21wYW55LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QURFSjtBQ0NBOztFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FERUo7QUNDQTtFQUNJLG1CQUFBO0FERUo7QUNDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FERUo7QUNDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBREVKO0FDQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBREVKO0FDREk7RUFDSSxlQUFBO0FER1I7QUNGUTtFQUNJLGNBQUE7QURJWjtBQ0NBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FERUo7QUNESTtFQUNJLHFCQUFBO0FER1I7QUNGUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FESVo7QUNIWTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBREtoQjtBQ0hZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FES2hCO0FDSFk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBREtoQjtBQ0pnQjtFQUNJLGFBQUE7QURNcEI7QUNBZ0I7RUFDSSxhQUFBO0FERXBCO0FDSWdCO0VBRUksYUFBQTtBREhwQjtBQ1dJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QURSUjtBQ1lBO0VBQ0ksMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FEVEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wYW55L2NvbXBhbnktZGV0YWlsL2NvbXBvbmVudC9jb21wYW55LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLFxudGQge1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZm9ybV9maWxlZF93cmFwcGVyX2RldGFpbHMge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc21faW1nX3ByZXZpZXcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNtX2ltZ19wcmV2aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5mbGV4X3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtMTBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZmxleF9yb3cuYWdncmVtZW50IHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZsZXhfcm93LmFnZ3JlbWVudCBhIHtcbiAgY29sb3I6ICMwMDZDQjg7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuLmJyZWFkY3J1bWIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYnJlYWRjcnVtYiBsaSBhIHtcbiAgY29sb3I6ICMwMDZDQjg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYnJlYWRjcnVtYiBsaSBhOmJlZm9yZSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjb2xvcjogI0I3QkVDMTtcbiAgY29udGVudDogXCIvIFwiO1xufVxuLmJyZWFkY3J1bWIgbGkgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiL8KgXCI7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBjb2xvcjogI0EyQUJBRTtcbn1cbi5icmVhZGNydW1iIGxpIGEuYWN0aXZlIHtcbiAgY29sb3I6ICMyNjJjMmQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5icmVhZGNydW1iIGxpIGEuYWN0aXZlOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5icmVhZGNydW1iIGxpOmZpcnN0LWNoaWxkIGE6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5icmVhZGNydW1iIGxpOmxhc3QtY2hpbGQgYTpiZWZvcmUsIC5icmVhZGNydW1iIGxpOmxhc3QtY2hpbGQgYTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93X2xhYmVsIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMwMDZDQjg7XG59XG5cbmJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc5ZjJjMCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwNHB4O1xufSIsInRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50aCxcbnRkIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmZvcm1fZmlsZWRfd3JhcHBlcl9kZXRhaWxzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc21faW1nX3ByZXZpZXcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zbV9pbWdfcHJldmlldyBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZmxleF9yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICYuYWdncmVtZW50IHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA2Q0I4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnJlYWRjcnVtYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICMwMDZDQjg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0I3QkVDMTtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIi8gXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIi9cXDAwYTBcIjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0EyQUJBRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDM4LCA0NCwgNDUpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaG93X2xhYmVsIHtcbiAgICBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjMDA2Q0I4O1xuICAgIH1cbn1cblxuYnV0dG9ue1xuICAgIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3OWYyYzAgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6MTA0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/layout/company/company-detail/component/company-detail.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/layout/company/company-detail/component/company-detail.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CompanyDetailComponent */

  /***/
  function srcAppModulesLayoutCompanyCompanyDetailComponentCompanyDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function () {
      return CompanyDetailComponent;
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


    var _service_company_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/company-detail.service */
    "./src/app/modules/layout/company/company-detail/service/company-detail.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_constant_absolute_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/constant/absolute-routes */
    "./src/app/constant/absolute-routes.ts");

    var CompanyDetailComponent =
    /*#__PURE__*/
    function () {
      function CompanyDetailComponent(_companyDetailService, _route, _router) {
        _classCallCheck(this, CompanyDetailComponent);

        this._companyDetailService = _companyDetailService;
        this._route = _route;
        this._router = _router;
      }

      _createClass(CompanyDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.companyId = this._route.snapshot.params.companyId;
          this.getCabDetail();
        }
      }, {
        key: "getCabDetail",
        value: function getCabDetail() {
          var _this = this;

          this._companyDetailService.getCompanyDetails({
            userId: this.companyId
          }).subscribe(function (response) {
            if (!response.data) {
              _this._router.navigate([src_app_constant_absolute_routes__WEBPACK_IMPORTED_MODULE_4__["COMPANY"]]);
            }

            _this.company = response.data;
          }, function (err) {
            _this._router.navigate([src_app_constant_absolute_routes__WEBPACK_IMPORTED_MODULE_4__["COMPANY"]]);
          });
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(status) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var companyId;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    companyId = this.companyId;
                    _context.prev = 1;
                    _context.next = 4;
                    return this._companyDetailService.changeStatus({
                      status: status,
                      companyId: companyId
                    });

                  case 4:
                    _context.next = 6;
                    return this.getCabDetail();

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](1);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 8]]);
          }));
        }
      }]);

      return CompanyDetailComponent;
    }();

    CompanyDetailComponent.ctorParameters = function () {
      return [{
        type: _service_company_detail_service__WEBPACK_IMPORTED_MODULE_2__["CompanyDetailService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CompanyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-company-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/company/company-detail/component/company-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company-detail.component.scss */
      "./src/app/modules/layout/company/company-detail/component/company-detail.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_company_detail_service__WEBPACK_IMPORTED_MODULE_2__["CompanyDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], CompanyDetailComponent);
    /***/
  },

  /***/
  "./src/app/modules/layout/company/company-detail/service/company-detail.service.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/layout/company/company-detail/service/company-detail.service.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CompanyDetailService */

  /***/
  function srcAppModulesLayoutCompanyCompanyDetailServiceCompanyDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyDetailService", function () {
      return CompanyDetailService;
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


    var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/shared/services/utility.service */
    "./src/app/modules/shared/services/utility.service.ts");
    /* harmony import */


    var src_app_modules_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modules/shared/services/http.service */
    "./src/app/modules/shared/services/http.service.ts");
    /* harmony import */


    var src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/shared/services/form.service */
    "./src/app/modules/shared/services/form.service.ts");
    /* harmony import */


    var src_app_constant_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/constant/url */
    "./src/app/constant/url.ts");
    /* harmony import */


    var src_app_constant_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/constant/message */
    "./src/app/constant/message.ts");

    var CompanyDetailService =
    /*#__PURE__*/
    function () {
      function CompanyDetailService(_formService, _http, _uitilityService) {
        _classCallCheck(this, CompanyDetailService);

        this._formService = _formService;
        this._http = _http;
        this._uitilityService = _uitilityService;
      }

      _createClass(CompanyDetailService, [{
        key: "getCompanyDetails",
        value: function getCompanyDetails(companyId) {
          return this._http.get(src_app_constant_url__WEBPACK_IMPORTED_MODULE_5__["GET_COMPANY_DETAILS"], companyId);
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(body) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var status, data, success, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    status = body.status.toUpperCase();
                    data = {
                      message: src_app_constant_message__WEBPACK_IMPORTED_MODULE_6__["COMMON_MESSAGES"][status].confirm('Company')
                    };
                    _context2.next = 5;
                    return this._uitilityService.openDialog(data).toPromise();

                  case 5:
                    success = _context2.sent;

                    if (!success) {
                      _context2.next = 14;
                      break;
                    }

                    _context2.next = 9;
                    return this._http.post(src_app_constant_url__WEBPACK_IMPORTED_MODULE_5__["BLOCK_COMPANY"] + "/" + body.companyId, {
                      status: body.status
                    }).toPromise();

                  case 9:
                    response;

                    this._uitilityService.showAlert(src_app_constant_message__WEBPACK_IMPORTED_MODULE_6__["COMMON_MESSAGES"][status].success('Company'));

                    return _context2.abrupt("return", Promise.resolve(response));

                  case 14:
                    return _context2.abrupt("return", Promise.reject());

                  case 15:
                    _context2.next = 20;
                    break;

                  case 17:
                    _context2.prev = 17;
                    _context2.t0 = _context2["catch"](0);
                    return _context2.abrupt("return", Promise.reject(_context2.t0));

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 17]]);
          }));
        }
      }]);

      return CompanyDetailService;
    }();

    CompanyDetailService.ctorParameters = function () {
      return [{
        type: src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]
      }, {
        type: src_app_modules_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }];
    };

    CompanyDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_shared_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"], src_app_modules_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])], CompanyDetailService);
    /***/
  },

  /***/
  "./src/app/pipes/check-null/check-null-pipe.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pipes/check-null/check-null-pipe.module.ts ***!
    \************************************************************/

  /*! exports provided: CheckNullPipeModule */

  /***/
  function srcAppPipesCheckNullCheckNullPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckNullPipeModule", function () {
      return CheckNullPipeModule;
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


    var _check_null_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./check-null.pipe */
    "./src/app/pipes/check-null/check-null.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CheckNullPipeModule = function CheckNullPipeModule() {
      _classCallCheck(this, CheckNullPipeModule);
    };

    CheckNullPipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      declarations: [_check_null_pipe__WEBPACK_IMPORTED_MODULE_3__["CheckNullPipe"]],
      exports: [_check_null_pipe__WEBPACK_IMPORTED_MODULE_3__["CheckNullPipe"]]
    })], CheckNullPipeModule);
    /***/
  },

  /***/
  "./src/app/pipes/check-null/check-null.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pipes/check-null/check-null.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: CheckNullPipe */

  /***/
  function srcAppPipesCheckNullCheckNullPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckNullPipe", function () {
      return CheckNullPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckNullPipe =
    /*#__PURE__*/
    function () {
      function CheckNullPipe() {
        _classCallCheck(this, CheckNullPipe);
      }

      _createClass(CheckNullPipe, [{
        key: "transform",
        value: function transform(value, args) {
          return value !== undefined && value !== null ? value : '-';
        }
      }]);

      return CheckNullPipe;
    }();

    CheckNullPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'checkNull'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CheckNullPipe);
    /***/
  },

  /***/
  "./src/app/pipes/custom-date/custom-date-pipe.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pipes/custom-date/custom-date-pipe.module.ts ***!
    \**************************************************************/

  /*! exports provided: CustomDatePipeModule */

  /***/
  function srcAppPipesCustomDateCustomDatePipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDatePipeModule", function () {
      return CustomDatePipeModule;
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


    var _custom_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./custom-date.pipe */
    "./src/app/pipes/custom-date/custom-date.pipe.ts");

    var CustomDatePipeModule = function CustomDatePipeModule() {
      _classCallCheck(this, CustomDatePipeModule);
    };

    CustomDatePipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_custom_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomDatePipe"]],
      exports: [_custom_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomDatePipe"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
    })], CustomDatePipeModule);
    /***/
  },

  /***/
  "./src/app/pipes/custom-date/custom-date.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pipes/custom-date/custom-date.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: CustomDatePipe */

  /***/
  function srcAppPipesCustomDateCustomDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function () {
      return CustomDatePipe;
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

    var CustomDatePipe =
    /*#__PURE__*/
    function () {
      function CustomDatePipe(datePipe) {
        _classCallCheck(this, CustomDatePipe);

        this.datePipe = datePipe;
      }

      _createClass(CustomDatePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return value ? this.datePipe.transform(value, 'dd/MM/yyyy') : '-';
        }
      }]);

      return CustomDatePipe;
    }();

    CustomDatePipe.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
      }];
    };

    CustomDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'customDate'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])], CustomDatePipe);
    /***/
  }
}]);
//# sourceMappingURL=company-detail-company-detail-module-es5.js.map