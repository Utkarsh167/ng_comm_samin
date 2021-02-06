function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~company-add-company-add-module~company-edit-company-edit-module"], {
  /***/
  "./src/app/constant/app-constant.ts":
  /*!******************************************!*\
    !*** ./src/app/constant/app-constant.ts ***!
    \******************************************/

  /*! exports provided: COMPANY_PAYMENT_TYPES, COMPANY_SERVER_TYPES, MONTHS, YEARS */

  /***/
  function srcAppConstantAppConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPANY_PAYMENT_TYPES", function () {
      return COMPANY_PAYMENT_TYPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPANY_SERVER_TYPES", function () {
      return COMPANY_SERVER_TYPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MONTHS", function () {
      return MONTHS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YEARS", function () {
      return YEARS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var COMPANY_PAYMENT_TYPES = [{
      id: 'invoice',
      name: 'Invoice',
      checked: true
    }];
    var COMPANY_SERVER_TYPES = [{
      id: 'house',
      name: 'In House (on prem)',
      checked: true
    }, {
      id: 'fleet',
      name: 'Fleet Server',
      checked: false
    }];
    var MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var YEARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    /***/
  },

  /***/
  "./src/app/constant/error.ts":
  /*!***********************************!*\
    !*** ./src/app/constant/error.ts ***!
    \***********************************/

  /*! exports provided: PATTERN_ERRORS */

  /***/
  function srcAppConstantErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PATTERN_ERRORS", function () {
      return PATTERN_ERRORS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./message */
    "./src/app/constant/message.ts");
    /* harmony import */


    var _patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./patterns */
    "./src/app/constant/patterns.ts");

    var PATTERN_ERRORS = function PATTERN_ERRORS(pattern, key) {
      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].email) {
        return "Please enter a valid ".concat(key.toLowerCase());
      }

      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].password) {
        return "".concat(Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key), " can not contain blank spaces");
      }

      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].name) {
        return "".concat(Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key), " can not be blank");
      }

      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].phone) {
        return "".concat(Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key), " must contain only numbers and can not start with 0");
      }

      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].price) {
        return "".concat(Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key), " must contain only numbers and can not start with 0");
      }

      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].alphaNumeric) {
        return "".concat(Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key), " can contain only characters and numbers");
      }

      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].numeric) {
        return "".concat(Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key), " can contain only numbers");
      }

      if (pattern == _patterns__WEBPACK_IMPORTED_MODULE_2__["PATTERN"].alphabetsWithSpace) {
        return "".concat(Object(_message__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(key), " can contain only characters and space");
      }
    };
    /***/

  },

  /***/
  "./src/app/directives/google-places/google-places.directive.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/directives/google-places/google-places.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: GooglePlacesDirective */

  /***/
  function srcAppDirectivesGooglePlacesGooglePlacesDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function () {
      return GooglePlacesDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GooglePlacesDirective =
    /*#__PURE__*/
    function () {
      function GooglePlacesDirective(elRef) {
        _classCallCheck(this, GooglePlacesDirective);

        this.selectAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addGApiJs(); // elRef will get a reference to the element where
        // the directive is placed

        this.element = elRef.nativeElement;
      }

      _createClass(GooglePlacesDirective, [{
        key: "getFormattedAddress",
        value: function getFormattedAddress(place) {
          // @params: place - Google Autocomplete place object
          // @returns: location_obj - An address object in human readable format
          var location_obj = {};

          for (var _i = 0, _Object$keys = Object.keys(place.address_components); _i < _Object$keys.length; _i++) {
            var i = _Object$keys[_i];
            var item = place.address_components[i];
            location_obj["formatted_address"] = place.formatted_address;
            location_obj["latitude"] = place.geometry.location.lat();
            location_obj["longitude"] = place.geometry.location.lng();

            if (item["types"].indexOf("locality") > -1) {
              location_obj["locality"] = item["long_name"];
            } else if (item["types"].indexOf("administrative_area_level_1") > -1) {
              location_obj["admin_area_l1"] = item["short_name"];
            } else if (item["types"].indexOf("street_number") > -1) {
              location_obj["street_number"] = item["short_name"];
            } else if (item["types"].indexOf("route") > -1) {
              location_obj["route"] = item["long_name"];
            } else if (item["types"].indexOf("country") > -1) {
              location_obj["country"] = item["long_name"];
            } else if (item["types"].indexOf("postal_code") > -1) {
              location_obj["postal_code"] = item["short_name"];
            }
          }

          return location_obj;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            var google = window["google"]; // const autocomplete = new google.maps.places.Autocomplete(this.element, {
            //   types: ['address'] // 'establishment' / 'address' / 'geocode'
            // });

            var autocomplete = new google.maps.places.Autocomplete(_this.element); // Event listener to monitor place changes in the input

            autocomplete.addListener("place_changed", function () {
              // Emit the new address object for the updated place
              var place = autocomplete.getPlace();

              _this.selectAddress.emit(_this.getFormattedAddress(autocomplete.getPlace()));
            });
          }, 1000);
        }
      }, {
        key: "addGApiJs",
        value: function addGApiJs() {
          var self = this;

          (function (d, s, id) {
            self.js = d.getElementsByTagName(s)[0];
            self.gmapjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) {
              return;
            }

            self.js = d.createElement(s);
            self.js.id = id;
            self.js.src = "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAXFhXOPayCOxqrDeaR5_vD1vpXX0QUbM4";
            self.gmapjs.parentNode.insertBefore(self.js, self.gmapjs);
          })(document, "script", "google-map-api");
        }
      }, {
        key: "removeGApiJS",
        value: function removeGApiJS() {
          this.gmapjs.parentNode.removeChild(this.js);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.removeGApiJS();
        }
      }]);

      return GooglePlacesDirective;
    }();

    GooglePlacesDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GooglePlacesDirective.prototype, "selectAddress", void 0);
    GooglePlacesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[appGooglePlaces]"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], GooglePlacesDirective);
    /***/
  },

  /***/
  "./src/app/directives/google-places/google-places.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/directives/google-places/google-places.module.ts ***!
    \******************************************************************/

  /*! exports provided: GooglePlacesModule */

  /***/
  function srcAppDirectivesGooglePlacesGooglePlacesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GooglePlacesModule", function () {
      return GooglePlacesModule;
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


    var _google_places_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./google-places.directive */
    "./src/app/directives/google-places/google-places.directive.ts");

    var GooglePlacesModule = function GooglePlacesModule() {
      _classCallCheck(this, GooglePlacesModule);
    };

    GooglePlacesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_google_places_directive__WEBPACK_IMPORTED_MODULE_3__["GooglePlacesDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_google_places_directive__WEBPACK_IMPORTED_MODULE_3__["GooglePlacesDirective"]]
    })], GooglePlacesModule);
    /***/
  },

  /***/
  "./src/app/directives/number-only/number-only.directive.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/directives/number-only/number-only.directive.ts ***!
    \*****************************************************************/

  /*! exports provided: NumberOnlyDirective */

  /***/
  function srcAppDirectivesNumberOnlyNumberOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function () {
      return NumberOnlyDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NumberOnlyDirective =
    /*#__PURE__*/
    function () {
      function NumberOnlyDirective() {
        _classCallCheck(this, NumberOnlyDirective);
      }

      _createClass(NumberOnlyDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(e) {
          if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || e.keyCode === 65 && e.ctrlKey === true || // Allow: Ctrl+A
          e.keyCode === 67 && e.ctrlKey === true || // Allow: Ctrl+C
          e.keyCode === 86 && e.ctrlKey === true || // Allow: Ctrl+V
          e.keyCode === 88 && e.ctrlKey === true || // Allow: Ctrl+X
          e.keyCode === 65 && e.metaKey === true || // Cmd+A (Mac)
          e.keyCode === 67 && e.metaKey === true || // Cmd+C (Mac)
          e.keyCode === 86 && e.metaKey === true || // Cmd+V (Mac)
          e.keyCode === 88 && e.metaKey === true || // Cmd+X (Mac)
          e.keyCode >= 35 && e.keyCode <= 39) {
            return;
          }

          if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
          }
        }
      }]);

      return NumberOnlyDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[numberOnly]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NumberOnlyDirective);
    /***/
  },

  /***/
  "./src/app/directives/number-only/number-only.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/directives/number-only/number-only.module.ts ***!
    \**************************************************************/

  /*! exports provided: NumberOnlyModule */

  /***/
  function srcAppDirectivesNumberOnlyNumberOnlyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberOnlyModule", function () {
      return NumberOnlyModule;
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


    var _number_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./number-only.directive */
    "./src/app/directives/number-only/number-only.directive.ts");

    var NumberOnlyModule = function NumberOnlyModule() {
      _classCallCheck(this, NumberOnlyModule);
    };

    NumberOnlyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_number_only_directive__WEBPACK_IMPORTED_MODULE_3__["NumberOnlyDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_number_only_directive__WEBPACK_IMPORTED_MODULE_3__["NumberOnlyDirective"]]
    })], NumberOnlyModule);
    /***/
  },

  /***/
  "./src/app/pipes/validation-error/validation-error.pipe.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pipes/validation-error/validation-error.pipe.module.ts ***!
    \************************************************************************/

  /*! exports provided: ValidationErrorPipeModule */

  /***/
  function srcAppPipesValidationErrorValidationErrorPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationErrorPipeModule", function () {
      return ValidationErrorPipeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _validation_error_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./validation-error.pipe */
    "./src/app/pipes/validation-error/validation-error.pipe.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ValidationErrorPipeModule = function ValidationErrorPipeModule() {
      _classCallCheck(this, ValidationErrorPipeModule);
    };

    ValidationErrorPipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      declarations: [_validation_error_pipe__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorPipe"]],
      exports: [_validation_error_pipe__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorPipe"]],
      providers: []
    })], ValidationErrorPipeModule);
    /***/
  },

  /***/
  "./src/app/pipes/validation-error/validation-error.pipe.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pipes/validation-error/validation-error.pipe.ts ***!
    \*****************************************************************/

  /*! exports provided: ValidationErrorPipe */

  /***/
  function srcAppPipesValidationErrorValidationErrorPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationErrorPipe", function () {
      return ValidationErrorPipe;
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


    var _constant_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../constant/error */
    "./src/app/constant/error.ts");
    /* harmony import */


    var src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/constant/message */
    "./src/app/constant/message.ts");

    var ValidationErrorPipe =
    /*#__PURE__*/
    function () {
      function ValidationErrorPipe() {
        _classCallCheck(this, ValidationErrorPipe);
      }

      _createClass(ValidationErrorPipe, [{
        key: "transform",
        value: function transform(control, name) {
          return control && control.errors ? this.getValidationError(control, name) : '';
        }
      }, {
        key: "getValidationError",
        value: function getValidationError(control, name) {
          if (control.hasError('required')) {
            return "".concat(Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name), " is required");
          }

          if (control.hasError('pattern')) {
            var pattern = control.errors.pattern.requiredPattern;
            return Object(_constant_error__WEBPACK_IMPORTED_MODULE_2__["PATTERN_ERRORS"])(pattern, name);
          }

          if (control.hasError('minlength')) {
            return "".concat(Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name), " must be at least ").concat(control.errors.minlength.requiredLength, " characters long");
          }

          if (control.hasError('maxlength')) {
            return "".concat(Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name), " can not be more than ").concat(control.errors.maxlength.requiredLength, " characters long");
          }

          if (control.hasError('matchPassword')) {
            return src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["VALIDATION_MESSAGES"][name]['matchPassword'] || '';
          }

          if (control.hasError('min')) {
            return "".concat(Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name), " can not be less than ").concat(control.errors.min.min);
          }

          if (control.hasError('max')) {
            return "".concat(Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name), " can not be greater than ").concat(control.errors.max.max);
          }

          if (control.hasError('url')) {
            return " Please enter correct ".concat(Object(src_app_constant_message__WEBPACK_IMPORTED_MODULE_3__["toTitleCase"])(name));
          }
        }
      }]);

      return ValidationErrorPipe;
    }();

    ValidationErrorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'validate',
      pure: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ValidationErrorPipe);
    /***/
  }
}]);
//# sourceMappingURL=default~company-add-company-add-module~company-edit-company-edit-module-es5.js.map