(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calc-decimo-terceiro-calc-decimo-terceiro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title\">\r\n        <ion-label>{{ 'Calcular Décimo Terceiro' | uppercase}}</ion-label>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form [formGroup]=\"decimoTerceiroForm\" class=\"paddin-input\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Salário bruto:</ion-label>\r\n      <ion-input\r\n              placeholder=\"R$ 0.00\"\r\n              type=\"number\"\r\n              (ngModelChange)=\"showClearButton($event)\"\r\n              formControlName=\"grossSalary\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Número de dependentes:</ion-label>\r\n      <ion-input placeholder=\"0\" type=\"number\" formControlName=\"dependentValue\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Número de meses trabalhados:</ion-label>\r\n      <ion-input placeholder=\"mínimo 1 máximo 12\" type=\"number\" formControlName=\"monthsWorked\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"baseCalculation && parcelPrimary > 0 \" class=\"align-items\">\r\n      <span>{{'Primeira parcela: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ parcelPrimaryFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div *ngIf=\"baseCalculation && parcelSecondary > 0\" class=\"align-items\">\r\n      <span>{{'Segunda parcela: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ parcelSecondaryFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div *ngIf=\"baseCalculation && total > 0\" class=\"align-items\">\r\n      <span>{{'Valor integral: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ totalFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div class=\"align-button\">\r\n      <ion-button (click)=\"onSubmit(decimoTerceiroForm)\">Calcular</ion-button>\r\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\r\n      <ion-button *ngIf=\"total\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n<!--Gerar PDF-->\r\n<!--Preciso melhorar isso-->\r\n<div hidden id=\"remove\">\r\n  <div id=\"print\">\r\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO 13º SALÁRIO</h1><br>\r\n    <div style=\"width: 100%\">\r\n      <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px\">Salário bruto:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + realGrossSalaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Número de dependentes:</b>\r\n        <span style=\"font-size: 35px;\">{{ dependentQuantity }}</span>\r\n      </div>\r\n\r\n      <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Salário proporcional:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + proportionalSalaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Primeira parcela:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + parcelPrimaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Segunda parcela:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + parcelSecondaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Valor integral:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + totalFormatted }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CalcDecimoTerceiroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDecimoTerceiroPageRoutingModule", function() { return CalcDecimoTerceiroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calc-decimo-terceiro.page */ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.ts");




const routes = [
    {
        path: '',
        component: _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_3__["CalcDecimoTerceiroPage"]
    }
];
let CalcDecimoTerceiroPageRoutingModule = class CalcDecimoTerceiroPageRoutingModule {
};
CalcDecimoTerceiroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalcDecimoTerceiroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.module.ts ***!
  \***************************************************************************/
/*! exports provided: CalcDecimoTerceiroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDecimoTerceiroPageModule", function() { return CalcDecimoTerceiroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calc_decimo_terceiro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calc-decimo-terceiro-routing.module */ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro-routing.module.ts");
/* harmony import */ var _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc-decimo-terceiro.page */ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.ts");







let CalcDecimoTerceiroPageModule = class CalcDecimoTerceiroPageModule {
};
CalcDecimoTerceiroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calc_decimo_terceiro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalcDecimoTerceiroPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_6__["CalcDecimoTerceiroPage"]]
    })
], CalcDecimoTerceiroPageModule);



/***/ }),

