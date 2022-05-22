(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkwork_calculation"] = self["webpackChunkwork_calculation"] || []).push([["src_app_pages_calc-decimo-terceiro_calc-decimo-terceiro_module_ts"], {
    /***/
    26847:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalcDecimoTerceiroPageRoutingModule": function CalcDecimoTerceiroPageRoutingModule() {
          return (
            /* binding */
            _CalcDecimoTerceiroPageRoutingModule
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


      var _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calc-decimo-terceiro.page */
      47211);

      var routes = [{
        path: '',
        component: _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_0__.CalcDecimoTerceiroPage
      }];

      var _CalcDecimoTerceiroPageRoutingModule = /*#__PURE__*/_createClass(function CalcDecimoTerceiroPageRoutingModule() {
        _classCallCheck(this, CalcDecimoTerceiroPageRoutingModule);
      });

      _CalcDecimoTerceiroPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CalcDecimoTerceiroPageRoutingModule);
      /***/
    },

    /***/
    73120:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalcDecimoTerceiroPageModule": function CalcDecimoTerceiroPageModule() {
          return (
            /* binding */
            _CalcDecimoTerceiroPageModule
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


      var _calc_decimo_terceiro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calc-decimo-terceiro-routing.module */
      26847);
      /* harmony import */


      var _calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calc-decimo-terceiro.page */
      47211);

      var _CalcDecimoTerceiroPageModule = /*#__PURE__*/_createClass(function CalcDecimoTerceiroPageModule() {
        _classCallCheck(this, CalcDecimoTerceiroPageModule);
      });

      _CalcDecimoTerceiroPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _calc_decimo_terceiro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalcDecimoTerceiroPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_calc_decimo_terceiro_page__WEBPACK_IMPORTED_MODULE_1__.CalcDecimoTerceiroPage]
      })], _CalcDecimoTerceiroPageModule);
      /***/
    },

    /***/
    47211:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalcDecimoTerceiroPage": function CalcDecimoTerceiroPage() {
          return (
            /* binding */
            _CalcDecimoTerceiroPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_decimo_terceiro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./calc-decimo-terceiro.page.html */
      13276);
      /* harmony import */


      var _calc_decimo_terceiro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calc-decimo-terceiro.page.scss */
      83311);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      88697);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _CalcDecimoTerceiroPage = /*#__PURE__*/function () {
        function CalcDecimoTerceiroPage(formBuilder, pdfGenerator, toastController) {
          _classCallCheck(this, CalcDecimoTerceiroPage);

          this.formBuilder = formBuilder;
          this.pdfGenerator = pdfGenerator;
          this.toastController = toastController;
          this.valueDependent = 189.59;
          this.decimoTerceiroForm = this.formBuilder.group({
            grossSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            dependentValue: [0],
            monthsWorked: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
          });
        }

        _createClass(CalcDecimoTerceiroPage, [{
          key: "calcInss",
          value: function calcInss() {
            this.grossSalary = this.grossSalary / 12 * this.decimoTerceiroForm.value.monthsWorked;

            if (this.grossSalary < 1100) {
              this.inssValue = 82.50;
              this.calculatedInss = this.grossSalary * 7.5 / 100;
            } else if (this.grossSalary > 1100 && this.grossSalary < 2203.49) {
              this.inssValue = 99.31;
              this.calculatedInss = this.grossSalary * 9 / 100 - 16.50;
            } else if (this.grossSalary > 2203.48 && this.grossSalary < 3305.23) {
              this.inssValue = 132.21;
              this.calculatedInss = this.grossSalary * 12 / 100 - 82.60;
            } else if (this.grossSalary > 3305.22 && this.grossSalary < 6433.58) {
              this.inssValue = 437.96;
              this.calculatedInss = this.grossSalary * 14 / 100 - 148.70;
            } else if (this.grossSalary > 6433.57) {
              this.inssValue = 437.96;
              this.calculatedInss = 6433.57 * 14 / 100 - 148.70;
            }
          }
        }, {
          key: "calcIrrf",
          value: function calcIrrf() {
            var _a;

            var dependentCalculation = this.decimoTerceiroForm.value.dependentValue * this.valueDependent;
            var baseSalary = this.grossSalary - this.calculatedInss;

            if (baseSalary < 2075) {
              this.calculatedIrrf = 0;
            } else if (baseSalary > 1903.98 && baseSalary < 2826.66) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 7.5 / 100 - 142.80;
            } else if (baseSalary > 2826.65 && baseSalary < 3751.05) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 15 / 100 - 354.80;
            } else if (baseSalary > 3751.05 && baseSalary < 4664.69) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * (22.5 / 100) - 636.13;
            } else if (baseSalary > 4664.68) {
              this.calculatedIrrf = (this.grossSalary - this.calculatedInss - dependentCalculation) * 27.5 / 100 - 869.36;
            }

            this.baseCalculation = this.grossSalary - this.calculatedInss;
            this.calculatedIrrfPdf = (_a = this.calculatedIrrf) === null || _a === void 0 ? void 0 : _a.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.baseCalculationPdf = this.baseCalculation.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.showBaseCalculation = this.baseCalculation.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
          }
        }, {
          key: "showClearButton",
          value: function showClearButton(e) {
            this.grossSalary = e;

            if (!e) {
              this.decimoTerceiroForm.patchValue({
                monthsWorked: this.decimoTerceiroForm.value.monthsWorked = undefined
              });
              this.parcelPrimary = undefined;
              this.parcelSecondary = undefined;
              this.total = undefined;
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.decimoTerceiroForm.reset();
            this.baseCalculation = undefined;
            this.calculatedIrrf = undefined;
            this.calculatedInss = undefined;
            this.grossSalary = undefined;
          }
        }, {
          key: "grossSalaryToast",
          value: function grossSalaryToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Informe o salário bruto!',
                        duration: 3000,
                        color: 'medium'
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
          key: "monthsWorkedToast",
          value: function monthsWorkedToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: 'Informe a quantidade de meses trabalhados!',
                        duration: 3000,
                        color: 'medium'
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
          key: "generatorPdf",
          value: function generatorPdf() {
            var hidden = document.getElementById('remove');
            hidden.removeAttribute('hidden');
            hidden.setAttribute('hidden', '');
            var a = document.getElementById('print');
            this.pdfGenerator.fromData(a.innerHTML, {
              type: 'share'
            });
          }
        }, {
          key: "calcDecimoTerceiro",
          value: function calcDecimoTerceiro() {
            this.monthsWorked = this.decimoTerceiroForm.value.monthsWorked;
            this.parcelPrimary = this.grossSalary / 2;
            this.parcelPrimaryFormatted = this.parcelPrimary.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.parcelSecondary = this.parcelPrimary - this.calculatedInss - this.calculatedIrrf;
            this.parcelSecondaryFormatted = this.parcelSecondary.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.total = this.parcelPrimary + this.parcelSecondary;
            this.totalFormatted = this.total.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.realGrossSalary = this.decimoTerceiroForm.value.grossSalary;
            this.realGrossSalaryFormatted = this.realGrossSalary.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
            this.dependentQuantity = this.decimoTerceiroForm.value.dependentValue;
            this.proportionalSalary = this.decimoTerceiroForm.value.grossSalary / 12 * this.decimoTerceiroForm.value.monthsWorked;
            this.proportionalSalaryFormatted = this.proportionalSalary.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(_ref) {
            var value = _ref.value,
                valid = _ref.valid;

            if (!value.grossSalary) {
              return this.grossSalaryToast();
            }

            if (!value.monthsWorked) {
              return this.monthsWorkedToast();
            }

            this.grossSalary = value.grossSalary;
            this.calcInss();
            this.calcIrrf();
            this.calcDecimoTerceiro();
          }
        }]);

        return CalcDecimoTerceiroPage;
      }();

      _CalcDecimoTerceiroPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }];
      };

      _CalcDecimoTerceiroPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-calc-decimo-terceiro',
        template: _C_Users_Walace_Documents_work_calculation_node_modules_ngtools_webpack_src_loaders_direct_resource_js_calc_decimo_terceiro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_calc_decimo_terceiro_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CalcDecimoTerceiroPage);
      /***/
    },

    /***/
    13276:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.html ***!
      \******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title\">\r\n        <ion-label>{{ 'Calcular Décimo Terceiro' | uppercase}}</ion-label>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form [formGroup]=\"decimoTerceiroForm\" class=\"paddin-input\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Salário bruto:</ion-label>\r\n      <ion-input\r\n              placeholder=\"R$ 0.00\"\r\n              type=\"number\"\r\n              (ngModelChange)=\"showClearButton($event)\"\r\n              formControlName=\"grossSalary\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Número de dependentes:</ion-label>\r\n      <ion-input placeholder=\"0\" type=\"number\" formControlName=\"dependentValue\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Número de meses trabalhados:</ion-label>\r\n      <ion-input placeholder=\"mínimo 1 máximo 12\" type=\"number\" formControlName=\"monthsWorked\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"baseCalculation && parcelPrimary > 0 \" class=\"align-items\">\r\n      <span>{{'Primeira parcela: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ parcelPrimaryFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div *ngIf=\"baseCalculation && parcelSecondary > 0\" class=\"align-items\">\r\n      <span>{{'Segunda parcela: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ parcelSecondaryFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div *ngIf=\"baseCalculation && total > 0\" class=\"align-items\">\r\n      <span>{{'Valor integral: '}}</span>\r\n      <ion-badge color=\"medium\">\r\n        {{'R$ '}}{{ totalFormatted }}\r\n      </ion-badge>\r\n    </div>\r\n    <div class=\"align-button\">\r\n      <ion-button (click)=\"onSubmit(decimoTerceiroForm)\">Calcular</ion-button>\r\n      <ion-button *ngIf=\"grossSalary\" (click)=\"resetForm()\" color=\"light\">Limpar</ion-button>\r\n      <ion-button *ngIf=\"total\" (click)=\"generatorPdf()\" color=\"light\">Gerar PDF</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n<!--Gerar PDF-->\r\n<!--Preciso melhorar isso-->\r\n<div hidden id=\"remove\">\r\n  <div id=\"print\">\r\n    <h1 style=\"display: flex; justify-content: center; margin-bottom: 40px;\">CÁLCULO 13º SALÁRIO</h1><br>\r\n    <div style=\"width: 100%\">\r\n      <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px\">Salário bruto:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + realGrossSalaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Número de dependentes:</b>\r\n        <span style=\"font-size: 35px;\">{{ dependentQuantity }}</span>\r\n      </div>\r\n\r\n      <div style=\" display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Salário proporcional:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + proportionalSalaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Primeira parcela:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + parcelPrimaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; background-color: #dddddd; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Segunda parcela:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + parcelSecondaryFormatted }}</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; justify-content: space-between; height: 50px;\">\r\n        <b style=\"font-size: 35px;\">Valor integral:</b>\r\n        <span style=\"font-size: 35px;\">{{ 'R$ ' + totalFormatted }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    83311:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/calc-decimo-terceiro/calc-decimo-terceiro.page.scss ***!
      \***************************************************************************/

    /***/
    function _(module) {
      module.exports = "::ng-deep ion-content {\n  --background: #eceeee;\n}\n::ng-deep ion-item {\n  margin-bottom: 18px;\n}\n::ng-deep ion-button {\n  font-family: NunitoSans;\n  --background: #0c9abe;\n  --border-radius: 15px;\n}\n::ng-deep ion-toolbar {\n  --background: #0c9abe;\n}\n::ng-deep ion-badge {\n  margin-left: 12px;\n}\n::ng-deep ion-label {\n  position: relative;\n  top: -2px;\n}\n::ng-deep ion-title {\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-right: 0;\n}\n::ng-deep ion-back-button {\n  --color: #fff;\n}\n.margin-icon {\n  margin-right: 7px;\n}\n.align-button {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 50px;\n}\n.paddin-input {\n  position: relative;\n  top: 90px;\n}\n.align-items {\n  display: flex;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMtZGVjaW1vLXRlcmNlaXJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLG1CQUFBO0FBREo7QUFJRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxxQkFBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0FBUEo7QUFXQTtFQUNFLGlCQUFBO0FBUkY7QUFXQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBUkY7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVJGO0FBV0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVJGIiwiZmlsZSI6ImNhbGMtZGVjaW1vLXRlcmNlaXJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNlZWVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnM7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwYzlhYmU7XHJcbiAgfVxyXG5cclxuICBpb24tYmFkZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmdpbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLmFsaWduLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLnBhZGRpbi1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogOTBweDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_calc-decimo-terceiro_calc-decimo-terceiro_module_ts-es5.js.map