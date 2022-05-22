"use strict";
(self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_calc-inss_calc-inss_module_ts"],{

/***/ 83386:
/*!*************************************************************!*\
  !*** ./src/app/pages/calc-inss/calc-inss-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcInssPageRoutingModule": function() { return /* binding */ CalcInssPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _calc_inss_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-inss.page */ 89354);




const routes = [
    {
        path: '',
        component: _calc_inss_page__WEBPACK_IMPORTED_MODULE_0__.CalcInssPage
    }
];
let CalcInssPageRoutingModule = class CalcInssPageRoutingModule {
};
CalcInssPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalcInssPageRoutingModule);



/***/ }),

/***/ 74304:
/*!*****************************************************!*\
  !*** ./src/app/pages/calc-inss/calc-inss.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcInssPageModule": function() { return /* binding */ CalcInssPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _calc_inss_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-inss-routing.module */ 83386);
/* harmony import */ var _calc_inss_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-inss.page */ 89354);







let CalcInssPageModule = class CalcInssPageModule {
};
CalcInssPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calc_inss_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcInssPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_calc_inss_page__WEBPACK_IMPORTED_MODULE_1__.CalcInssPage]
    })
], CalcInssPageModule);



/***/ }),

/***/ 89354:
/*!***************************************************!*\
  !*** ./src/app/pages/calc-inss/calc-inss.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcInssPage": function() { return /* binding */ CalcInssPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_inss_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calc-inss.page.html */ 40493);
/* harmony import */ var _calc_inss_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-inss.page.scss */ 83322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 88697);







let CalcInssPage = class CalcInssPage {
    constructor(formBuilder, toastController, pdfGenerator) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.pdfGenerator = pdfGenerator;
        this.inssForm = this.formBuilder.group({
            grossSalary: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            inssValue: [""],
        });
    }
    calcInss() {
        var _a, _b;
        if (this.grossSalary < 1212) {
            this.lowerSalaryToast();
            this.calculatedInss = undefined;
        }
        if (this.grossSalary === 1212) {
            this.inssValue = 90.9;
            this.calculatedInss = 90.9;
            this.aliquota = 7.5;
        }
        else if (this.grossSalary > 1212 && this.grossSalary < 2427.35) {
            this.inssValue = 109.38;
            this.calculatedInss = (this.grossSalary * 9) / 100 - 18.18;
            this.aliquota = 9;
        }
        else if (this.grossSalary > 2427.36 && this.grossSalary < 3641.03) {
            this.inssValue = 145.64;
            this.calculatedInss = (this.grossSalary * 12) / 100 - 91;
            this.aliquota = 12;
        }
        else if (this.grossSalary > 3641.04 && this.grossSalary < 7087.22) {
            this.inssValue = 482.47;
            this.calculatedInss = (this.grossSalary * 14) / 100 - 163.82;
            this.aliquota = 14;
        }
        else if (this.grossSalary > 7087.22) {
            this.inssValue = 482.47;
            this.calculatedInss = (7087.22 * 14) / 100 - 163.82;
            this.aliquota = "Teto";
        }
        this.inssForm.patchValue({
            inssValue: (_a = this.calculatedInss) === null || _a === void 0 ? void 0 : _a.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            }),
        });
        this.calculatedInssPdf = (_b = this.calculatedInss) === null || _b === void 0 ? void 0 : _b.toLocaleString("pt-BR", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        });
        this.grossSalaryFormatted = this.grossSalary.toLocaleString("pt-BR", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        });
    }
    lowerSalaryToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Valor inferior ao salário mínimo (R$1.212)",
                duration: 3000,
                color: "medium",
            });
            toast.present();
        });
    }
    reportSalaryToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "Insira o valor do salário!",
                duration: 3000,
                color: "medium",
            });
            toast.present();
        });
    }
    resetForm() {
        this.inssForm.reset();
        this.calculatedInss = undefined;
        this.grossSalary = undefined;
    }
    showClearButton(e) {
        this.grossSalary = e;
        if (!e) {
            this.inssForm.patchValue({
                inssValue: (this.inssForm.value.inssValue = undefined),
            });
            this.calculatedInss = undefined;
        }
    }
    generatorPdf() {
        const hidden = document.getElementById("remove");
        hidden.removeAttribute("hidden");
        hidden.setAttribute("hidden", "");
        const a = document.getElementById("print");
        this.pdfGenerator.fromData(a.innerHTML, { type: "share" });
    }
    onSubmit({ value, valid }) {
        if (!valid) {
            return this.reportSalaryToast();
        }
        this.grossSalary = value.grossSalary;
        this.calcInss();
        this.inssForm.markAsPristine();
    }
};
CalcInssPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator }
];
CalcInssPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-calc-inss",
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_inss_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_inss_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalcInssPage);



/***/ }),

/***/ 40493:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/calc-inss/calc-inss.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-label>{{ 'Calcular Inss' | uppercase}}</ion-label>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"inssForm\" class=\"paddin-input\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Salário bruto</ion-label>\r\n        <ion-input\r\n          placeholder=\"R$ 0.00\"\r\n          type=\"number\"\r\n          (ngModelChange)=\"showClearButton($event)\"\r\n          formControlName=\"grossSalary\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label *ngIf=\"inssForm.value.inssValue\">R$</ion-label>\r\n        <ion-input\r\n          disabled\r\n          placeholder=\"...\"\r\n          formControlName=\"inssValue\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <div class=\"align-items\">\r\n        <span *ngIf=\"aliquota && inssForm.value.inssValue\" class=\"mr-6\">{{'Alíquota:'}}</span>\r\n        <ion-badge color=\"medium\" *ngIf=\"aliquota && inssForm.value.inssValue\">\r\n          {{ aliquota }}{{'%'}}\r\n        </ion-badge>\r\n      </div>\r\n    <div class=\"align-button\">\r\n      <ion-button (click)=\"onSubmit(inssForm)\">Calcular</ion-button>\r\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\r\n      <ion-button *ngIf=\"calculatedInss\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<!--Gerar PDF-->\r\n<!--Preciso melhorar isso-->\r\n<div hidden id=\"remove\">\r\n  <div id=\"print\">\r\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO INSS</h1><br>\r\n        <div style=\"width: 100%\">\r\n          <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n            <b style=\"font-size: 35px\">Salário bruto:</b>\r\n            <span style=\"font-size: 35px;\">{{ 'R$ ' + grossSalaryFormatted }}</span>\r\n          </div>\r\n\r\n          <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n            <b style=\"font-size: 35px;\">Desconto:</b>\r\n            <span style=\"font-size: 35px;\">{{ 'R$ ' + calculatedInssPdf }}</span>\r\n          </div>\r\n\r\n          <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n            <b style=\"font-size: 35px;\">Alíquota:</b>\r\n            <span style=\"font-size: 35px;\">{{ aliquota + '%' }}</span>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 83322:
/*!*****************************************************!*\
  !*** ./src/app/pages/calc-inss/calc-inss.page.scss ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.text-align {\n  padding-top: 12px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n.mr-6 {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtaW5zcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxxQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBVUE7RUFDRSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtBQVBGIiwiZmlsZSI6ImNhbGMtaW5zcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2VjZWVlZTtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnM7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJnaW4taWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5hbGlnbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW4taW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDkwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubXItNiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calc-inss_calc-inss_module_ts-es2015.js.map