/***/ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-badge {\n  margin-left: 12px;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsYy1kZWNpbW8tdGVyY2Vpcm8vY2FsYy1kZWNpbW8tdGVyY2Vpcm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBRko7QUFLRTtFQUNFLHFCQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUxKO0FBUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7QUFQSjtBQVdBO0VBQ0UsaUJBQUE7QUFSRjtBQVdBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFSRjtBQVdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBUkY7QUFXQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBUkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxjLWRlY2ltby10ZXJjZWlyby9jYWxjLWRlY2ltby10ZXJjZWlyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2VjZWVlZTtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhZGdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxuICB9XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJnaW4taWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5hbGlnbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW4taW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDkwcHg7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.ts ***!
  \*************************************************************************/
/*! exports provided: CalcDecimoTerceiroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDecimoTerceiroPage", function() { return CalcDecimoTerceiroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ "./node_modules/@ionic-native/pdf-generator/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CalcDecimoTerceiroPage = class CalcDecimoTerceiroPage {
    constructor(formBuilder, pdfGenerator, toastController) {
        this.formBuilder = formBuilder;
        this.pdfGenerator = pdfGenerator;
        this.toastController = toastController;
        this.valueDependent = 189.59;
        this.decimoTerceiroForm = this.formBuilder.group({
            grossSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dependentValue: [0],
            monthsWorked: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    calcInss() {
        this.grossSalary = this.grossSalary / 12 * this.decimoTerceiroForm.value.monthsWorked;
        if (this.grossSalary < 1100) {
            this.inssValue = 82.50;
            this.calculatedInss = (this.grossSalary * 7.5 / 100);
        }
        else if ((this.grossSalary > 1100) && (this.grossSalary < 2203.49)) {
            this.inssValue = 99.31;
            this.calculatedInss = (this.grossSalary * 9 / 100) - 16.50;
        }
        else if ((this.grossSalary > 2203.48) && (this.grossSalary < 3305.23)) {
            this.inssValue = 132.21;
            this.calculatedInss = (this.grossSalary * 12 / 100) - 82.60;
        }
        else if ((this.grossSalary > 3305.22) && (this.grossSalary < 6433.58)) {
            this.inssValue = 437.96;
            this.calculatedInss = (this.grossSalary * 14 / 100) - 148.70;
        }
        else if ((this.grossSalary > 6433.57)) {
            this.inssValue = 437.96;
            this.calculatedInss = (6433.57 * 14 / 100) - 148.70;
        }
    }
    calcIrrf() {
        var _a;
        const dependentCalculation = this.decimoTerceiroForm.value.dependentValue * this.valueDependent;
        const baseSalary = this.grossSalary - this.calculatedInss;
        if ((baseSalary < 2075)) {
            this.calculatedIrrf = 0;
        }
        else if ((baseSalary > 1903.98) && (baseSalary < 2826.66)) {
            this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 7.5 / 100 - 142.80;
        }
        else if ((baseSalary > 2826.65) && (baseSalary < 3751.05)) {
            this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 15 / 100 - 354.80;
        }
        else if ((baseSalary > 3751.05) && (baseSalary < 4664.69)) {
            this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * (22.5 / 100) - 636.13;
        }
        else if ((baseSalary > 4664.68)) {
            this.calculatedIrrf = ((this.grossSalary - this.calculatedInss - dependentCalculation) * 27.5 / 100) - 869.36;
        }
        this.baseCalculation = this.grossSalary - this.calculatedInss;
        this.calculatedIrrfPdf = (_a = this.calculatedIrrf) === null || _a === void 0 ? void 0 : _a.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        this.baseCalculationPdf = this.baseCalculation.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        this.showBaseCalculation = this.baseCalculation.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    }
    showClearButton(e) {
        this.grossSalary = e;
        if (!e) {
            this.decimoTerceiroForm.patchValue({
                monthsWorked: this.decimoTerceiroForm.value.monthsWorked = undefined,
            });
            this.parcelPrimary = undefined;
            this.parcelSecondary = undefined;
            this.total = undefined;
        }
    }
    resetForm() {
        this.decimoTerceiroForm.reset();
        this.baseCalculation = undefined;
        this.calculatedIrrf = undefined;
        this.calculatedInss = undefined;
        this.grossSalary = undefined;
    }
    grossSalaryToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Informe o salário bruto!',
                duration: 3000,
                color: 'medium'
            });
            toast.present();
        });
    }
    monthsWorkedToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Informe a quantidade de meses trabalhados!',
                duration: 3000,
                color: 'medium'
            });
            toast.present();
        });
    }
    generatorPdf() {
        const hidden = document.getElementById('remove');
        hidden.removeAttribute('hidden');
        hidden.setAttribute('hidden', '');
        const a = document.getElementById('print');
        this.pdfGenerator.fromData(a.innerHTML, { type: 'share' });
    }
    calcDecimoTerceiro() {
        this.monthsWorked = this.decimoTerceiroForm.value.monthsWorked;
        this.parcelPrimary = (this.grossSalary) / 2;
        this.parcelPrimaryFormatted = this.parcelPrimary
            .toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        this.parcelSecondary = this.parcelPrimary - this.calculatedInss - this.calculatedIrrf;
        this.parcelSecondaryFormatted = this.parcelSecondary
            .toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        this.total = (this.parcelPrimary + this.parcelSecondary);
        this.totalFormatted = this.total.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        this.realGrossSalary = this.decimoTerceiroForm.value.grossSalary;
        this.realGrossSalaryFormatted = this.realGrossSalary
            .toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        this.dependentQuantity = this.decimoTerceiroForm.value.dependentValue;
        this.proportionalSalary = this.decimoTerceiroForm.value.grossSalary / 12 * this.decimoTerceiroForm.value.monthsWorked;
        this.proportionalSalaryFormatted = this.proportionalSalary
            .toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    }
    onSubmit({ value, valid }) {
        if (!value.grossSalary) {
            return this.grossSalaryToast();
        }
        if (!value.monthsWorked) {
            return this.monthsWorkedToast();
        }
        this.grossSalary = value.grossSalary;
        this.calcInss();
        this.calcIrrf();
        this.calcDecimoTerceiro();
    }
};
CalcDecimoTerceiroPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__["PDFGenerator"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
CalcDecimoTerceiroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calc-decimo-terceiro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calc-decimo-terceiro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calc-decimo-terceiro.page.scss */ "./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.scss")).default]
    })
], CalcDecimoTerceiroPage);



/***/ })

}]);
//# sourceMappingURL=pages-calc-decimo-terceiro-calc-decimo-terceiro-module-es2015.js.map