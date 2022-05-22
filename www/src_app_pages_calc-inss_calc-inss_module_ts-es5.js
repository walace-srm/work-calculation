(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_calc-inss_calc-inss_module_ts"], {
    /***/
    83386:
    /*!*************************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalcInssPageRoutingModule": function CalcInssPageRoutingModule() {
          return (
            /* binding */
            _CalcInssPageRoutingModule
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


      var _calc_inss_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calc-inss.page */
      89354);

      var routes = [{
        path: '',
        component: _calc_inss_page__WEBPACK_IMPORTED_MODULE_0__.CalcInssPage
      }];

      var _CalcInssPageRoutingModule = /*#__PURE__*/_createClass(function CalcInssPageRoutingModule() {
        _classCallCheck(this, CalcInssPageRoutingModule);
      });

      _CalcInssPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CalcInssPageRoutingModule);
      /***/
    },

    /***/
    74304:
    /*!*****************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalcInssPageModule": function CalcInssPageModule() {
          return (
            /* binding */
            _CalcInssPageModule
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


      var _calc_inss_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calc-inss-routing.module */
      83386);
      /* harmony import */


      var _calc_inss_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calc-inss.page */
      89354);

      var _CalcInssPageModule = /*#__PURE__*/_createClass(function CalcInssPageModule() {
        _classCallCheck(this, CalcInssPageModule);
      });

      _CalcInssPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _calc_inss_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcInssPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_calc_inss_page__WEBPACK_IMPORTED_MODULE_1__.CalcInssPage]
      })], _CalcInssPageModule);
      /***/
    },

    /***/
    89354:
    /*!***************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalcInssPage": function CalcInssPage() {
          return (
            /* binding */
            _CalcInssPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_inss_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calc-inss.page.html */
      40493);
      /* harmony import */


      var _calc_inss_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calc-inss.page.scss */
      83322);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      88697);

      var _CalcInssPage = /*#__PURE__*/function () {
        function CalcInssPage(formBuilder, toastController, pdfGenerator) {
          _classCallCheck(this, CalcInssPage);

          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.pdfGenerator = pdfGenerator;
          this.inssForm = this.formBuilder.group({
            grossSalary: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            inssValue: [""]
          });
        }

        _createClass(CalcInssPage, [{
          key: "calcInss",
          value: function calcInss() {
            var _a, _b;

            if (this.grossSalary < 1212) {
              this.lowerSalaryToast();
              this.calculatedInss = undefined;
            }

            if (this.grossSalary === 1212) {
              this.inssValue = 90.9;
              this.calculatedInss = 90.9;
              this.aliquota = 7.5;
            } else if (this.grossSalary > 1212 && this.grossSalary < 2427.35) {
              this.inssValue = 109.38;
              this.calculatedInss = this.grossSalary * 9 / 100 - 18.18;
              this.aliquota = 9;
            } else if (this.grossSalary > 2427.36 && this.grossSalary < 3641.03) {
              this.inssValue = 145.64;
              this.calculatedInss = this.grossSalary * 12 / 100 - 91;
              this.aliquota = 12;
            } else if (this.grossSalary > 3641.04 && this.grossSalary < 7087.22) {
              this.inssValue = 482.47;
              this.calculatedInss = this.grossSalary * 14 / 100 - 163.82;
              this.aliquota = 14;
            } else if (this.grossSalary > 7087.22) {
              this.inssValue = 482.47;
              this.calculatedInss = 7087.22 * 14 / 100 - 163.82;
              this.aliquota = "Teto";
            }

            this.inssForm.patchValue({
              inssValue: (_a = this.calculatedInss) === null || _a === void 0 ? void 0 : _a.toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              })
            });
            this.calculatedInssPdf = (_b = this.calculatedInss) === null || _b === void 0 ? void 0 : _b.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.grossSalaryFormatted = this.grossSalary.toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
          }
        }, {
          key: "lowerSalaryToast",
          value: function lowerSalaryToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: "Valor inferior ao salário mínimo (R$1.212)",
                        duration: 3000,
                        color: "medium"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "reportSalaryToast",
          value: function reportSalaryToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: "Insira o valor do salário!",
                        duration: 3000,
                        color: "medium"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.inssForm.reset();
            this.calculatedInss = undefined;
            this.grossSalary = undefined;
          }
        }, {
          key: "showClearButton",
          value: function showClearButton(e) {
            this.grossSalary = e;

            if (!e) {
              this.inssForm.patchValue({
                inssValue: this.inssForm.value.inssValue = undefined
              });
              this.calculatedInss = undefined;
            }
          }
        }, {
          key: "generatorPdf",
          value: function generatorPdf() {
            var hidden = document.getElementById("remove");
            hidden.removeAttribute("hidden");
            hidden.setAttribute("hidden", "");
            var a = document.getElementById("print");
            this.pdfGenerator.fromData(a.innerHTML, {
              type: "share"
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(_ref) {
            var value = _ref.value,
                valid = _ref.valid;

            if (!valid) {
              return this.reportSalaryToast();
            }

            this.grossSalary = value.grossSalary;
            this.calcInss();
            this.inssForm.markAsPristine();
          }
        }]);

        return CalcInssPage;
      }();

      _CalcInssPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator
        }];
      };

      _CalcInssPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-calc-inss",
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_inss_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_calc_inss_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CalcInssPage);
      /***/
    },

    /***/
    40493:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/calc-inss/calc-inss.page.html ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-label>{{ 'Calcular Inss' | uppercase}}</ion-label>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"inssForm\" class=\"paddin-input\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Salário bruto</ion-label>\r\n        <ion-input\r\n          placeholder=\"R$ 0.00\"\r\n          type=\"number\"\r\n          (ngModelChange)=\"showClearButton($event)\"\r\n          formControlName=\"grossSalary\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label *ngIf=\"inssForm.value.inssValue\">R$</ion-label>\r\n        <ion-input\r\n          disabled\r\n          placeholder=\"...\"\r\n          formControlName=\"inssValue\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <div class=\"align-items\">\r\n        <span *ngIf=\"aliquota && inssForm.value.inssValue\" class=\"mr-6\">{{'Alíquota:'}}</span>\r\n        <ion-badge color=\"medium\" *ngIf=\"aliquota && inssForm.value.inssValue\">\r\n          {{ aliquota }}{{'%'}}\r\n        </ion-badge>\r\n      </div>\r\n    <div class=\"align-button\">\r\n      <ion-button (click)=\"onSubmit(inssForm)\">Calcular</ion-button>\r\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\r\n      <ion-button *ngIf=\"calculatedInss\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<!--Gerar PDF-->\r\n<!--Preciso melhorar isso-->\r\n<div hidden id=\"remove\">\r\n  <div id=\"print\">\r\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO INSS</h1><br>\r\n        <div style=\"width: 100%\">\r\n          <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n            <b style=\"font-size: 35px\">Salário bruto:</b>\r\n            <span style=\"font-size: 35px;\">{{ 'R$ ' + grossSalaryFormatted }}</span>\r\n          </div>\r\n\r\n          <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n            <b style=\"font-size: 35px;\">Desconto:</b>\r\n            <span style=\"font-size: 35px;\">{{ 'R$ ' + calculatedInssPdf }}</span>\r\n          </div>\r\n\r\n          <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n            <b style=\"font-size: 35px;\">Alíquota:</b>\r\n            <span style=\"font-size: 35px;\">{{ aliquota + '%' }}</span>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    83322:
    /*!*****************************************************!*\
      !*** ./src/app/pages/calc-inss/calc-inss.page.scss ***!
      \*****************************************************/

    /***/
    function _(module) {
      module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.text-align {\n  padding-top: 12px;\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  cursor: pointer;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n.mr-6 {\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtaW5zcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxxQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBVUE7RUFDRSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtBQVBGIiwiZmlsZSI6ImNhbGMtaW5zcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2VjZWVlZTtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnM7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJnaW4taWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5hbGlnbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW4taW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDkwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubXItNiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_calc-inss_calc-inss_module_ts-es5.js.map