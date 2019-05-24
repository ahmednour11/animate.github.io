(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address-collapse/address-collapse.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/address-collapse/address-collapse.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zippy{\r\n    border: 1px solid #CCC;\r\n    border-radius: 5px;\r\n    width: 50%;\r\n}\r\n.zippy-heading{\r\n    font-weight: bold;\r\n    padding: 20px;\r\n    background-color:rgb(240, 239, 239); \r\n}\r\n.zippy-body{\r\n    padding: 20px;\r\n    overflow: hidden;\r\n}\r\n.expanded {\r\n    background-color: #f0f0f0\r\n\r\n}\r\n.fa{\r\n    float: right;\r\n    line-height: 30px;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy1jb2xsYXBzZS9hZGRyZXNzLWNvbGxhcHNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJOztBQUVKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZGRyZXNzLWNvbGxhcHNlL2FkZHJlc3MtY29sbGFwc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi56aXBweXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi56aXBweS1oZWFkaW5ne1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAyMzksIDIzOSk7IFxyXG59XHJcbi56aXBweS1ib2R5e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5leHBhbmRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwXHJcblxyXG59XHJcbi5mYXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/address-collapse/address-collapse.component.html":
/*!******************************************************************!*\
  !*** ./src/app/address-collapse/address-collapse.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"zippy\">\n<div class=\"zippy-heading\" \n>\n{{title}}\n<span class=\"fa fa-2x\" (click)=\"toggle()\"\n[class.fa-angle-up]=\"isExpanded\" \n[class.fa-angle-down]=\"!isExpanded\"\n  (click)=\"onFavClick()\"></span>\n</div>\n<div \n[@expandedCollapse]=\"isExpanded?'expanded':'collapsed'\"\nclass=\"zippy-body\">\n<ng-content></ng-content>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/address-collapse/address-collapse.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/address-collapse/address-collapse.component.ts ***!
  \****************************************************************/
/*! exports provided: AddressCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressCollapseComponent", function() { return AddressCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zippy_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zippy.animation */ "./src/app/address-collapse/zippy.animation.ts");



var AddressCollapseComponent = /** @class */ (function () {
    function AddressCollapseComponent() {
    }
    AddressCollapseComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AddressCollapseComponent.prototype, "title", void 0);
    AddressCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'address-collapse',
            template: __webpack_require__(/*! ./address-collapse.component.html */ "./src/app/address-collapse/address-collapse.component.html"),
            animations: [_zippy_animation__WEBPACK_IMPORTED_MODULE_2__["expandedCollapse"]],
            styles: [__webpack_require__(/*! ./address-collapse.component.css */ "./src/app/address-collapse/address-collapse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddressCollapseComponent);
    return AddressCollapseComponent;
}());



/***/ }),

/***/ "./src/app/address-collapse/zippy.animation.ts":
/*!*****************************************************!*\
  !*** ./src/app/address-collapse/zippy.animation.ts ***!
  \*****************************************************/
/*! exports provided: expandedCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandedCollapse", function() { return expandedCollapse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var expandedCollapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandedCollapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0, paddingTop: 0, paddingBottom: 0, opacity: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed =>expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '*', paddingTop: '*', paddingBottom: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded =>collapsed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in')])
]);


/***/ }),

/***/ "./src/app/animation/animate.ts":
/*!**************************************!*\
  !*** ./src/app/animation/animate.ts ***!
  \**************************************/
