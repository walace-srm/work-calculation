(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-release-notes-release-notes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/release-notes/release-notes.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/release-notes/release-notes.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesReleaseNotesReleaseNotesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"title\">\n        <ion-label>{{ 'Notas da Versão' | uppercase}}</ion-label>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n      <div class=\"display\">\n        <ion-label>Novidades da versão 1.0.0</ion-label>\n        <ul>\n          <li>Tabela INSS 2021</li>\n          <li>Tabela IRRF 2021</li>\n        </ul>\n      </div>\n    </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/release-notes/release-notes-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/release-notes/release-notes-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ReleaseNotesPageRoutingModule */

    /***/
    function srcAppPagesReleaseNotesReleaseNotesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReleaseNotesPageRoutingModule", function () {
        return ReleaseNotesPageRoutingModule;
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


      var _release_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./release-notes.page */
      "./src/app/pages/release-notes/release-notes.page.ts");

      var routes = [{
        path: '',
        component: _release_notes_page__WEBPACK_IMPORTED_MODULE_3__["ReleaseNotesPage"]
      }];

      var ReleaseNotesPageRoutingModule = function ReleaseNotesPageRoutingModule() {
        _classCallCheck(this, ReleaseNotesPageRoutingModule);
      };

      ReleaseNotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReleaseNotesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/release-notes/release-notes.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/release-notes/release-notes.module.ts ***!
      \*************************************************************/

    /*! exports provided: ReleaseNotesPageModule */

    /***/
    function srcAppPagesReleaseNotesReleaseNotesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReleaseNotesPageModule", function () {
        return ReleaseNotesPageModule;
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


      var _release_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./release-notes-routing.module */
      "./src/app/pages/release-notes/release-notes-routing.module.ts");
      /* harmony import */


      var _release_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./release-notes.page */
      "./src/app/pages/release-notes/release-notes.page.ts");

      var ReleaseNotesPageModule = function ReleaseNotesPageModule() {
        _classCallCheck(this, ReleaseNotesPageModule);
      };

      ReleaseNotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _release_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReleaseNotesPageRoutingModule"]],
        declarations: [_release_notes_page__WEBPACK_IMPORTED_MODULE_6__["ReleaseNotesPage"]]
      })], ReleaseNotesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/release-notes/release-notes.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/release-notes/release-notes.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesReleaseNotesReleaseNotesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-top: 16px;\n}\n::ng-deep .display {\n  display: initial;\n  padding: 7px;\n}\nli {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsZWFzZS1ub3Rlcy9yZWxlYXNlLW5vdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtBQUhKO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0UsZUFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVsZWFzZS1ub3Rlcy9yZWxlYXNlLW5vdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNlY2VlZWU7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XG4gIH1cblxuICBpb24tYmFjay1idXR0b24ge1xuICAgIC0tY29sb3I6ICNmZmY7XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgcGFkZGluZzogN3B4O1xuICB9XG59XG5saSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/release-notes/release-notes.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/release-notes/release-notes.page.ts ***!
      \***********************************************************/

    /*! exports provided: ReleaseNotesPage */

    /***/
    function srcAppPagesReleaseNotesReleaseNotesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReleaseNotesPage", function () {
        return ReleaseNotesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReleaseNotesPage = /*#__PURE__*/function () {
        function ReleaseNotesPage() {
          _classCallCheck(this, ReleaseNotesPage);
        }

        _createClass(ReleaseNotesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReleaseNotesPage;
      }();

      ReleaseNotesPage.ctorParameters = function () {
        return [];
      };

      ReleaseNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-release-notes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./release-notes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/release-notes/release-notes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./release-notes.page.scss */
        "./src/app/pages/release-notes/release-notes.page.scss"))["default"]]
      })], ReleaseNotesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-release-notes-release-notes-module-es5.js.map