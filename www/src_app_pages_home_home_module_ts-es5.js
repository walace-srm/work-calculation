(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_home_home_module_ts"], {
    /***/
    96610:
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      10678);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = /*#__PURE__*/_createClass(function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      });

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    57994:
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      96610);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      10678);

      var _HomePageModule = /*#__PURE__*/_createClass(function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      });

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    10678:
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */
      99090);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      26613);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(router) {
          _classCallCheck(this, HomePage);

          this.router = router;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "routerInss",
          value: function routerInss() {
            this.router.navigate(["/calc-inss"]);
          }
        }, {
          key: "routerIrrf",
          value: function routerIrrf() {
            this.router.navigate(["/calc-irrf"]);
          }
        }, {
          key: "routerDissidio",
          value: function routerDissidio() {
            this.router.navigate(["/calc-dissidio"]);
          }
        }, {
          key: "routerDecimoTerceiro",
          value: function routerDecimoTerceiro() {
            this.router.navigate(["/calc-decimo-terceiro"]);
          }
        }, {
          key: "routerPericulosidade",
          value: function routerPericulosidade() {
            this.router.navigate(["/calc-periculosidade"]);
          }
        }, {
          key: "routerDicas",
          value: function routerDicas() {
            this.router.navigate(["/dicas"]);
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-home",
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomePage);
      /***/
    },

    /***/
    99090:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-label>{{ 'Cálculos Trabalhistas' | uppercase }}</ion-label>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"content-align\" style=\"justify-content: space-between\">\r\n    <div class=\"row\">\r\n      <ion-card (click)=\"routerInss()\">\r\n        <ion-card-header>\r\n          <ion-img [src]=\"'/assets/icon/inss.png'\"></ion-img>\r\n          <ion-card-subtitle>Cálculo do INSS Descontado</ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <ion-card (click)=\"routerIrrf()\">\r\n        <ion-card-header>\r\n          <ion-img [src]=\"'/assets/icon/irrf.png'\"></ion-img>\r\n          <ion-card-subtitle>Cálculo do IR Retido na Fonte</ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"justify-content: space-between\">\r\n      <ion-card (click)=\"routerDissidio()\">\r\n        <ion-card-header>\r\n          <ion-img [src]=\"'/assets/icon/dissidio.png'\"></ion-img>\r\n          <ion-card-subtitle>Cálculo do Dissídio</ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <ion-card (click)=\"routerDecimoTerceiro()\">\r\n        <ion-card-header>\r\n          <ion-img [src]=\"'/assets/icon/decimo-terceiro.png'\"></ion-img>\r\n          <ion-card-subtitle>Cálculo 13º salário</ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"justify-content: space-between\">\r\n      <ion-card (click)=\"routerPericulosidade()\">\r\n        <ion-card-header>\r\n          <ion-img [src]=\"'/assets/icon/periculosidade.jpg'\"></ion-img>\r\n          <ion-card-subtitle>Adicional de periculosidade</ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <ion-card (click)=\"routerDicas()\">\r\n        <ion-card-header>\r\n          <ion-img [src]=\"'/assets/icon/dicas.jpg'\"></ion-img>\r\n          <ion-card-subtitle>Tabela, dicas e cálculos</ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    26613:
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /***/
    function _(module) {
      module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-menu {\n  --width: 50%;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-menu-button {\n  --color: #fff;\n}\n.content-align {\n  position: relative;\n  top: 30px;\n}\n.row {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBTEY7QUFRQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBTEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2VjZWVlZTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51IHtcclxuICAgIC0td2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICB9XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWFsaWduIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_home_module_ts-es5.js.map