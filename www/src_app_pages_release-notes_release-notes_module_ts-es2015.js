"use strict";
(self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_release-notes_release-notes_module_ts"],{

/***/ 35974:
/*!*********************************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReleaseNotesPageRoutingModule": function() { return /* binding */ ReleaseNotesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _release_notes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./release-notes.page */ 11375);




const routes = [
    {
        path: '',
        component: _release_notes_page__WEBPACK_IMPORTED_MODULE_0__.ReleaseNotesPage
    }
];
let ReleaseNotesPageRoutingModule = class ReleaseNotesPageRoutingModule {
};
ReleaseNotesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReleaseNotesPageRoutingModule);



/***/ }),

/***/ 63429:
/*!*************************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReleaseNotesPageModule": function() { return /* binding */ ReleaseNotesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _release_notes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./release-notes-routing.module */ 35974);
/* harmony import */ var _release_notes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./release-notes.page */ 11375);







let ReleaseNotesPageModule = class ReleaseNotesPageModule {
};
ReleaseNotesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _release_notes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReleaseNotesPageRoutingModule
        ],
        declarations: [_release_notes_page__WEBPACK_IMPORTED_MODULE_1__.ReleaseNotesPage]
    })
], ReleaseNotesPageModule);



/***/ }),

/***/ 11375:
/*!***********************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReleaseNotesPage": function() { return /* binding */ ReleaseNotesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_release_notes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./release-notes.page.html */ 33008);
/* harmony import */ var _release_notes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./release-notes.page.scss */ 53365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let ReleaseNotesPage = class ReleaseNotesPage {
    constructor() { }
    ngOnInit() {
    }
};
ReleaseNotesPage.ctorParameters = () => [];
ReleaseNotesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-release-notes',
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_release_notes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_release_notes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReleaseNotesPage);



/***/ }),

/***/ 33008:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/release-notes/release-notes.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title\">\r\n        <ion-label>{{ 'Notas da Versão' | uppercase}}</ion-label>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.0.0</ion-label>\r\n      <ul>\r\n        <li>Tabela INSS 2021</li>\r\n        <li>Tabela IRRF 2021</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.1.0</ion-label>\r\n      <ul>\r\n        <li>Gerar PDF</li>\r\n        <li>Limpar formulário</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.2.0</ion-label>\r\n      <ul>\r\n        <li>Cálculo de Dissídio</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.3.0</ion-label>\r\n      <ul>\r\n        <li>Cálculo do 13º salário</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.4.0</ion-label>\r\n      <ul>\r\n        <li>Cálculo de adicional de periculosidade</li>\r\n        <li>Tabela, dicas e cálculos</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <div class=\"display\">\r\n      <ion-label>Novidades da versão 1.5.0</ion-label>\r\n      <ul>\r\n        <li>Atualização tabela INSS 2022</li>\r\n        <li>Atualização tabela IRRF 2022</li>\r\n      </ul>\r\n    </div>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ 53365:
/*!*************************************************************!*\
  !*** ./src/app/pages/release-notes/release-notes.page.scss ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-top: 16px;\n}\n::ng-deep .display {\n  display: inline;\n  display: initial;\n  padding: 7px;\n}\nli {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2Utbm90ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEo7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFLRTtFQUNFLGVBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0UsZUFBQTtBQUhGIiwiZmlsZSI6InJlbGVhc2Utbm90ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlY2VlZWU7XHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG4gIC5kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgfVxyXG59XHJcbmxpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_release-notes_release-notes_module_ts-es2015.js.map