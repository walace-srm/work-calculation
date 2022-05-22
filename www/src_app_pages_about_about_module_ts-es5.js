(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_about_about_module_ts"], {
    /***/
    93423:
    /*!*****************************************************!*\
      !*** ./src/app/pages/about/about-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutPageRoutingModule": function AboutPageRoutingModule() {
          return (
            /* binding */
            _AboutPageRoutingModule
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


      var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about.page */
      388);

      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
      }];

      var _AboutPageRoutingModule = /*#__PURE__*/_createClass(function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      });

      _AboutPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AboutPageRoutingModule);
      /***/
    },

    /***/
    18114:
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutPageModule": function AboutPageModule() {
          return (
            /* binding */
            _AboutPageModule
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


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about-routing.module */
      93423);
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about.page */
      388);

      var _AboutPageModule = /*#__PURE__*/_createClass(function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      });

      _AboutPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
      })], _AboutPageModule);
      /***/
    },

    /***/
    388:
    /*!*******************************************!*\
      !*** ./src/app/pages/about/about.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutPage": function AboutPage() {
          return (
            /* binding */
            _AboutPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.page.html */
      42221);
      /* harmony import */


      var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about.page.scss */
      81075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AboutPage = /*#__PURE__*/function () {
        function AboutPage() {
          _classCallCheck(this, AboutPage);
        }

        _createClass(AboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutPage;
      }();

      _AboutPage.ctorParameters = function () {
        return [];
      };

      _AboutPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AboutPage);
      /***/
    },

    /***/
    42221:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/about/about.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title\">\r\n        <ion-label>{{ 'Sobre' | uppercase}}</ion-label>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <div class=\"ion-padding\">\r\n      <ion-img [src]=\"'/assets/icon/logo.png'\"></ion-img>\r\n      <ion-label class=\"color\">Walace Rodrigues</ion-label><br />\r\n      <p>Dicas, elogios e sugestões:</p>\r\n      <a>walace_srm@hotmail.com</a><br />\r\n      <!-- <a>https://github.com/walace-srm</a> -->\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    81075:
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.page.scss ***!
      \*********************************************/

    /***/
    function _(module) {
      module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-card {\n  text-align: center;\n}\n.color {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtBQUpKO0FBUUE7RUFDRSxpQkFBQTtBQUxGIiwiZmlsZSI6ImFib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBjOWFiZTtcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_about_about_module_ts-es5.js.map