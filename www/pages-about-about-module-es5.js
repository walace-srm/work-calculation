(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <ion-label>{{ 'Sobre' | uppercase}}</ion-label>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <div class=\"ion-padding\">\n        <ion-img [src]=\"'/assets/icon/logo.png'\"></ion-img>\n        <ion-label class=\"color\">Walace Rodrigues</ion-label><br>\n        <ion-label>walace_srm@hotmail.com</ion-label><br>\n        <a>https://github.com/walace-srm</a>\n      </div>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/about/about-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/about/about-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.page */
      "./src/app/pages/about/about.page.ts");

      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/about/about.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-routing.module */
      "./src/app/pages/about/about-routing.module.ts");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about.page */
      "./src/app/pages/about/about.page.ts");

      var AboutPageModule = function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      };

      AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
      })], AboutPageModule);
      /***/
    },

    /***/
    "./src/app/pages/about/about.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-card {\n  text-align: center;\n}\n.color {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0FBSko7QUFRQTtFQUNFLGlCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMGM5YWJlO1xuICB9XG5cbiAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY29sb3Ige1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/about/about.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/about/about.page.ts ***!
      \*******************************************/

    /*! exports provided: AboutPage */

    /***/
    function srcAppPagesAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AboutPage = /*#__PURE__*/function () {
        function AboutPage() {
          _classCallCheck(this, AboutPage);
        }

        _createClass(AboutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./about.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./about.page.scss */
        "./src/app/pages/about/about.page.scss"))["default"]]
      })], AboutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-about-about-module-es5.js.map