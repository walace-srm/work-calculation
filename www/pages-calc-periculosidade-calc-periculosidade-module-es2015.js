(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calc-periculosidade-calc-periculosidade-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-periculosidade/calc-periculosidade.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-periculosidade/calc-periculosidade.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-label>{{ 'Periculosidade' | uppercase}}</ion-label>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" class=\"paddin-input\">\n    <ion-item>\n      <ion-label position=\"stacked\">Salário bruto</ion-label>\n      <ion-input\n        placeholder=\"R$ 0.00\"\n        type=\"number\"\n        (ngModelChange)=\"showClearButton($event)\"\n        formControlName=\"grossSalary\"\n      ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label *ngIf=\"form.value.dangerousnessValue\">R$</ion-label>\n      <ion-input\n        disabled\n        placeholder=\"...\"\n        formControlName=\"dangerousnessValue\"\n      ></ion-input>\n    </ion-item>\n\n    <div class=\"align-button\">\n      <ion-button (click)=\"onSubmit(form)\">Calcular</ion-button>\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\"\n        >Limpar</ion-button\n      >\n      <ion-button\n        *ngIf=\"calculatedDangerousness\"\n        (click)=\"generatorPdf()\"\n        color=\"light\"\n        >Gerar PDF</ion-button\n      >\n    </div>\n  </form>\n</ion-content>\n<!--Gerar PDF-->\n<!--Preciso melhorar isso-->\n<div hidden id=\"remove\">\n  <div id=\"print\">\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px\">\n      ADICIONAL PERICULOSIDADE\n    </h1>\n    <br />\n    <div style=\"width: 100%\">\n      <div\n        style=\"\n          display: flex;\n          background-color: #dddddd;\n          justify-content: space-between;\n          height: 50px;\n        \"\n      >\n        <b style=\"font-size: 35px\">Salário bruto:</b>\n        <span style=\"font-size: 35px\">{{ 'R$ ' + grossSalaryFormatted }}</span>\n      </div>\n\n      <div style=\"display: flex; justify-content: space-between; height: 50px\">\n        <b style=\"font-size: 35px\">Adicional periculosidade:</b>\n        <span style=\"font-size: 35px\"\n          >{{ 'R$ ' + calculatedDangerousnessPdf }}</span\n        >\n      </div>\n\n      <div\n        style=\"\n          display: flex;\n          justify-content: space-between;\n          height: 50px;\n          background-color: #dddddd;\n        \"\n      >\n        <b style=\"font-size: 35px\">Total</b>\n        <span style=\"font-size: 35px\">{{ 'R$ ' + total }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/calc-periculosidade/calc-periculosidade-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CalcPericulosidadePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcPericulosidadePageRoutingModule", function() { return CalcPericulosidadePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calc-periculosidade.page */ "./src/app/pages/calc-periculosidade/calc-periculosidade.page.ts");




const routes = [
    {
        path: '',
        component: _calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_3__["CalcPericulosidadePage"]
    }
];
let CalcPericulosidadePageRoutingModule = class CalcPericulosidadePageRoutingModule {
};
CalcPericulosidadePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalcPericulosidadePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calc-periculosidade/calc-periculosidade.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade.module.ts ***!
  \*************************************************************************/
/*! exports provided: CalcPericulosidadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcPericulosidadePageModule", function() { return CalcPericulosidadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calc_periculosidade_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calc-periculosidade-routing.module */ "./src/app/pages/calc-periculosidade/calc-periculosidade-routing.module.ts");
/* harmony import */ var _calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc-periculosidade.page */ "./src/app/pages/calc-periculosidade/calc-periculosidade.page.ts");







let CalcPericulosidadePageModule = class CalcPericulosidadePageModule {
};
CalcPericulosidadePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _calc_periculosidade_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalcPericulosidadePageRoutingModule"],
        ],
        declarations: [_calc_periculosidade_page__WEBPACK_IMPORTED_MODULE_6__["CalcPericulosidadePage"]],
    })
], CalcPericulosidadePageModule);



/***/ }),

/***/ "./src/app/pages/calc-periculosidade/calc-periculosidade.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.text-align {\n  padding-top: 12px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n.mr-6 {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsYy1wZXJpY3Vsb3NpZGFkZS9jYWxjLXBlcmljdWxvc2lkYWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFLRTtFQUNFLG1CQUFBO0FBSEo7QUFNRTtFQUNFLHFCQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUxKO0FBUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFVQTtFQUNFLGlCQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBUEY7QUFVQTtFQUNFLGlCQUFBO0FBUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxjLXBlcmljdWxvc2lkYWRlL2NhbGMtcGVyaWN1bG9zaWRhZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlY2VlZWU7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxuICB9XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFyZ2luLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uYWxpZ24tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucGFkZGluLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA5MHB4O1xyXG59XHJcblxyXG4udGV4dC1hbGlnbiB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLm1yLTYge1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/calc-periculosidade/calc-periculosidade.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/calc-periculosidade/calc-periculosidade.page.ts ***!
  \***********************************************************************/
/*! exports provided: CalcPericulosidadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcPericulosidadePage", function() { return CalcPericulosidadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ "./node_modules/@ionic-native/pdf-generator/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let CalcPericulosidadePage = class CalcPericulosidadePage {
    constructor(formBuilder, toastController, pdfGenerator) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.pdfGenerator = pdfGenerator;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            grossSalary: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dangerousnessValue: [""],
        });
    }
    reportSalaryToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        this.calculatedDangerousnessPdf = (_b = this.calculatedDangerousness) === null || _b === void 0 ? void 0 : _b.toLocaleString("pt-BR", {
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_3__["PDFGenerator"] }
];
CalcPericulosidadePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-calc-periculosidade",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calc-periculosidade.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calc-periculosidade/calc-periculosidade.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calc-periculosidade.page.scss */ "./src/app/pages/calc-periculosidade/calc-periculosidade.page.scss")).default]
    })
], CalcPericulosidadePage);



/***/ })

}]);
//# sourceMappingURL=pages-calc-periculosidade-calc-periculosidade-module-es2015.js.map