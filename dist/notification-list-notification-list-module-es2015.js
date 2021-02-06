(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-list-notification-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white_wrapper action\">\n    <div class=\"flex_row\">\n        <div class=\"flex_col_sm_5 rowFilterBox\">\n            <app-search-filter [placeholder]=\"'Search by title'\" (setSearch)=\"setSearch($event)\">\n            </app-search-filter>\n        </div>\n        <div class=\"flex_col_sm_5\">\n            <ul class=\"btn_wrapper text-right\">\n\n                <li> <button mat-raised-button (click)=\"showFilter=!showFilter\" color=\"primary\">\n                        <mat-icon>filter_list</mat-icon> Filter\n                    </button> </li>\n                <li> <button mat-raised-button [routerLink]=\"'NOTIFICATION_ADD' | absolutePath\" color=\"primary\">\n                        <mat-icon>add</mat-icon> Add Notification\n                    </button> </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"flex_row\">\n        <ul class=\"breadcrumb\">\n            <li>\n                <a href=\"javascript:void(0)\">Notifications</a>\n            </li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"white_wrapper filter_wrapper\" [class.filter_wrapper_show]=\"showFilter\">\n    <div class=\"flex_row\">\n        <div class=\"flex_col_sm_6\">\n            <app-date-filter [dateObject]=\"filterObject.registrationDate\">\n            </app-date-filter>\n        </div>\n    </div>\n    <div class=\"flex_row\">\n        <div class=\"flex_col_sm_10 text-center\">\n\n            <ul class=\"btn_wrapper filter\">\n                <li> <button filter_btn mat-stroked-button [disabled]=\"disable()\" (click)=\"resetFilter()\">\n                        Reset\n                    </button>\n                </li>\n                <li>\n                    <button filter_btn mat-raised-button color=\"primary\" [disabled]=\"disable()\" (click)=\"filter()\">\n                        Filter\n                    </button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"white_wrapper\">\n    <table mat-table [dataSource]=\"notifications\" class=\"mat-elevation-z8\">\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef> S.No </th>\n            <td mat-cell *matCellDef=\"let element;let i=index\"> {{getSerialNumber(i+1)}}</td>\n        </ng-container>\n\n\n        <!--  Title  Column -->\n        <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> Title </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element?.title | checkNull}}\n            </td>\n        </ng-container>\n\n\n        <!-- Push message Column -->\n        <ng-container matColumnDef=\"pushmessage\">\n            <th mat-header-cell *matHeaderCellDef> Push message </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element?.message | checkNull}}\n            </td>\n        </ng-container>\n\n        <!-- Sent To Column -->\n        <ng-container matColumnDef=\"sentto\">\n            <th mat-header-cell *matHeaderCellDef> Sent To </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.targetAudience?.name | checkNull}}\n            </td>\n        </ng-container>\n\n        <!-- Sent On Column -->\n        <ng-container matColumnDef=\"senton\">\n            <th mat-header-cell *matHeaderCellDef> Sent On </th>\n            <td mat-cell *matCellDef=\"let element\">{{element.created | customDate}}\n            </td>\n        </ng-container>\n\n\n        <!-- Last seen count Column -->\n        <ng-container matColumnDef=\"lastseen\">\n            <th mat-header-cell *matHeaderCellDef>Last sent count </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.sentCount | checkNull}} </td>\n        </ng-container>\n\n\n        <!-- action Column -->\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\">\n                <button mat-button [matMenuTriggerFor]=\"menu\" class=\"btn-more-menu\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n                    <button mat-menu-item [ngClass]=\" 'blocked' \" (click)=\"opennotify(element?._id)\">\n                        <mat-icon matTooltip=\"send-notification \" class=\"notification\">\n                            <img src=\"./assets/images/send_notification.svg\">\n                        </mat-icon>\n                        {{'Send Notification'}}\n                    </button>\n                    <button mat-menu-item (click)=\"changeStatus('deleted',element._id)\">\n                        <mat-icon matTooltip=\"Edit \">delete\n                        </mat-icon> Delete\n                    </button>\n                </mat-menu>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns \"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"></tr>\n    </table>\n    <div class=\"white_wrapper\" *ngIf=\"total===0\">\n        <h2 class=\"not-found\">No Notification Found</h2>\n    </div>\n    <div class=\"white_wrapper\" *ngIf=\"notifications.data.length\">\n        <mat-paginator [length]=\"total\" [pageIndex]=\"page-1\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageOptions\" (page)=\"changePage($event)\">\n        </mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.flex_row {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.breadcrumb {\n  width: 100%;\n  padding: 5px 15px;\n}\n.breadcrumb li {\n  display: inline-block;\n}\n.breadcrumb li a {\n  color: #006CB8;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 400;\n  outline: none;\n}\n.breadcrumb li a:before {\n  padding: 0 5px;\n  color: #B7BEC1;\n  content: \"/ \";\n}\n.breadcrumb li a:after {\n  content: \"/ \";\n  padding: 0 2px;\n  color: #A2ABAE;\n}\n.breadcrumb li a.active {\n  color: #262c2d;\n  cursor: default;\n}\n.breadcrumb li a.active:after {\n  display: none;\n}\n.breadcrumb li:first-child a:before, .breadcrumb li:first-child a:after {\n  display: none;\n}\n.filter-count {\n  cursor: default;\n  pointer-events: none;\n  color: #636F73;\n  font-size: 13px;\n}\n.filter_lbl {\n  width: 100%;\n  padding: 0 20px 0 0;\n}\n.filterbox {\n  width: 50%;\n  width: 50%;\n  display: inline-block;\n  padding: 0 20px;\n}\n.notification img {\n  width: 20px;\n  height: 20px;\n}\n.white_wrapper.action {\n  overflow: inherit !important;\n  position: relative;\n}\n.btn_wrapper.filter li button {\n  width: 100px;\n}\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: transparent;\n  border: 0 !important;\n  border: 1px solid rgba(0, 0, 0, 0.12) !important;\n  border-radius: 5px;\n}\n:host ::ng-deep .p-wrap {\n  margin-top: 28px;\n}\n:host ::ng-deep .flex_col_sm_4 {\n  width: 33.3%;\n  padding: 0 16px;\n  margin: 0 15px;\n}\n:host ::ng-deep app-search-filter {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvbm90aWZpYXRpb24vbm90aWZpY2F0aW9uLWxpc3QvY29tcG9uZW50L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhbnNsYWJkZXYyL0Rldi9hbmd1bGFyL2NvbW1fZmVfc2FkbWluL3NyYy9hcHAvbW9kdWxlcy9sYXlvdXQvbm90aWZpYXRpb24vbm90aWZpY2F0aW9uLWxpc3QvY29tcG9uZW50L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FERUo7QUNDQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBREVKO0FDREk7RUFDSSxxQkFBQTtBREdSO0FDRlE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRElaO0FDSFk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QURLaEI7QUNIWTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBREtoQjtBQ0hZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QURLaEI7QUNKZ0I7RUFDSSxhQUFBO0FETXBCO0FDQWdCO0VBRUksYUFBQTtBRENwQjtBQ01BO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURISjtBQ01BO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FESEo7QUNNQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FESEo7QUNPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FESlI7QUNTSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7QUROUjtBQ2FZO0VBQ0ksWUFBQTtBRFZoQjtBQ2lCSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FEZFI7QUNnQkk7RUFDSSxnQkFBQTtBRGRSO0FDZ0JJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEZFI7QUNnQkk7RUFDSSxVQUFBO0FEZFIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xheW91dC9ub3RpZmlhdGlvbi9ub3RpZmljYXRpb24tbGlzdC9jb21wb25lbnQvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmxleF9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgLTEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuLmJyZWFkY3J1bWIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYnJlYWRjcnVtYiBsaSBhIHtcbiAgY29sb3I6ICMwMDZDQjg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYnJlYWRjcnVtYiBsaSBhOmJlZm9yZSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjb2xvcjogI0I3QkVDMTtcbiAgY29udGVudDogXCIvIFwiO1xufVxuLmJyZWFkY3J1bWIgbGkgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiL8KgXCI7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBjb2xvcjogI0EyQUJBRTtcbn1cbi5icmVhZGNydW1iIGxpIGEuYWN0aXZlIHtcbiAgY29sb3I6ICMyNjJjMmQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5icmVhZGNydW1iIGxpIGEuYWN0aXZlOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5icmVhZGNydW1iIGxpOmZpcnN0LWNoaWxkIGE6YmVmb3JlLCAuYnJlYWRjcnVtYiBsaTpmaXJzdC1jaGlsZCBhOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbHRlci1jb3VudCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjNjM2RjczO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5maWx0ZXJfbGJsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG5cbi5maWx0ZXJib3gge1xuICB3aWR0aDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLm5vdGlmaWNhdGlvbiBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ud2hpdGVfd3JhcHBlci5hY3Rpb24ge1xuICBvdmVyZmxvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG5fd3JhcHBlci5maWx0ZXIgbGkgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXdyYXAge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mbGV4X2NvbF9zbV80IHtcbiAgd2lkdGg6IDMzLjMlO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIGFwcC1zZWFyY2gtZmlsdGVyIHtcbiAgd2lkdGg6IDYwJTtcbn0iLCIuZmxleF9yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwNkNCODtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjQjdCRUMxO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiLyBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1xcMDBhMFwiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjQTJBQkFFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMzgsIDQ0LCA0NSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlLFxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpbHRlci1jb3VudCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjNjM2RjczO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZpbHRlcl9sYmwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG5cbi5maWx0ZXJib3gge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuLndoaXRlX3dyYXBwZXIge1xuICAgICYuYWN0aW9uIHtcbiAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn1cblxuLmJ0bl93cmFwcGVyIHtcbiAgICAmLmZpbHRlciB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMikgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAucC13cmFwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG4gICAgLmZsZXhfY29sX3NtXzQge1xuICAgICAgICB3aWR0aDogMzMuMyU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgfVxuICAgIGFwcC1zZWFyY2gtZmlsdGVyIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: NotificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function() { return NotificationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/pagination */ "./src/app/models/pagination.ts");
/* harmony import */ var _service_notification_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/notification-list.service */ "./src/app/modules/layout/notifiation/notification-list/service/notification-list.service.ts");
/* harmony import */ var src_app_modules_shared_components_send_notification_send_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/components/send-notification/send-notification.component */ "./src/app/modules/shared/components/send-notification/send-notification.component.ts");