/*! exports provided: bouncOutLift, slide, fade, fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bouncOutLift", function() { return bouncOutLift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var bouncOutLift = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            offset: .5,
            opacity: 1,
            backgroundColor: '#DDD',
            transform: 'translateX(50px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            offset: .7,
            opacity: 0,
            backgroundColor: '#DDD',
            transform: 'translateX(-20px)'
        })
    ]))
]);
var slide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slide', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400)
    ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        // animate('0.5s 0s cubic-bezier(.26,.64,.84,-0.1)',style({transform:'translateX(150px)',opacity:0}))
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(bouncOutLift)
    ])
]);
var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter, :leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);
var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, backgroundColor: 'blueviolet' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{easing}}')
], {
    params: { duration: '500ms', easing: 'ease-in' }
});


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<animate></animate>\n<todos></todos>\n<br>\n<address-collapse title=\"Address Here\">\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n          when an unknown printer took a galley of type and scrambled it to make a type\n           specimen book. It has survived not only five centuries, but also the leap into '\n           electronic typesetting, remaining essentially unchanged. It was popularised in \n           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n            and more recently with desktop publishing software like Aldus PageMaker including \n            versions of Lorem Ipsum.\n    </p>\n</address-collapse>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Animated-App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _css_animate_css_animate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css-animate/css-animate.component */ "./src/app/css-animate/css-animate.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _address_collapse_address_collapse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address-collapse/address-collapse.component */ "./src/app/address-collapse/address-collapse.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _css_animate_css_animate_component__WEBPACK_IMPORTED_MODULE_6__["CssAnimateComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_7__["TodosComponent"],
                _address_collapse_address_collapse_component__WEBPACK_IMPORTED_MODULE_9__["AddressCollapseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/css-animate/css-animate.component.css":
/*!*******************************************************!*\
  !*** ./src/app/css-animate/css-animate.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div1{\r\n    width: 25%;\r\n    height: 40px;\r\n    text-align: center;\r\n    color: white;\r\n    line-height: 40px;\r\n    background-color: blueviolet;\r\n    -webkit-animation-name: colorChanged;\r\n            animation-name: colorChanged;\r\n    -webkit-animation-duration: 10S;\r\n            animation-duration: 10S;\r\n  }\r\n\r\n  @-webkit-keyframes colorChanged{\r\n    0% {background-color: red;}\r\n    25% {background-color:blue;}\r\n    50% {background-color: yellow;}\r\n    75% {background-color:violet;}\r\n    100% {background-color:black;}\r\n  }\r\n\r\n  @keyframes colorChanged{\r\n    0% {background-color: red;}\r\n    25% {background-color:blue;}\r\n    50% {background-color: yellow;}\r\n    75% {background-color:violet;}\r\n    100% {background-color:black;}\r\n  }\r\n\r\n  .animated{\r\n      margin-top: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3NzLWFuaW1hdGUvY3NzLWFuaW1hdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLElBQUkscUJBQXFCLENBQUM7SUFDMUIsS0FBSyxxQkFBcUIsQ0FBQztJQUMzQixLQUFLLHdCQUF3QixDQUFDO0lBQzlCLEtBQUssdUJBQXVCLENBQUM7SUFDN0IsTUFBTSxzQkFBc0IsQ0FBQztFQUMvQjs7RUFOQTtJQUNFLElBQUkscUJBQXFCLENBQUM7SUFDMUIsS0FBSyxxQkFBcUIsQ0FBQztJQUMzQixLQUFLLHdCQUF3QixDQUFDO0lBQzlCLEtBQUssdUJBQXVCLENBQUM7SUFDN0IsTUFBTSxzQkFBc0IsQ0FBQztFQUMvQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Nzcy1hbmltYXRlL2Nzcy1hbmltYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2MXtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogY29sb3JDaGFuZ2VkO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMFM7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGNvbG9yQ2hhbmdlZHtcclxuICAgIDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7fVxyXG4gICAgMjUlIHtiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7fVxyXG4gICAgNTAlIHtiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7fVxyXG4gICAgNzUlIHtiYWNrZ3JvdW5kLWNvbG9yOnZpb2xldDt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO31cclxuICB9XHJcblxyXG4gIC5hbmltYXRlZHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/css-animate/css-animate.component.html":
/*!********************************************************!*\
  !*** ./src/app/css-animate/css-animate.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div1\"> Animation test keyframes</div>\n\n<div class=\"animated bounce delay-1s\"><h3>Example</h3></div>"

/***/ }),

/***/ "./src/app/css-animate/css-animate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/css-animate/css-animate.component.ts ***!
  \******************************************************/
/*! exports provided: CssAnimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssAnimateComponent", function() { return CssAnimateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CssAnimateComponent = /** @class */ (function () {
    function CssAnimateComponent() {
    }
    CssAnimateComponent.prototype.ngOnInit = function () {
    };
    CssAnimateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'animate',
            template: __webpack_require__(/*! ./css-animate.component.html */ "./src/app/css-animate/css-animate.component.html"),
            styles: [__webpack_require__(/*! ./css-animate.component.css */ "./src/app/css-animate/css-animate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CssAnimateComponent);
    return CssAnimateComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group{\r\n    width:25%;\r\n}\r\n.form-control{\r\n    width:25% ;\r\n}\r\nbutton{\r\n    outline: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXB7XHJcbiAgICB3aWR0aDoyNSU7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOjI1JSA7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgb3V0bGluZTogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div @todoAnimate>\n<h1>TO Do List</h1>\n<input type=\"text\" #itemInput (keyup.enter)=\"addItem(itemInput)\" class=\"form-control\">\n<div *ngIf=\"items\" class=\"list-group\">\n  <button @fAnimate\n  (@fAnimate.start)=\"fstart($event)\"\n  (@fAnimate.done)=\"fend($event)\"\n  class=\"list-group-item\" *ngFor=\"let i of items\"\n   (click)=\"removeItem(i)\">\n    {{i}}\n  </button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../animation/animate */ "./src/app/animation/animate.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
        this.items = ['itshare c#', 'itshare JAVA', 'itshare Angular', 'itshare php'];
    }
    TodosComponent.prototype.addItem = function (itemInput) {
        this.items.push(itemInput.value);
        itemInput.value = '';
    };
    TodosComponent.prototype.removeItem = function (i) {
        var index = this.items.indexOf(i);
        this.items.splice(index, 1);
    };
    TodosComponent.prototype.fstart = function (event) {
        console.log(event);
    };
    TodosComponent.prototype.fend = function (e) {
        console.log(e);
    };
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('todoAnimate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('h1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    transform: 'translateY(-20px)'
                                }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(700)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('@fAnimate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animateChild"])()))
                        ])
                    ])
                ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fAnimate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animation_animate__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"], {
                        params: { duration: '2s', easing: 'ease-in-out' }
                    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translateX(30px)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        })
        /*   transition('void => *',[
              style({backgroundColor:'yellow',opacity:1}),
              animate(2000,style({backgroundColor:"blueviolet",opacity:1,color:"#FFF"}))
            ])
            ,transition('* => void',[
              animate(1000,style({opacity:0}))
            ])   */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\Animated-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map