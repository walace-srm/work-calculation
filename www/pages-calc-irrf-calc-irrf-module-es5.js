(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calc-irrf-calc-irrf-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-irrf/calc-irrf.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-irrf/calc-irrf.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCalcIrrfCalcIrrfPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title\">\r\n        <ion-label>{{ 'Calcular IRRF' | uppercase}}</ion-label>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form [formGroup]=\"irrfForm\" class=\"paddin-input\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Salário bruto:</ion-label>\r\n      <ion-input\r\n        placeholder=\"R$ 0.00\"\r\n        type=\"number\"\r\n        (ngModelChange)=\"showClearButton($event)\"\r\n        formControlName=\"grossSalary\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Número de dependentes:</ion-label>\r\n      <ion-input placeholder=\"0\" type=\"number\" formControlName=\"dependentValue\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label *ngIf=\"irrfForm.value.irrfValue\">R$</ion-label>\r\n      <ion-input disabled placeholder=\"...\" formControlName=\"irrfValue\">\r\n      </ion-input>\r\n    </ion-item>\r\n    <div class=\"align-items\">\r\n      <span *ngIf=\"baseCalculation > 1\">{{'Base para cálculo: '}}</span>\r\n      <ion-badge color=\"medium\" *ngIf=\"baseCalculation > 1\">\r\n        {{'R$ '}}{{ showBaseCalculation }}\r\n      </ion-badge>\r\n    </div>\r\n    <div class=\"align-button\">\r\n      <ion-button (click)=\"onSubmit(irrfForm)\">Calcular</ion-button>\r\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\r\n      <ion-button *ngIf=\"calculatedIrrf\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<!--Gerar PDF-->\r\n<!--Preciso melhorar isso-->\r\n<div hidden id=\"remove\">\r\n  <div id=\"print\">\r\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO IRRF</h1><br>\r\n    <div style=\"width: 100%\">\r\n      <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px\">Salário bruto:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + grossSalaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Número de dependentes:</b>\r\n        <span style=\"font-size: 35px;\">{{ dependentQuantity }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Desconto:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + calculatedIrrfPdf }}</span>\r\n      </div>\r\n\r\n      <div style=\" display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Base para cálculo:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + baseCalculationPdf }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/pages/calc-irrf/calc-irrf-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/calc-irrf/calc-irrf-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CalcIrrfPageRoutingModule */

    /***/
    function srcAppPagesCalcIrrfCalcIrrfRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalcIrrfPageRoutingModule", function () {
        return CalcIrrfPageRoutingModule;
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


      var _calc_irrf_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calc-irrf.page */
      "./src/app/pages/calc-irrf/calc-irrf.page.ts");

      var routes = [{
        path: '',
        component: _calc_irrf_page__WEBPACK_IMPORTED_MODULE_3__["CalcIrrfPage"]
      }];

      var CalcIrrfPageRoutingModule = function CalcIrrfPageRoutingModule() {
        _classCallCheck(this, CalcIrrfPageRoutingModule);
      };

      CalcIrrfPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalcIrrfPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/calc-irrf/calc-irrf.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/calc-irrf/calc-irrf.module.ts ***!
      \*****************************************************/

    /*! exports provided: CalcIrrfPageModule */

    /***/
    function srcAppPagesCalcIrrfCalcIrrfModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalcIrrfPageModule", function () {
        return CalcIrrfPageModule;
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


      var _calc_irrf_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calc-irrf-routing.module */
      "./src/app/pages/calc-irrf/calc-irrf-routing.module.ts");
      /* harmony import */


      var _calc_irrf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calc-irrf.page */
      "./src/app/pages/calc-irrf/calc-irrf.page.ts");

      var CalcIrrfPageModule = function CalcIrrfPageModule() {
        _classCallCheck(this, CalcIrrfPageModule);
      };

      CalcIrrfPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calc_irrf_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalcIrrfPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_calc_irrf_page__WEBPACK_IMPORTED_MODULE_6__["CalcIrrfPage"]]
      })], CalcIrrfPageModule);
      /***/
    },

    /***/
    "./src/app/pages/calc-irrf/calc-irrf.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/calc-irrf/calc-irrf.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCalcIrrfCalcIrrfPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-badge {\n  margin-left: 12px;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsYy1pcnJmL2NhbGMtaXJyZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBSUU7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtFO0VBQ0UscUJBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBTEo7QUFRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtBQVBKO0FBV0E7RUFDRSxpQkFBQTtBQVJGO0FBV0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQVJGO0FBV0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFSRjtBQVdBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFSRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGMtaXJyZi9jYWxjLWlycmYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlY2VlZWU7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2FucztcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICB9XHJcblxyXG4gIGlvbi1iYWRnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFyZ2luLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uYWxpZ24tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucGFkZGluLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA5MHB4O1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/calc-irrf/calc-irrf.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/calc-irrf/calc-irrf.page.ts ***!
      \***************************************************/

    /*! exports provided: CalcIrrfPage */

    /***/
    function srcAppPagesCalcIrrfCalcIrrfPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalcIrrfPage", function () {
        return CalcIrrfPage;
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

      var CalcIrrfPage = /*#__PURE__*/function () {
        function CalcIrrfPage(formBuilder, toastController, pdfGenerator) {
          _classCallCheck(this, CalcIrrfPage);

          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.pdfGenerator = pdfGenerator;
          this.valueDependent = 189.59;
          this.irrfForm = this.formBuilder.group({
            grossSalary: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inssValue: [""],
            irrfValue: [""],
            dependentValue: [0]
          });
        }

        _createClass(CalcIrrfPage, [{
          key: "calcInss",
          value: function calcInss() {
            if (this.grossSalary === 1212) {
              /**
               * Será implementado futuramente
               **/
              // this.inssValue = fiscalRules.inssValue;
              this.inssValue = 90.9;
            } else if (this.grossSalary > 1212 && this.grossSalary < 2427.35) {
              this.inssValue = 109.38;
              this.calculatedInss = this.grossSalary * 9 / 100 - 18.18;
            } else if (this.grossSalary > 2427.36 && this.grossSalary < 3641.03) {
              this.inssValue = 145.64;
              this.calculatedInss = this.grossSalary * 12 / 100 - 91;
            } else if (this.grossSalary > 3641.04 && this.grossSalary < 7087.22) {
              this.inssValue = 482.47;
              this.calculatedInss = this.grossSalary * 14 / 100 - 163.82;
            } else if (this.grossSalary > 7087.22) {
              this.inssValue = 482.47;
              this.calculatedInss = 7087.22 * 14 / 100 - 163.82;
            }

            this.irrfForm.patchValue({
              inssValue: this.calculatedInss
            });
          }
        }, {
          key: "calcIrrf",
          value: function calcIrrf() {
            var _a, _b;

            var dependentCalculation = this.irrfForm.value.dependentValue * this.valueDependent;
            var baseSalary = this.grossSalary - this.calculatedInss;

            if (baseSalary < 1903.98 || this.grossSalary < 1903.98) {
              this.calculatedIrrf = undefined;
              this.taxFreeToast();
            } else if (baseSalary > 1903.98 && baseSalary < 2826.66) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 7.5 / 100 - 142.8;
            } else if (baseSalary > 2826.65 && baseSalary < 3751.05) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 15 / 100 - 354.8;
            } else if (baseSalary > 3751.05 && baseSalary < 4664.69) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * (22.5 / 100) - 636.13;
            } else if (baseSalary > 4664.68) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 27.5 / 100 - 869.36;
            }

            this.irrfForm.patchValue({
              irrfValue: (_a = this.calculatedIrrf) === null || _a === void 0 ? void 0 : _a.toLocaleString("pt-BR", {
                maximumFractionDigits: 2
              }),
              dependentValue: this.irrfForm.value.dependentValue
            });
            this.baseCalculation = this.grossSalary - this.calculatedInss;
            this.calculatedIrrfPdf = (_b = this.calculatedIrrf) === null || _b === void 0 ? void 0 : _b.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.baseCalculationPdf = this.baseCalculation.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.showBaseCalculation = this.baseCalculation.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.grossSalaryFormatted = this.grossSalary.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.dependentQuantity = this.irrfForm.value.dependentValue;
          }
        }, {
          key: "taxFreeToast",
          value: function taxFreeToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: "Isento de imposto de renda!",
                        duration: 3000,
                        color: "medium"
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
                        message: "Insira o valor do salário!",
                        duration: 3000,
                        color: "medium"
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
            this.irrfForm.reset();
            this.baseCalculation = undefined;
            this.calculatedIrrf = undefined;
            this.calculatedInss = undefined;
            this.grossSalary = undefined;
          }
        }, {
          key: "showClearButton",
          value: function showClearButton(e) {
            this.grossSalary = e;

            if (!e) {
              this.irrfForm.patchValue({
                irrfValue: this.irrfForm.value.irrfValue = undefined,
                dependentValue: this.irrfForm.value.dependentValue = undefined
              });
              this.calculatedIrrf = undefined;
              this.baseCalculation = undefined;
            }
          }
        }, {
          key: "generatorPdf",
          value: function generatorPdf() {
            var hidden = document.getElementById("remove");
            hidden.removeAttribute("hidden");
            hidden.setAttribute("hidden", "");
            var a = document.getElementById("print");
            this.pdfGenerator.fromData(a.innerHTML, {
              type: "share"
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
            this.calcIrrf();
          }
        }]);

        return CalcIrrfPage;
      }();

      CalcIrrfPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_4__["PDFGenerator"]
        }];
      };

      CalcIrrfPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-calc-irrf",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./calc-irrf.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-irrf/calc-irrf.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./calc-irrf.page.scss */
        "./src/app/pages/calc-irrf/calc-irrf.page.scss"))["default"]]
      })], CalcIrrfPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-calc-irrf-calc-irrf-module-es5.js.map