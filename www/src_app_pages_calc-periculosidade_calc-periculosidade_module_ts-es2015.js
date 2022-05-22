"use strict";
(self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_calc-periculosidade_calc-periculosidade_module_ts"],{

/***/ 8116:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcPericulosidadePageRoutingModule": function() { return /* binding */ CalcPericulosidadePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-periculosidade.page */ 54988);




const routes = [
    {
        path: '',
        component: _calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_0__.CalcPericulosidadePage
    }
];
let CalcPericulosidadePageRoutingModule = class CalcPericulosidadePageRoutingModule {
};
CalcPericulosidadePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalcPericulosidadePageRoutingModule);



/***/ }),

/***/ 42463:
/*!*************************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcPericulosidadePageModule": function() { return /* binding */ CalcPericulosidadePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _calc_periculosidade_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-periculosidade-routing.module */ 8116);
/* harmony import */ var _calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-periculosidade.page */ 54988);







let CalcPericulosidadePageModule = class CalcPericulosidadePageModule {
};
CalcPericulosidadePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _calc_periculosidade_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcPericulosidadePageRoutingModule,
        ],
        declarations: [_calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_1__.CalcPericulosidadePage],
    })
], CalcPericulosidadePageModule);



/***/ }),

/***/ 54988:
/*!***********************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcPericulosidadePage": function() { return /* binding */ CalcPericulosidadePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_periculosidade_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calc-periculosidade.page.html */ 78920);
/* harmony import */ var _calc_periculosidade_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-periculosidade.page.scss */ 71439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 88697);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);







let CalcPericulosidadePage = class CalcPericulosidadePage {
    constructor(formBuilder, toastController, pdfGenerator) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.pdfGenerator = pdfGenerator;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            grossSalary: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            dangerousnessValue: [""],
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
        this.form.reset();
        this.calculatedDangerousness = undefined;
        this.grossSalary = undefined;
    }
    showClearButton(e) {
        this.grossSalary = e;
        if (!e) {
            this.form.patchValue({
                dangerousnessValue: (this.form.value.inssValue = undefined),
            });
            this.calculatedDangerousness = undefined;
        }
    }
    calcDangerousness() {
        var _a, _b, _c;
        this.calculatedDangerousness = (this.form.value.grossSalary * 30) / 100;
        this.form.patchValue({
            dangerousnessValue: (_a = this.calculatedDangerousness) === null || _a === void 0 ? void 0 : _a.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            }),
        });
        this.grossSalaryFormatted = this.grossSalary.toLocaleString("pt-BR", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        });
        this.calculatedDangerousnessPdf =
            (_b = this.calculatedDangerousness) === null || _b === void 0 ? void 0 : _b.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            });
        this.total = (_c = (this.grossSalary + this.calculatedDangerousness)) === null || _c === void 0 ? void 0 : _c.toLocaleString("pt-BR", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        });
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
        this.calcDangerousness();
        this.form.markAsPristine();
    }
};
CalcPericulosidadePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator }
];
CalcPericulosidadePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-calc-periculosidade",
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_periculosidade_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calc_periculosidade_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalcPericulosidadePage);



/***/ }),

/***/ 78920:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/calc-periculosidade/calc-periculosidade.page.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-label>{{ 'Periculosidade' | uppercase}}</ion-label>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" class=\"paddin-input\">\n    <ion-item>\n      <ion-label position=\"stacked\">Salário bruto</ion-label>\n      <ion-input\n        placeholder=\"R$ 0.00\"\n        type=\"number\"\n        (ngModelChange)=\"showClearButton($event)\"\n        formControlName=\"grossSalary\"\n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label *ngIf=\"form.value.dangerousnessValue\">R$</ion-label>\n      <ion-input\n        disabled\n        placeholder=\"...\"\n        formControlName=\"dangerousnessValue\"\n      ></ion-input>\n    </ion-item>\n\n    <div class=\"align-button\">\n      <ion-button (click)=\"onSubmit(form)\">Calcular</ion-button>\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\"\n        >Limpar</ion-button\n      >\n      <ion-button\n        *ngIf=\"calculatedDangerousness\"\n        (click)=\"generatorPdf()\"\n        color=\"light\"\n        >Gerar PDF</ion-button\n      >\n    </div>\n  </form>\n</ion-content>\n<!--Gerar PDF-->\n<!--Preciso melhorar isso-->\n<div hidden id=\"remove\">\n  <div id=\"print\">\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px\">\n      ADICIONAL PERICULOSIDADE\n    </h1>\n    <br />\n    <div style=\"width: 100%\">\n      <div\n        style=\"\n          display: flex;\n          background-color: #dddddd;\n          justify-content: space-between;\n          height: 50px;\n        \"\n      >\n        <b style=\"font-size: 35px\">Salário bruto:</b>\n        <span style=\"font-size: 35px\">{{ 'R$ ' + grossSalaryFormatted }}</span>\n      </div>\n\n      <div style=\"display: flex; justify-content: space-between; height: 50px\">\n        <b style=\"font-size: 35px\">Adicional periculosidade:</b>\n        <span style=\"font-size: 35px\"\n          >{{ 'R$ ' + calculatedDangerousnessPdf }}</span\n        >\n      </div>\n\n      <div\n        style=\"\n          display: flex;\n          justify-content: space-between;\n          height: 50px;\n          background-color: #dddddd;\n        \"\n      >\n        <b style=\"font-size: 35px\">Total</b>\n        <span style=\"font-size: 35px\">{{ 'R$ ' + total }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 71439:
/*!*************************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade.page.scss ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.text-align {\n  padding-top: 12px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n.mr-6 {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtcGVyaWN1bG9zaWRhZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQU1FO0VBQ0UscUJBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBTEo7QUFRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVVBO0VBQ0UsaUJBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFQRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBUEY7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFQRjtBQVVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7QUFQRiIsImZpbGUiOiJjYWxjLXBlcmljdWxvc2lkYWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2FucztcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmdpbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLmFsaWduLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLnBhZGRpbi1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogOTBweDtcclxufVxyXG5cclxuLnRleHQtYWxpZ24ge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5tci02IHtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calc-periculosidade_calc-periculosidade_module_ts-es2015.js.map