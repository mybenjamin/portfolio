function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "<app-layout></app-layout>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/material.module */
    "./src/app/shared/material.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/nav/nav.component */
    "./src/app/layout/nav/nav.component.ts"); // App Modules
    // App Components


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/layout/nav/nav.component.ts");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 3,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "layout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/nav/nav.animations.ts":
  /*!**********************************************!*\
    !*** ./src/app/layout/nav/nav.animations.ts ***!
    \**********************************************/

  /*! exports provided: navAnimations */

  /***/
  function srcAppLayoutNavNavAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "navAnimations", function () {
      return navAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var navAnimations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flowInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('button', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(100px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(-150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('button', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(100px)'
    }))])])])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flipIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'rotateX(80deg)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'rotateX(0)'
    })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'rotateX(0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'rotateX(80deg)'
    })]))])])];
    /***/
  },

  /***/
  "./src/app/layout/nav/nav.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/layout/nav/nav.component.ts ***!
    \*********************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppLayoutNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav.animations */
    "./src/app/layout/nav/nav.animations.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    function NavComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.showTooltips([_r3, _r4, _r5, _r6, _r7]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_red_eye");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "alternate_email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "work");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flowInOut", undefined);
      }
    }

    function NavComponent_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flipIn", undefined);
      }
    }

    function NavComponent_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flipIn", undefined);
      }
    }

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);

        this.spam = false;
      }

      _createClass(NavComponent, [{
        key: "showTooltips",
        value: function showTooltips(tooltips) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = tooltips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var tooltip = _step.value;
              tooltip.show();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "showNav",
        value: function showNav() {
          this.spamProtector();
          this.navOpen = !this.navOpen;
        }
      }, {
        key: "spamProtector",
        value: function spamProtector() {
          var _this = this;

          this.spam = true;
          setTimeout(function () {
            return _this.spam = !_this.spam;
          }, 1100);
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 4,
      vars: 4,
      consts: [["class", "nav", 4, "ngIf"], ["mat-fab", "", "color", "primary", 1, "nav__fab", 3, "disabled", "click"], [4, "ngIf"], [1, "nav"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "contact", "matTooltipPosition", "left", 1, "nav__item"], ["tt1", "matTooltip"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "profile", "matTooltipPosition", "left", 1, "nav__item"], ["tt2", "matTooltip"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "work history", "matTooltipPosition", "left", 1, "nav__item"], ["tt3", "matTooltip"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "blog", "matTooltipPosition", "left", 1, "nav__item"], ["tt4", "matTooltip"], ["mat-mini-fab", "", "color", "accent", "matTooltip", "tech stack", "matTooltipPosition", "left", 1, "nav__item"], ["tt5", "matTooltip"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 24, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_1_listener() {
            return ctx.showNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavComponent_mat_icon_2_Template, 2, 1, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavComponent_mat_icon_3_Template, 2, 1, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.spam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.navOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"]],
      styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 1rem;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n  align-items: center;\n}\n\n.nav__item[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n\n.nav__fab[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transition: 1s ease;\n}\n\n.nav__fab[_ngcontent-%COMP%]:hover, .nav__fab[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n  transition: 1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlbmplZS9jb2RlL3BvcnRmb2xpby9zcmMvYXBwL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBRUUsVUFBQTtFQUNBLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2X19pdGVtIHtcbiAgbWFyZ2luOiAuNXJlbTtcbn1cblxuLm5hdl9fZmFiIHtcbiAgb3BhY2l0eTogLjU7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdl9faXRlbSB7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG4ubmF2X19mYWIge1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG59XG4ubmF2X19mYWI6aG92ZXIsIC5uYXZfX2ZhYjpmb2N1cyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG59Il19 */"],
      data: {
        animation: _nav_animations__WEBPACK_IMPORTED_MODULE_1__["navAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.scss'],
          animations: _nav_animations__WEBPACK_IMPORTED_MODULE_1__["navAnimations"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/material.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/material.module.ts ***!
    \*******************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_41__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/benjee/code/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map