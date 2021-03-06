(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calc-inss-calc-inss-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-inss/calc-inss.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-inss/calc-inss.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCalcInssCalcInssPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-label>{{ 'Calcular Inss' | uppercase}}</ion-label>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"inssForm\" class=\"paddin-input\">\n      <ion-item>\n        <ion-label position=\"stacked\">Salário bruto</ion-label>\n        <ion-input\n          placeholder=\"R$ 0.00\"\n          type=\"number\"\n          (ngModelChange)=\"showClearButton($event)\"\n          formControlName=\"grossSalary\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label *ngIf=\"inssForm.value.inssValue\">R$</ion-label>\n        <ion-input\n          disabled\n          placeholder=\"...\"\n          formControlName=\"inssValue\"\n        ></ion-input>\n      </ion-item>\n      <div class=\"align-items\">\n        <span *ngIf=\"aliquota && inssForm.value.inssValue\" class=\"mr-6\">{{'Alíquota:'}}</span>\n        <ion-badge color=\"medium\" *ngIf=\"aliquota && inssForm.value.inssValue\">\n          {{ aliquota }}{{'%'}}\n        </ion-badge>\n      </div>\n    <div class=\"align-button\">\n      <ion-button (click)=\"onSubmit(inssForm)\">Calcular</ion-button>\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\n      <ion-button *ngIf=\"calculatedInss\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\n    </div>\n  </form>\n</ion-content>\n<!--Gerar PDF-->\n<!--Preciso melhorar isso-->\n<div hidden id=\"remove\">\n  <div id=\"print\">\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO INSS</h1><br>\n        <div style=\"width: 100%\">\n          <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\n            <b style=\"font-size: 35px\">Salário bruto:</b>\n            <span style=\"font-size: 35px;\">{{ 'R$ ' + grossSalaryFormatted }}</span>\n          </div>\n\n          <div style=\"display: flex; justify-content: space-between; height: 50px;\">\n            <b style=\"font-size: 35px;\">Desconto:</b>\n            <span style=\"font-size: 35px;\">{{ 'R$ ' + calculatedInssPdf }}</span>\n          </div>\n\n          <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\n            <b style=\"font-size: 35px;\">Alíquota:</b>\n            <span style=\"font-size: 35px;\">{{ aliquota + '%' }}</span>\n          </div>\n        </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/pages/calc-inss/calc-inss-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CalcInssPageRoutingModule */

    /***/
    function srcAppPagesCalcInssCalcInssRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalcInssPageRoutingModule", function () {
        return CalcInssPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _calc_inss_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calc-inss.page */
      "./src/app/pages/calc-inss/calc-inss.page.ts");

      var routes = [{
        path: '',
        component: _calc_inss_page__WEBPACK_IMPORTED_MODULE_3__["CalcInssPage"]
      }];

      var CalcInssPageRoutingModule = function CalcInssPageRoutingModule() {
        _classCallCheck(this, CalcInssPageRoutingModule);
      };

      CalcInssPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalcInssPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/calc-inss/calc-inss.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss.module.ts ***!
      \*****************************************************/

    /*! exports provided: CalcInssPageModule */

    /***/
    function srcAppPagesCalcInssCalcInssModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalcInssPageModule", function () {
        return CalcInssPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _calc_inss_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calc-inss-routing.module */
      "./src/app/pages/calc-inss/calc-inss-routing.module.ts");
      /* harmony import */


      var _calc_inss_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calc-inss.page */
      "./src/app/pages/calc-inss/calc-inss.page.ts");

      var CalcInssPageModule = function CalcInssPageModule() {
        _classCallCheck(this, CalcInssPageModule);
      };

      CalcInssPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calc_inss_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalcInssPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_calc_inss_page__WEBPACK_IMPORTED_MODULE_6__["CalcInssPage"]]
      })], CalcInssPageModule);
      /***/
    },

    /***/
    "./src/app/pages/calc-inss/calc-inss.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCalcInssCalcInssPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.text-align {\n  padding-top: 12px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n.mr-6 {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsYy1pbnNzL2NhbGMtaW5zcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxxQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBVUE7RUFDRSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtBQVBGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsYy1pbnNzL2NhbGMtaW5zcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnM7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5cbi5tYXJnaW4taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4uYWxpZ24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ucGFkZGluLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDkwcHg7XG59XG5cbi50ZXh0LWFsaWduIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFsaWduLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLm1yLTYge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/calc-inss/calc-inss.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss.page.ts ***!
      \***************************************************/

    /*! exports provided: CalcInssPage */

    /***/
    function srcAppPagesCalcInssCalcInssPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalcInssPage", function () {
        return CalcInssPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      "./node_modules/@ionic-native/pdf-generator/__ivy_ngcc__/ngx/index.js");

      var CalcInssPage = /*#__PURE__*/function () {
        function CalcInssPage(formBuilder, toastController, pdfGenerator) {
          _classCallCheck(this, CalcInssPage);

          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.pdfGenerator = pdfGenerator;
          this.inssForm = this.formBuilder.group({
            grossSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inssValue: ['']
          });
        }

        _createClass(CalcInssPage, [{
          key: "calcInss",
          value: function calcInss() {
            var _a, _b;

            if (this.grossSalary < 1100) {
              this.lowerSalaryToast();
              this.calculatedInss = undefined;
            }

            if (this.grossSalary === 1100) {
              this.inssValue = 82.50;
              this.calculatedInss = 82.50;
              this.aliquota = 7.5;
            } else if (this.grossSalary > 1100 && this.grossSalary < 2203.49) {
              this.inssValue = 99.31;
              this.calculatedInss = this.grossSalary * 9 / 100 - 16.50;
              this.aliquota = 9;
            } else if (this.grossSalary > 2203.48 && this.grossSalary < 3305.23) {
              this.inssValue = 132.21;
              this.calculatedInss = this.grossSalary * 12 / 100 - 82.60;
              this.aliquota = 12;
            } else if (this.grossSalary > 3305.22 && this.grossSalary < 6433.58) {
              this.inssValue = 437.96;
              this.calculatedInss = this.grossSalary * 14 / 100 - 148.70;
              this.aliquota = 14;
            } else if (this.grossSalary > 6433.57) {
              this.inssValue = 437.96;
              this.calculatedInss = 6433.57 * 14 / 100 - 148.70;
              this.aliquota = 'Teto';
            }

            this.inssForm.patchValue({
              inssValue: (_a = this.calculatedInss) === null || _a === void 0 ? void 0 : _a.toLocaleString('pt-BR', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              })
            });
            this.calculatedInssPdf = (_b = this.calculatedInss) === null || _b === void 0 ? void 0 : _b.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.grossSalaryFormatted = this.grossSalary.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
          }
        }, {
          key: "lowerSalaryToast",
          value: function lowerSalaryToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Valor inferior ao salário mínimo (R$1.100)',
                        duration: 3000,
                        color: 'medium'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "reportSalaryToast",
          value: function reportSalaryToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: 'Insira o valor do salário!',
                        duration: 3000,
                        color: 'medium'
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.inssForm.reset();
            this.calculatedInss = undefined;
            this.grossSalary = undefined;
          }
        }, {
          key: "showClearButton",
          value: function showClearButton(e) {
            this.grossSalary = e;

            if (!e) {
              this.inssForm.patchValue({
                inssValue: this.inssForm.value.inssValue = undefined
              });
              this.calculatedInss = undefined;
            }
          }
        }, {
          key: "generatorPdf",
          value: function generatorPdf() {
            var hidden = document.getElementById('remove');
            hidden.removeAttribute('hidden');
            hidden.setAttribute('hidden', '');
            var a = document.getElementById('print');
            this.pdfGenerator.fromData(a.innerHTML, {
              type: 'share'
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(_ref) {
            var value = _ref.value,
                valid = _ref.valid;

            if (!valid) {
              return this.reportSalaryToast();
            }

            this.grossSalary = value.grossSalary;
            this.calcInss();
            this.inssForm.markAsPristine();
          }
        }]);

        return CalcInssPage;
      }();

      CalcInssPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_4__["PDFGenerator"]
        }];
      };

      CalcInssPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calc-inss',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./calc-inss.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-inss/calc-inss.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./calc-inss.page.scss */
        "./src/app/pages/calc-inss/calc-inss.page.scss"))["default"]]
      })], CalcInssPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-calc-inss-calc-inss-module-es5.js.map