let NotificationListComponent = class NotificationListComponent extends src_app_models_pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"] {
    constructor(dialog, _notiList) {
        super();
        this.dialog = dialog;
        this._notiList = _notiList;
        this.showFilter = false;
        this.appliedFilterCount = 0;
        this.isFilterApplied = false;
        this.notifications = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.displayedColumns = ['position', 'title', 'pushmessage', 'sentto', 'senton', 'lastseen', 'action'];
        this.createFilterForm();
        this.filterObject = this._notiList.createFilterObject(this.filterForm);
    }
    ngOnInit() {
        this.getAllNotifications();
    }
    createFilterForm() {
        this.filterForm = this._notiList.getFilterForm();
    }
    /*
      Method For getting all the notification
    */
    getAllNotifications() {
        let data = Object.assign({}, this.changeDateFormat(this.filterForm.value), this.validPageOptions);
        this._notiList.getAllNoti(data)
            .subscribe(response => {
            this.notifications.data = response.data.notificationList;
            this.total = response.data.totalRecord;
        }, err => {
        });
    }
    /*
      Method For Changing The Pagination
    */
    changePage(event) {
        this.pageOptionsOnChange = event;
        if (this.total == 0) {
            return;
        }
        this.getAllNotifications();
    }
    /*
      Method For Sorting
    */
    sortData(event) {
        this.sortOptions = event;
        this.resetPages();
        this.getAllNotifications();
    }
    /*
      Method For Searching
    */
    setSearch(event) {
        this.search = event;
        this.resetPages();
        this.getAllNotifications();
    }
    /*
      Method For Checking Filter Button Shoud Be Enable Or Not
    */
    disable() {
        return !this.filterForm.dirty;
    }
    /*
        Method For Resetting The Filters
      */
    resetFilter() {
        this.filterForm.reset();
        this.resetPages();
        this.getAllNotifications();
        this.appliedFilterCount = 0;
        this.isFilterApplied = false;
    }
    /*
      Method For Applying The Filters
    */
    filter() {
        let a = Object.values(this.filterForm.value);
        let b = a.filter(Boolean);
        this.resetPages();
        this.getAllNotifications();
        this.appliedFilterCount = b.length;
        this.isFilterApplied = true;
    }
    changeStatus(status, userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let data = yield this._notiList.changeStatus({ status, userId });
                if (data) {
                    this.getAllNotifications();
                }
            }
            catch (err) {
            }
        });
    }
    opennotify(notiId) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.width = '450px';
        dialogConfig.data = notiId;
        const dialogRef = this.dialog.open(src_app_modules_shared_components_send_notification_send_notification_component__WEBPACK_IMPORTED_MODULE_5__["SendNotificationComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.resendNotification(notiId, result);
            }
        });
    }
    /*
     Method For resend the notification
   */
    resendNotification(id, user) {
        let obj = {
            notificationId: id,
            audience: user
        };
        this._notiList.resendNoti(obj).subscribe(response => {
            if (response && response.statusCode == 200) {
                this._notiList.showAlert("Notification sent successfully");
                this.getAllNotifications();
            }
        });
    }
};
NotificationListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _service_notification_list_service__WEBPACK_IMPORTED_MODULE_4__["NotificationListService"] }
];
NotificationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-list.component.scss */ "./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _service_notification_list_service__WEBPACK_IMPORTED_MODULE_4__["NotificationListService"]])
], NotificationListComponent);



