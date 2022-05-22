(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-release-notes-release-notes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/release-notes/release-notes.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/release-notes/release-notes.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title\">\r\n        <ion-label>{{ 'Notas da Versão' | uppercase}}</ion-label>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.0.0</ion-label>\r\n      <ul>\r\n        <li>Tabela INSS 2021</li>\r\n        <li>Tabela IRRF 2021</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.1.0</ion-label>\r\n      <ul>\r\n        <li>Gerar PDF</li>\r\n        <li>Limpar formulário</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.2.0</ion-label>\r\n      <ul>\r\n        <li>Cálculo de Dissídio</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.3.0</ion-label>\r\n      <ul>\r\n        <li>Cálculo do 13º salário</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.4.0</ion-label>\r\n      <ul>\r\n        <li>Cálculo de adicional de periculosidade</li>\r\n        <li>Tabela, dicas e cálculos</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.5.0</ion-label>\r\n      <ul>\r\n        <li>Atualização tabela INSS 2022</li>\r\n        <li>Atualização tabela IRRF 2022</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/release-notes/release-notes-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReleaseNotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseNotesPageRoutingModule", function() { return ReleaseNotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _release_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./release-notes.page */ "./src/app/pages/release-notes/release-notes.page.ts");




const routes = [
    {
        path: '',
        component: _release_notes_page__WEBPACK_IMPORTED_MODULE_3__["ReleaseNotesPage"]
    }
];
let ReleaseNotesPageRoutingModule = class ReleaseNotesPageRoutingModule {
};
ReleaseNotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReleaseNotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/release-notes/release-notes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes.module.ts ***!
  \*************************************************************/
/*! exports provided: ReleaseNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseNotesPageModule", function() { return ReleaseNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _release_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./release-notes-routing.module */ "./src/app/pages/release-notes/release-notes-routing.module.ts");
/* harmony import */ var _release_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./release-notes.page */ "./src/app/pages/release-notes/release-notes.page.ts");







let ReleaseNotesPageModule = class ReleaseNotesPageModule {
};
ReleaseNotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _release_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReleaseNotesPageRoutingModule"]
        ],
        declarations: [_release_notes_page__WEBPACK_IMPORTED_MODULE_6__["ReleaseNotesPage"]]
    })
], ReleaseNotesPageModule);



/***/ }),

/***/ "./src/app/pages/release-notes/release-notes.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-top: 16px;\n}\n::ng-deep .display {\n  display: initial;\n  padding: 7px;\n}\nli {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsZWFzZS1ub3Rlcy9yZWxlYXNlLW5vdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtBQUhKO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0UsZUFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVsZWFzZS1ub3Rlcy9yZWxlYXNlLW5vdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuICAuZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gIH1cclxufVxyXG5saSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/release-notes/release-notes.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes.page.ts ***!
  \***********************************************************/
/*! exports provided: ReleaseNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseNotesPage", function() { return ReleaseNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ReleaseNotesPage = class ReleaseNotesPage {
    constructor() { }
    ngOnInit() {
    }
};
ReleaseNotesPage.ctorParameters = () => [];
ReleaseNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-release-notes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./release-notes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/release-notes/release-notes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./release-notes.page.scss */ "./src/app/pages/release-notes/release-notes.page.scss")).default]
    })
], ReleaseNotesPage);



/***/ })

}]);
//# sourceMappingURL=pages-release-notes-release-notes-module-es2015.js.map