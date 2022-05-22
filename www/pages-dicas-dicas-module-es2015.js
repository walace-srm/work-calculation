(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dicas-dicas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dicas/dicas.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dicas/dicas.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <ion-label>{{ 'Tabelas e Dicas' | uppercase}}</ion-label>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"salary-item\">\n    <b>1 - Histórico do Salário Mínimo</b>\n    <div class=\"d-flex\">\n      <div class=\"left\">\n        <p class=\"p\">{{'Ano de Vigência'}}</p>\n        <hr />\n        <p>{{'Ano 2022'}}</p>\n        <p>{{'Ano 2021'}}</p>\n        <p>{{'Ano 2020'}}</p>\n        <p>{{'Ano 2019'}}</p>\n        <p>{{'Ano 2018'}}</p>\n        <p>{{'Ano 2017'}}</p>\n        <p>{{'Ano 2016'}}</p>\n        <p>{{'Ano 2015'}}</p>\n      </div>\n      <div class=\"right\">\n        <p class=\"p\">{{'Valor Mensal'}}</p>\n        <hr />\n        <p>{{'R$ 1.212,00'}}</p>\n        <p>{{'R$ 1.100,00'}}</p>\n        <p>{{'R$ 1.045,00'}}</p>\n        <p>{{'R$ 998,00'}}</p>\n        <p>{{'R$ 954,00'}}</p>\n        <p>{{'R$ 937,00'}}</p>\n        <p>{{'R$ 880,00'}}</p>\n        <p>{{'R$ 788,00'}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"salary-item\">\n    <b>2 - Tabela do INSS até JANEIRO/2021</b>\n    <div class=\"d-flex\">\n      <div class=\"inss-left\">\n        <p class=\"p\">{{'Faixa de Salário'}}</p>\n        <hr />\n        <p>{{'Até R$ 1.100 (salário mínimo)'}}</p>\n        <p>{{'De R$ 1.100,01 até R$ 2.203,48'}}</p>\n        <p>{{'De R$ 2.203,49 até R$ 3.305,22'}}</p>\n        <p>{{'De R$ 3.305,23 até R$ 6.433,57'}}</p>\n      </div>\n      <div class=\"inss-right\">\n        <p class=\"p\">{{'Desconto'}}</p>\n        <hr />\n        <p>{{'7,5%'}}</p>\n        <p>{{'9%'}}</p>\n        <p>{{'12%'}}</p>\n        <p>{{'14%'}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"salary-item\">\n    <b>3 - Tabela IRRF 2021</b>\n    <div class=\"d-flex\">\n      <div class=\"irrf-left\">\n        <p class=\"p\">{{'Base Cálculo'}}</p>\n        <hr />\n        <p>{{'Até R$ 1,903,98'}}</p>\n        <p>{{'De 1.903,99 até 2.826,65'}}</p>\n        <p>{{'De 2.826,66 até 3.751,05'}}</p>\n        <p>{{'De 3.751,06 até 4.664,68'}}</p>\n        <p>{{'Acima de 4.664,68'}}</p>\n      </div>\n      <div class=\"irrf-center\">\n        <p class=\"p\">{{'Alíquota'}}</p>\n        <hr />\n        <p>{{'0%'}}</p>\n        <p>{{'7,5%'}}</p>\n        <p>{{'15%'}}</p>\n        <p>{{'22%'}}</p>\n        <p>{{'27%'}}</p>\n      </div>\n      <div class=\"irrf-right\">\n        <p class=\"p\">{{'Dedução'}}</p>\n        <hr />\n        <p>{{'-'}}</p>\n        <p>{{'142,80'}}</p>\n        <p>{{'354,80'}}</p>\n        <p>{{'636,13'}}</p>\n        <p>{{'869,36'}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"salary-item\">\n    <b>4 - Adicional Periculosidade</b>\n    <div class=\"d-flex-danger\">\n      <div class=\"dangerousness\">\n        <p>{{'Atividade perigosa que implique o contato permanente com:'}}</p>\n        <ul>\n          <li>Inflamáveis ou explosivos, condições de risco acentuado.</li>\n          <li>Energia elétrica.</li>\n          <li>Substâncias radioativas, ou radiação ionizante.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"salary-item\">\n    <b>5 - Adicional Insalubridade</b>\n    <div class=\"d-flex-danger\">\n      <div class=\"dangerousness\">\n        <p>\n          {{'Adicional de insalubridade - exposição de agentes nocivos, com\n          potencial para prejudicar a sua saúde de alguma forma.'}}\n        </p>\n        <p>{{'Como calcular insalubridade?'}}</p>\n        <span\n          >{{'Insalubridade: (SalárioMínimoVigente X 10 para o grau mínimo, X 20\n          para o grau médio ou X 40 para o grau máximo)/100'}}</span\n        >\n      </div>\n    </div>\n  </div>\n\n  <div class=\"salary-item-final\">\n    <b>6 - Adicional Noturno</b>\n    <div class=\"d-flex-danger\">\n      <div class=\"dangerousness\">\n        <p>{{'A todos maiores de 18 anos que:'}}</p>\n        <ul>\n          <li>\n            Trabalham em atividades urbanas (entre 22h de um dia e 5h do dia\n            seguinte).\n          </li>\n          <li>\n            Trabalham em atividades rurais (entre 21h de um dia até 5h do dia\n            seguinte).\n          </li>\n          <li>\n            Trabalham na pecuária (entre 20h de um dia até 4h do dia seguinte).\n          </li>\n        </ul>\n        <b>- {{'Importante: '}}</b>\n        <span\n          >{{'Cada 52:30 (no relógio) efetivamente trabalhadas equivalem a 1h\n          noturna trabalhada. Ao trabalhar 7h, o empregado noturno fecha um dia\n          de 8h. Excessão ao trabalhador rural que deverá contabilizar 60\n          minutos normais.'}}</span\n        >\n      </div>\n    </div>\n  </div>\n  <p class=\"pl-12\">{{'Obs: Este tópico tem objetivo educativo.'}}</p>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/dicas/dicas-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dicas/dicas-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DicasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicasPageRoutingModule", function() { return DicasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dicas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dicas.page */ "./src/app/pages/dicas/dicas.page.ts");




const routes = [
    {
        path: '',
        component: _dicas_page__WEBPACK_IMPORTED_MODULE_3__["DicasPage"]
    }
];
let DicasPageRoutingModule = class DicasPageRoutingModule {
};
DicasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DicasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dicas/dicas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/dicas/dicas.module.ts ***!
  \*********************************************/
/*! exports provided: DicasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicasPageModule", function() { return DicasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dicas-routing.module */ "./src/app/pages/dicas/dicas-routing.module.ts");
/* harmony import */ var _dicas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dicas.page */ "./src/app/pages/dicas/dicas.page.ts");