/***/ }),

/***/ "./src/app/modules/layout/notifiation/notification-list/notification-list.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/layout/notifiation/notification-list/notification-list.module.ts ***!
  \******************************************************************************************/
/*! exports provided: NotificationListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListModule", function() { return NotificationListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_notification_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/notification-list.component */ "./src/app/modules/layout/notifiation/notification-list/component/notification-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_pipes_absolute_routing_absolute_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/absolute-routing/absolute-routing.module */ "./src/app/pipes/absolute-routing/absolute-routing.module.ts");
/* harmony import */ var _layout_shared_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout-shared/search-filter/search-filter.module */ "./src/app/modules/layout/layout-shared/search-filter/search-filter.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _layout_shared_date_filter_date_filter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layout-shared/date-filter/date-filter.module */ "./src/app/modules/layout/layout-shared/date-filter/date-filter.module.ts");
/* harmony import */ var src_app_pipes_custom_date_custom_date_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/custom-date/custom-date-pipe.module */ "./src/app/pipes/custom-date/custom-date-pipe.module.ts");
/* harmony import */ var src_app_pipes_check_null_check_null_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/check-null/check-null-pipe.module */ "./src/app/pipes/check-null/check-null-pipe.module.ts");
/* harmony import */ var _service_notification_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/notification-list.service */ "./src/app/modules/layout/notifiation/notification-list/service/notification-list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _layout_shared_filter_count_filter_count_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layout-shared/filter-count/filter-count.module */ "./src/app/modules/layout/layout-shared/filter-count/filter-count.module.ts");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");















