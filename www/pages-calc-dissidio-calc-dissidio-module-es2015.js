(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calc-dissidio-calc-dissidio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-dissidio/calc-dissidio.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-dissidio/calc-dissidio.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-label>{{ 'Calcular Dissídio' | uppercase}}</ion-label>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"dissidioForm\" class=\"paddin-input\">\n    <ion-item>\n      <ion-label position=\"stacked\">Salário bruto</ion-label>\n      <ion-input\n          placeholder=\"R$ 0.00\"\n          type=\"number\"\n          (ngModelChange)=\"showClearButton($event)\"\n          formControlName=\"grossSalary\"\n      ></ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Aumento acordado( em % )</ion-label>\n          <ion-input\n          type=\"number\"\n          formControlName=\"salaryIncrease\"\n          ></ion-input>\n      </ion-item>\n    <div *ngIf=\"calculatedDissidio && dissidioForm.value.salaryIncrease\" class=\"align-items\">\n      <span class=\"mr-6\">{{'O seu dissídio será de:'}}</span>\n      <ion-badge color=\"medium\">\n        {{'R$ '}}{{ calculatedDissidio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}\n      </ion-badge>\n    </div>\n      <div *ngIf=\"calculatedDissidio && dissidioForm.value.salaryIncrease\" class=\"align-items\">\n          <span class=\"mr-6\">{{'O seu salário passará para:'}}</span>\n          <ion-badge color=\"medium\">\n              {{'R$ '}}{{ newSalary.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}\n          </ion-badge>\n      </div>\n    <div class=\"align-button\">\n      <ion-button (click)=\"onSubmit(dissidioForm)\">Calcular</ion-button>\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\n      <ion-button *ngIf=\"calculatedDissidio\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\n    </div>\n  </form>\n</ion-content>\n<!--Gerar PDF-->\n<!--Preciso melhorar isso-->\n<div hidden id=\"remove\">\n    <div id=\"print\">\n        <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO DISSÍDIO</h1><br>\n        <div style=\"width: 100%\">\n            <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\n                <b style=\"font-size: 35px\">Salário bruto:</b>\n                <span style=\"font-size: 35px;\">{{ 'R$ ' + grossSalary }}</span>\n            </div>\n\n            <div style=\"display: flex; justify-content: space-between; height: 50px;\">\n                <b style=\"font-size: 35px;\">Percentual do dissídio:</b>\n                <span style=\"font-size: 35px;\">{{ salaryIncrease + '%' }}</span>\n            </div>\n\n            <div style=\"display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\n                <b style=\"font-size: 35px;\">Valor do dissídio:</b>\n                <span style=\"font-size: 35px;\">{{ 'R$ ' + calculatedDissidioPdf }}</span>\n            </div>\n\n            <div style=\" display: flex; justify-content: space-between; height: 50px;\">\n                <b style=\"font-size: 35px;\">Novo salário:</b>\n                <span style=\"font-size: 35px;\">{{ 'R$ ' + newSalaryPdf }}</span>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/calc-dissidio/calc-dissidio-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CalcDissidioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDissidioPageRoutingModule", function() { return CalcDissidioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calc_dissidio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calc-dissidio.page */ "./src/app/pages/calc-dissidio/calc-dissidio.page.ts");




const routes = [
    {
        path: '',
        component: _calc_dissidio_page__WEBPACK_IMPORTED_MODULE_3__["CalcDissidioPage"]
    }
];
let CalcDissidioPageRoutingModule = class CalcDissidioPageRoutingModule {
};
CalcDissidioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalcDissidioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calc-dissidio/calc-dissidio.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio.module.ts ***!
  \*************************************************************/
/*! exports provided: CalcDissidioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDissidioPageModule", function() { return CalcDissidioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calc_dissidio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calc-dissidio-routing.module */ "./src/app/pages/calc-dissidio/calc-dissidio-routing.module.ts");
/* harmony import */ var _calc_dissidio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc-dissidio.page */ "./src/app/pages/calc-dissidio/calc-dissidio.page.ts");







let CalcDissidioPageModule = class CalcDissidioPageModule {
};
CalcDissidioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calc_dissidio_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalcDissidioPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_calc_dissidio_page__WEBPACK_IMPORTED_MODULE_6__["CalcDissidioPage"]]
    })
], CalcDissidioPageModule);



/***/ }),

/***/ "./src/app/pages/calc-dissidio/calc-dissidio.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.text-align {\n  padding-top: 12px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n.mr-6 {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsYy1kaXNzaWRpby9jYWxjLWRpc3NpZGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFLRTtFQUNFLG1CQUFBO0FBSEo7QUFNRTtFQUNFLHFCQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUxKO0FBUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFVQTtFQUNFLGlCQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBUEY7QUFVQTtFQUNFLGlCQUFBO0FBUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxjLWRpc3NpZGlvL2NhbGMtZGlzc2lkaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2VjZWVlZTtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zO1xuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICBpb24tYmFjay1idXR0b24ge1xuICAgIC0tY29sb3I6ICNmZmY7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG4ubWFyZ2luLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLmFsaWduLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnBhZGRpbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA5MHB4O1xufVxuXG4udGV4dC1hbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5tci02IHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/calc-dissidio/calc-dissidio.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/calc-dissidio/calc-dissidio.page.ts ***!
  \***********************************************************/
/*! exports provided: CalcDissidioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDissidioPage", function() { return CalcDissidioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ "./node_modules/@ionic-native/pdf-generator/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CalcDissidioPage = class CalcDissidioPage {
    constructor(formBuilder, pdfGenerator, toastController) {
        this.formBuilder = formBuilder;
        this.pdfGenerator = pdfGenerator;
        this.toastController = toastController;
        this.dissidioForm = this.formBuilder.group({
            grossSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salaryIncrease: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    calcDissidio() {
        this.grossSalary = this.dissidioForm.value.grossSalary;
        this.salaryIncrease = this.dissidioForm.value.salaryIncrease;
        this.calculatedDissidio = (this.grossSalary * (this.salaryIncrease / 100));
        this.newSalary = (this.grossSalary + this.calculatedDissidio);
        this.calculatedDissidioPdf = this.calculatedDissidio;
        this.newSalaryPdf = this.newSalary;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Insira o valor do salário!',
                duration: 3000,
                color: 'medium'
            });
            toast.present();
        });
    }
    dissidioValueToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__["PDFGenerator"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
CalcDissidioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calc-dissidio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calc-dissidio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-dissidio/calc-dissidio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calc-dissidio.page.scss */ "./src/app/pages/calc-dissidio/calc-dissidio.page.scss")).default]
    })
], CalcDissidioPage);



/***/ })

}]);
//# sourceMappingURL=pages-calc-dissidio-calc-dissidio-module-es2015.js.map