let DicasPageModule = class DicasPageModule {
};
DicasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dicas_routing_module__WEBPACK_IMPORTED_MODULE_5__["DicasPageRoutingModule"]
        ],
        declarations: [_dicas_page__WEBPACK_IMPORTED_MODULE_6__["DicasPage"]]
    })
], DicasPageModule);



/***/ }),

/***/ "./src/app/pages/dicas/dicas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/dicas/dicas.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-top: 16px;\n}\n::ng-deep .display {\n  display: initial;\n  padding: 7px;\n}\nli {\n  font-size: 15px;\n}\n.salary-item {\n  background: white;\n  padding: 19px;\n  margin-top: 17px;\n}\n.salary-item-final {\n  background: white;\n  padding: 19px;\n  margin-top: 17px;\n}\n.d-flex {\n  display: flex;\n  width: 100%;\n  padding-top: 9px;\n  text-align: center;\n}\n.d-flex-danger {\n  display: flex;\n  width: 100%;\n  padding-top: 9px;\n}\n.left {\n  width: 50%;\n}\n.right {\n  width: 50%;\n}\n.inss-left {\n  width: 75%;\n}\n.inss-right {\n  width: 25%;\n}\n.irrf-left {\n  width: 60%;\n}\n.irrf-center {\n  width: 20%;\n}\n.irff-right {\n  width: 20%;\n}\n.dangerousness {\n  width: 100%;\n}\nhr {\n  background: black;\n}\n.pl-12 {\n  padding-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGljYXMvZGljYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEo7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUFDRSxlQUFBO0FBSEY7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLFVBQUE7QUFIRjtBQU1BO0VBQ0UsVUFBQTtBQUhGO0FBTUE7RUFDRSxVQUFBO0FBSEY7QUFNQTtFQUNFLFVBQUE7QUFIRjtBQU1BO0VBQ0UsVUFBQTtBQUhGO0FBTUE7RUFDRSxVQUFBO0FBSEY7QUFNQTtFQUNFLFVBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtBQUhGO0FBTUE7RUFDRSxpQkFBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGljYXMvZGljYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlY2VlZWU7XHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG4gIC5kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgfVxyXG59XHJcbmxpIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5zYWxhcnktaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTlweDtcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG59XHJcblxyXG4uc2FsYXJ5LWl0ZW0tZmluYWwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE5cHg7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmQtZmxleC1kYW5nZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDlweDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmluc3MtbGVmdCB7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLmluc3MtcmlnaHQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5pcnJmLWxlZnQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5pcnJmLWNlbnRlciB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmlyZmYtcmlnaHQge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5kYW5nZXJvdXNuZXNzIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4ucGwtMTIge1xyXG4gIHBhZGRpbmctbGVmdDogMTJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/dicas/dicas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/dicas/dicas.page.ts ***!
  \*******************************************/
/*! exports provided: DicasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicasPage", function() { return DicasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DicasPage = class DicasPage {
    constructor() { }
    ngOnInit() {
    }
};
DicasPage.ctorParameters = () => [];
DicasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dicas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dicas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dicas/dicas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dicas.page.scss */ "./src/app/pages/dicas/dicas.page.scss")).default]
    })
], DicasPage);



/***/ })

}]);
//# sourceMappingURL=pages-dicas-dicas-module-es2015.js.map