const routes = [
    {
        path: '',
        component: _component_notification_list_component__WEBPACK_IMPORTED_MODULE_3__["NotificationListComponent"]
    }
];
let NotificationListModule = class NotificationListModule {
};
NotificationListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_pipes_absolute_routing_absolute_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbsoluteRoutingModule"],
            _layout_shared_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_6__["SearchFilterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            src_app_pipes_absolute_routing_absolute_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbsoluteRoutingModule"],
            _layout_shared_date_filter_date_filter_module__WEBPACK_IMPORTED_MODULE_8__["DateFilterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            src_app_pipes_custom_date_custom_date_pipe_module__WEBPACK_IMPORTED_MODULE_9__["CustomDatePipeModule"],
            src_app_pipes_check_null_check_null_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CheckNullPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _layout_shared_filter_count_filter_count_module__WEBPACK_IMPORTED_MODULE_13__["FilterCountModule"],
        ],
        declarations: [_component_notification_list_component__WEBPACK_IMPORTED_MODULE_3__["NotificationListComponent"]],
        // entryComponents: [SendNotificationComponent],
        providers: [_service_notification_list_service__WEBPACK_IMPORTED_MODULE_11__["NotificationListService"]]
    })
], NotificationListModule);



/***/ })

}]);
//# sourceMappingURL=notification-list-notification-list-module-es2015.js.map