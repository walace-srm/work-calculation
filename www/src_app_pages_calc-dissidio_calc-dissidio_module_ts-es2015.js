"use strict";
(self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_calc-dissidio_calc-dissidio_module_ts"],{

/***/ 23468:
/*!*********************************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcDissidioPageRoutingModule": function() { return /* binding */ CalcDissidioPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _calc_dissidio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-dissidio.page */ 89256);




const routes = [
    {
        path: '',
        component: _calc_dissidio_page__WEBPACK_IMPORTED_MODULE_0__.CalcDissidioPage
    }
];
let CalcDissidioPageRoutingModule = class CalcDissidioPageRoutingModule {
};
CalcDissidioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalcDissidioPageRoutingModule);



/***/ }),

/***/ 33939:
/*!*************************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcDissidioPageModule": function() { return /* binding */ CalcDissidioPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _calc_dissidio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-dissidio-routing.module */ 23468);
/* harmony import */ var _calc_dissidio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-dissidio.page */ 89256);







let CalcDissidioPageModule = class CalcDissidioPageModule {
};
CalcDissidioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calc_dissidio_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcDissidioPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_calc_dissidio_page__WEBPACK_IMPORTED_MODULE_1__.CalcDissidioPage]
    })
], CalcDissidioPageModule);



/***/ }),

/***/ 89256:
/*!***********************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcDissidioPage": function() { return /* binding */ CalcDissidioPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_dissidio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calc-dissidio.page.html */ 31227);
/* harmony import */ var _calc_dissidio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-dissidio.page.scss */ 57043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 88697);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);







let CalcDissidioPage = class CalcDissidioPage {
    constructor(formBuilder, pdfGenerator, toastController) {
        this.formBuilder = formBuilder;
        this.pdfGenerator = pdfGenerator;
        this.toastController = toastController;
        this.dissidioForm = this.formBuilder.group({
            grossSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            salaryIncrease: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    calcDissidio() {
        this.grossSalary = this.dissidioForm.value.grossSalary;
        this.salaryIncrease = this.dissidioForm.value.salaryIncrease;
        this.calculatedDissidio = (this.grossSalary * (this.salaryIncrease / 100));
        this.newSalary = (this.grossSalary + this.calculatedDissidio);
        this.calculatedDissidioPdf = this.calculatedDissidio;
        this.newSalaryPdf = this.newSalary;
        this.grossSalaryFormatted = this.grossSalary
            .toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    showClearButton(e) {
        this.grossSalary = e;
        if (!e) {
            this.dissidioForm.patchValue({
                salaryIncrease: this.dissidioForm.value.salaryIncrease = undefined
            });
            this.calculatedDissidio = undefined;
        }
    }
    reportSalaryToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Insira o valor do salário!',
                duration: 3000,
                color: 'medium'
            });
            toast.present();
        });
    }
    dissidioValueToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Informe o valor do dissídio',
                duration: 3000,
                color: 'medium'
            });
            toast.present();
        });
    }
    resetForm() {
        this.dissidioForm.reset();
        this.calculatedDissidio = undefined;
        this.grossSalary = undefined;
    }
    generatorPdf() {
        const hidden = document.getElementById('remove');
        hidden.removeAttribute('hidden');
        hidden.setAttribute('hidden', '');
        const a = document.getElementById('print');
        this.pdfGenerator.fromData(a.innerHTML, { type: 'share' });
    }
    onSubmit({ value, valid }) {
        if (!value.grossSalary) {
            return this.reportSalaryToast();
        }
        if (!value.salaryIncrease) {
            this.dissidioValueToast();
        }
        this.calcDissidio();
        this.calculatedDissidioPdf = this.calculatedDissidio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        this.newSalaryPdf = this.newSalary.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
};
CalcDissidioPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
CalcDissidioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-calc-dissidio',
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_dissidio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_dissidio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalcDissidioPage);



/***/ }),

/***/ 31227:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/calc-dissidio/calc-dissidio.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-label>{{ 'Calcular Dissídio' | uppercase}}</ion-label>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"dissidioForm\" class=\"paddin-input\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Salário bruto</ion-label>\r\n      <ion-input\r\n          placeholder=\"R$ 0.00\"\r\n          type=\"number\"\r\n          (ngModelChange)=\"showClearButton($event)\"\r\n          formControlName=\"grossSalary\"\r\n      ></ion-input>\r\n    </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Aumento acordado( em % )</ion-label>\r\n          <ion-input\r\n          type=\"number\"\r\n          formControlName=\"salaryIncrease\"\r\n          ></ion-input>\r\n      </ion-item>\r\n    <div *ngIf=\"calculatedDissidio && dissidioForm.value.salaryIncrease\" class=\"align-items\">\r\n      <span class=\"mr-6\">{{'O seu dissídio será de:'}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ calculatedDissidio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}\r\n      </ion-badge>\r\n    </div>\r\n      <div *ngIf=\"calculatedDissidio && dissidioForm.value.salaryIncrease\" class=\"align-items\">\r\n          <span class=\"mr-6\">{{'O seu salário passará para:'}}</span>\r\n          <ion-badge color=\"medium\">\r\n              {{'R$ '}}{{ newSalary.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}\r\n          </ion-badge>\r\n      </div>\r\n    <div class=\"align-button\">\r\n      <ion-button (click)=\"onSubmit(dissidioForm)\">Calcular</ion-button>\r\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\r\n      <ion-button *ngIf=\"calculatedDissidio\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<!--Gerar PDF-->\r\n<!--Preciso melhorar isso-->\r\n<div hidden id=\"remove\">\r\n    <div id=\"print\">\r\n        <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO DISSÍDIO</h1><br>\r\n        <div style=\"width: 100%\">\r\n            <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n                <b style=\"font-size: 35px\">Salário bruto:</b>\r\n                <span style=\"font-size: 35px;\">{{ 'R$ ' + grossSalaryFormatted }}</span>\r\n            </div>\r\n\r\n            <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n                <b style=\"font-size: 35px;\">Percentual do dissídio:</b>\r\n                <span style=\"font-size: 35px;\">{{ salaryIncrease + '%' }}</span>\r\n            </div>\r\n\r\n            <div style=\"display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n                <b style=\"font-size: 35px;\">Valor do dissídio:</b>\r\n                <span style=\"font-size: 35px;\">{{ 'R$ ' + calculatedDissidioPdf }}</span>\r\n            </div>\r\n\r\n            <div style=\" display: flex; justify-content: space-between; height: 50px;\">\r\n                <b style=\"font-size: 35px;\">Novo salário:</b>\r\n                <span style=\"font-size: 35px;\">{{ 'R$ ' + newSalaryPdf }}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ 57043:
/*!*************************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio.page.scss ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.text-align {\n  padding-top: 12px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n.mr-6 {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtZGlzc2lkaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQU1FO0VBQ0UscUJBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBTEo7QUFRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVVBO0VBQ0UsaUJBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBUEY7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7QUFQRiIsImZpbGUiOiJjYWxjLWRpc3NpZGlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2FucztcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmdpbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLmFsaWduLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLnBhZGRpbi1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogOTBweDtcclxufVxyXG5cclxuLnRleHQtYWxpZ24ge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5tci02IHtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calc-dissidio_calc-dissidio_module_ts-es2015.js.map