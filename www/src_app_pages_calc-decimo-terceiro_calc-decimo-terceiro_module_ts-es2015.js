"use strict";
(self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_calc-decimo-terceiro_calc-decimo-terceiro_module_ts"],{

/***/ 26847:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcDecimoTerceiroPageRoutingModule": function() { return /* binding */ CalcDecimoTerceiroPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-decimo-terceiro.page */ 47211);




const routes = [
    {
        path: '',
        component: _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_0__.CalcDecimoTerceiroPage
    }
];
let CalcDecimoTerceiroPageRoutingModule = class CalcDecimoTerceiroPageRoutingModule {
};
CalcDecimoTerceiroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalcDecimoTerceiroPageRoutingModule);



/***/ }),

/***/ 73120:
/*!***************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcDecimoTerceiroPageModule": function() { return /* binding */ CalcDecimoTerceiroPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _calc_decimo_terceiro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-decimo-terceiro-routing.module */ 26847);
/* harmony import */ var _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-decimo-terceiro.page */ 47211);







let CalcDecimoTerceiroPageModule = class CalcDecimoTerceiroPageModule {
};
CalcDecimoTerceiroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calc_decimo_terceiro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcDecimoTerceiroPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_1__.CalcDecimoTerceiroPage]
    })
], CalcDecimoTerceiroPageModule);



/***/ }),

/***/ 47211:
/*!*************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcDecimoTerceiroPage": function() { return /* binding */ CalcDecimoTerceiroPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_decimo_terceiro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calc-decimo-terceiro.page.html */ 13276);
/* harmony import */ var _calc_decimo_terceiro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-decimo-terceiro.page.scss */ 83311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 88697);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);







let CalcDecimoTerceiroPage = class CalcDecimoTerceiroPage {
    constructor(formBuilder, pdfGenerator, toastController) {
        this.formBuilder = formBuilder;
        this.pdfGenerator = pdfGenerator;
        this.toastController = toastController;
        this.valueDependent = 189.59;
        this.decimoTerceiroForm = this.formBuilder.group({
            grossSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            dependentValue: [0],
            monthsWorked: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Informe o salário bruto!',
                duration: 3000,
                color: 'medium'
            });
            toast.present();
        });
    }
    monthsWorkedToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
CalcDecimoTerceiroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-calc-decimo-terceiro',
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_decimo_terceiro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_decimo_terceiro_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalcDecimoTerceiroPage);



/***/ }),

/***/ 13276:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title\">\r\n        <ion-label>{{ 'Calcular Décimo Terceiro' | uppercase}}</ion-label>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form [formGroup]=\"decimoTerceiroForm\" class=\"paddin-input\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Salário bruto:</ion-label>\r\n      <ion-input\r\n              placeholder=\"R$ 0.00\"\r\n              type=\"number\"\r\n              (ngModelChange)=\"showClearButton($event)\"\r\n              formControlName=\"grossSalary\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Número de dependentes:</ion-label>\r\n      <ion-input placeholder=\"0\" type=\"number\" formControlName=\"dependentValue\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Número de meses trabalhados:</ion-label>\r\n      <ion-input placeholder=\"mínimo 1 máximo 12\" type=\"number\" formControlName=\"monthsWorked\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"baseCalculation && parcelPrimary > 0 \" class=\"align-items\">\r\n      <span>{{'Primeira parcela: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ parcelPrimaryFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div *ngIf=\"baseCalculation && parcelSecondary > 0\" class=\"align-items\">\r\n      <span>{{'Segunda parcela: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ parcelSecondaryFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div *ngIf=\"baseCalculation && total > 0\" class=\"align-items\">\r\n      <span>{{'Valor integral: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ totalFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div class=\"align-button\">\r\n      <ion-button (click)=\"onSubmit(decimoTerceiroForm)\">Calcular</ion-button>\r\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\r\n      <ion-button *ngIf=\"total\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n<!--Gerar PDF-->\r\n<!--Preciso melhorar isso-->\r\n<div hidden id=\"remove\">\r\n  <div id=\"print\">\r\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO 13º SALÁRIO</h1><br>\r\n    <div style=\"width: 100%\">\r\n      <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px\">Salário bruto:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + realGrossSalaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Número de dependentes:</b>\r\n        <span style=\"font-size: 35px;\">{{ dependentQuantity }}</span>\r\n      </div>\r\n\r\n      <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Salário proporcional:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + proportionalSalaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Primeira parcela:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + parcelPrimaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Segunda parcela:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + parcelSecondaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Valor integral:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + totalFormatted }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 83311:
/*!***************************************************************************!*\
  !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.scss ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-badge {\n  margin-left: 12px;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtZGVjaW1vLXRlcmNlaXJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLG1CQUFBO0FBREo7QUFJRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxxQkFBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0FBUEo7QUFXQTtFQUNFLGlCQUFBO0FBUkY7QUFXQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBUkY7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVJGO0FBV0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVJGIiwiZmlsZSI6ImNhbGMtZGVjaW1vLXRlcmNlaXJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnM7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgfVxyXG5cclxuICBpb24tYmFkZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmdpbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLmFsaWduLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLnBhZGRpbi1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogOTBweDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calc-decimo-terceiro_calc-decimo-terceiro_module_ts-es2015.js.map