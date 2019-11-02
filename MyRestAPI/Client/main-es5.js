(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dataforms/dataforms.module": [
		"./src/app/dataforms/dataforms.module.ts",
		"dataforms-dataforms-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menubar></app-menubar>\n<div id=\"container\">\n   <div id=\"left\">\n       <router-outlet></router-outlet>\n   </div>\n   <div id=\"right\">\n      Content here...\n   </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/crudmenu/crudmenu.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/crudmenu/crudmenu.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ejs-menu [items]=\"menuItems\"></ejs-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/menubar/menubar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/menubar/menubar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <!-- Brand/logo -->\n  <a class=\"navbar-brand\" href=\"#\">TVS LUCAS</a>\n  \n  <!-- Links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/forms\">Data Forms</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/reports\">Reports</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/visualization\">Visualization</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dataforms/dataforms.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dataforms/dataforms.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-crudmenu></app-crudmenu>\r\n<a routerLink=\"/dataforms/agtable\">AG Grid Table</a><br>\r\n<a routerLink=\"/dataforms/insert\">Insert Data</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"ctype\">\n    <option>Low Revenue</option>\n    <option>High Revenue</option>\n    <option>Very High</option>\n    <option>Low to High</option>\n    <option>High to Low</option>\n    <option>All</option>\n</select>\n<br>\n<app-location *ngFor=\"let x of locations |productivity:ctype\" [location]=\"x\"></app-location>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/location/location.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/location/location.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"imagebox\">\n    <img src=\"../../../../assets/images/{{location.image}}\">\n  </div>\n  <div class=\"content\">\n     <h4>{{location.name | uppercase}}</h4>\n     <h6 class=\"description\">{{location.description}}</h6>\n     <h5>Revenue :: {{location.revenue | currency:\"INR\"}} Crores</h5>\n     <h6 class=\"empcount\">Employee count:: {{location.empcount|rated}}</h6>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projectform/projectform.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/projects/projectform/projectform.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pro-form\">\n<h3>Project Details Form</h3>\n<hr>\n<form >\n  <div class=\"form-group\">\n    <label for=\"projectid\">Project Id</label>\n    <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Project ID\" [(ngModel)]=\"projectid\" name=\"projectid\"\n    [disabled]=\"buttonname=='update Project'\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"projecttitle\">Project Title</label>\n    <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Project title\" [(ngModel)]=\"projecttitle\" name=\"projecttitle\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"teamsize\">Team Size</label>\n    <input type=\"text\" class=\"form-control\"  placeholder=\"Team size in number\" [(ngModel)]=\"teamsize\" name=\"teamsize\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"duration\">Duration</label>\n    <input type=\"text\" class=\"form-control\"  placeholder=\"Duration in hours/days/months\" [(ngModel)]=\"duration\" name=\"duration\">\n  </div>\n\n  <div class=\"form-group\" >\n    <label for=\"coretech\">Core  Technology</label>\n    <input type=\"text\"  class=\"form-control\"  [(ngModel)]=\"coretech\" name=\"coretech\">\n  </div>\n\n  <button  class=\"btn btn-dark\" (click)=\"btnEvent()\">{{buttonname}}</button>\n</form>\n<div *ngIf=\"errors.length>0\" \n  [ngStyle]=\"{'border':'2px solid darkblue','color':'gray','margin':'10px'}\">\n      <ul>\n         <li *ngFor=\"let x of errors\">{{x}}</li>\n      </ul>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projects.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/projects/projects.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-projectform (newitem)=\"ngOnInit()\"></app-projectform>\n<h1 [style.color]=\"'darkblue'\">Project details</h1>\n\n<table class=\"table table-hover table-striped\">\n   <thead>\n       <th>Project ID</th>\n       <th>Project Title</th>\n       <th>Team Size</th>\n       <th>Duration</th>\n       <th>Core Technology</th>\n   </thead>\n   <tbody>\n       <tr *ngFor=\"let x of projects\" [highlight]=\"x.teamsize\" >\n            <td><a routerLink=\"/projects/{{x.projectid}}\">{{x.projectid}}</a></td>\n            <td>{{x.projecttitle}}</td>\n            <td>{{x.teamsize}}</td>\n            <td>{{x.duration}}</td>\n            <td>{{x.coretech}}</td>\n       </tr>\n   </tbody>\n\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/reports.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/reports.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\"  (submit)=\"saveFile()\">\n  <input type=\"file\" (change)=\"changeFile($event)\" name=\"file\">\n  <button type=\"submit\">Upload File</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/visualization/firstchart/firstchart.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/visualization/firstchart/firstchart.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "`<ejs-chart id=\"chart-container\" [primaryXAxis]='primaryXaxis' [title]=\"'Man hour analysis'\">\n  <e-series-collection>\n      <e-series [dataSource]='chartData' \n      type='Line' xName='month' yName='hours' name='ManHours'></e-series>\n      <e-series [dataSource]='chartData' \n      type='Line' xName='month' yName='hours2' name='ManHours2'></e-series>\n  </e-series-collection>\n</ejs-chart>`"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/visualization/productchart/productchart.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/visualization/productchart/productchart.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "`<ejs-chart id=\"chart-container2\" [primaryXAxis]='primaryXaxis'\n [title]=\"'Product Analysis'\">\n  <e-series-collection>\n      <e-series [dataSource]='chartData' \n      type='Line' xName='ProductCode' yName='Expense' name='Expenses'></e-series>\n      <e-series [dataSource]='chartData' \n      type='Line' xName='ProductCode' yName='Units' name='Units'></e-series>\n  </e-series-collection>\n</ejs-chart>`"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/visualization/visualization.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/visualization/visualization.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>First Chart</h1>\r\n<app-firstchart></app-firstchart>\r\n<ag-grid-angular \r\n    style=\"width: 600px; height: 800px\" \r\n    class=\"ag-theme-balham\"\r\n    [rowData]=\"rows\"\r\n    [columnDefs]=\"cols\"\r\n   \r\n    rowSelection=\"multiple\"\r\n>\r\n</ag-grid-angular>\r\n<h1>Product Chart</h1>\r\n<app-productchart></app-productchart>"

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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_dataforms_dataforms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dataforms/dataforms.component */ "./src/app/pages/dataforms/dataforms.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/pages/reports/reports.component.ts");
/* harmony import */ var _pages_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/visualization/visualization.component */ "./src/app/pages/visualization/visualization.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_projects_projectform_projectform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/projects/projectform/projectform.component */ "./src/app/pages/projects/projectform/projectform.component.ts");









var routes = [
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "forms", component: _pages_dataforms_dataforms_component__WEBPACK_IMPORTED_MODULE_4__["DataformsComponent"] },
    { path: "reports", component: _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"] },
    { path: "visualization", component: _pages_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_6__["VisualizationComponent"] },
    { path: "projects", component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: "projects/:pid", component: _pages_projects_projectform_projectform_component__WEBPACK_IMPORTED_MODULE_8__["ProjectformComponent"] },
    { path: "dataforms", loadChildren: "./dataforms/dataforms.module#DataformsModule" }
];
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

module.exports = "#container\r\n{\r\n    overflow: hidden;\r\n}\r\n\r\n#left{\r\n  float: left;\r\n  box-sizing: border-box;\r\n  width: 70%;\r\n  padding: 20px;\r\n  background-color: rgb(245, 245, 245);\r\n  min-height: 600px;\r\n}\r\n\r\n#right{\r\n  float: left;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  padding: 20px;\r\n  background-color: rgb(82, 79, 79);\r\n  min-height: 600px;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJcclxue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2xlZnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4jcmlnaHR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA3OSwgNzkpO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

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
        this.title = 'fullapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "./node_modules/@syncfusion/ej2-angular-navigations/@syncfusion/ej2-angular-navigations.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-charts */ "./node_modules/@syncfusion/ej2-angular-charts/@syncfusion/ej2-angular-charts.es5.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/menubar/menubar.component */ "./src/app/common/menubar/menubar.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_dataforms_dataforms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dataforms/dataforms.component */ "./src/app/pages/dataforms/dataforms.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/pages/reports/reports.component.ts");
/* harmony import */ var _pages_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/visualization/visualization.component */ "./src/app/pages/visualization/visualization.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _pages_home_location_location_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home/location/location.component */ "./src/app/pages/home/location/location.component.ts");
/* harmony import */ var _pipes_rated_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/rated.pipe */ "./src/app/pipes/rated.pipe.ts");
/* harmony import */ var _pipes_productivity_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/productivity.pipe */ "./src/app/pipes/productivity.pipe.ts");
/* harmony import */ var _pages_projects_projectform_projectform_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/projects/projectform/projectform.component */ "./src/app/pages/projects/projectform/projectform.component.ts");
/* harmony import */ var _common_crudmenu_crudmenu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/crudmenu/crudmenu.component */ "./src/app/common/crudmenu/crudmenu.component.ts");
/* harmony import */ var _pages_visualization_firstchart_firstchart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/visualization/firstchart/firstchart.component */ "./src/app/pages/visualization/firstchart/firstchart.component.ts");
/* harmony import */ var _pages_visualization_productchart_productchart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/visualization/productchart/productchart.component */ "./src/app/pages/visualization/productchart/productchart.component.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _common_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_10__["MenubarComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pages_dataforms_dataforms_component__WEBPACK_IMPORTED_MODULE_12__["DataformsComponent"],
                _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"],
                _pages_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_14__["VisualizationComponent"],
                _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                _pages_home_location_location_component__WEBPACK_IMPORTED_MODULE_16__["LocationComponent"],
                _pipes_rated_pipe__WEBPACK_IMPORTED_MODULE_17__["RatedPipe"],
                _pipes_productivity_pipe__WEBPACK_IMPORTED_MODULE_18__["ProductivityPipe"],
                _pages_projects_projectform_projectform_component__WEBPACK_IMPORTED_MODULE_19__["ProjectformComponent"],
                _common_crudmenu_crudmenu_component__WEBPACK_IMPORTED_MODULE_20__["CrudmenuComponent"],
                _pages_visualization_firstchart_firstchart_component__WEBPACK_IMPORTED_MODULE_21__["FirstchartComponent"],
                _pages_visualization_productchart_productchart_component__WEBPACK_IMPORTED_MODULE_22__["ProductchartComponent"],
                _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_23__["HighlightDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["LegendService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["DataLabelService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeriesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/crudmenu/crudmenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/common/crudmenu/crudmenu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jcnVkbWVudS9jcnVkbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/crudmenu/crudmenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/crudmenu/crudmenu.component.ts ***!
  \*******************************************************/
/*! exports provided: CrudmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudmenuComponent", function() { return CrudmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrudmenuComponent = /** @class */ (function () {
    function CrudmenuComponent() {
        this.menuItems = [
            {
                text: "AG GRID"
            },
            {
                text: "CRUD OPERATIONS",
                items: [{ text: "Insert" }, { text: "Update" }, { text: "Delete" }]
            }
        ];
    }
    CrudmenuComponent.prototype.ngOnInit = function () {
    };
    CrudmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crudmenu',
            template: __webpack_require__(/*! raw-loader!./crudmenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/crudmenu/crudmenu.component.html"),
            styles: [__webpack_require__(/*! ./crudmenu.component.css */ "./src/app/common/crudmenu/crudmenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrudmenuComponent);
    return CrudmenuComponent;
}());



/***/ }),

/***/ "./src/app/common/menubar/menubar.component.css":
/*!******************************************************!*\
  !*** ./src/app/common/menubar/menubar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tZW51YmFyL21lbnViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/common/menubar/menubar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/menubar/menubar.component.ts ***!
  \*****************************************************/
/*! exports provided: MenubarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarComponent", function() { return MenubarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenubarComponent = /** @class */ (function () {
    function MenubarComponent() {
    }
    MenubarComponent.prototype.ngOnInit = function () {
    };
    MenubarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menubar',
            template: __webpack_require__(/*! raw-loader!./menubar.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/menubar/menubar.component.html"),
            styles: [__webpack_require__(/*! ./menubar.component.css */ "./src/app/common/menubar/menubar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.original = "";
        this.original = this.el.nativeElement.style.backgroundColor;
    }
    HighlightDirective.prototype.highlightHover = function () {
        if (this.teamsize < 5)
            this.el.nativeElement.style.backgroundColor = "lightblue";
        else if (this.teamsize >= 5 && this.teamsize <= 10)
            this.el.nativeElement.style.backgroundColor = "green";
        else if (this.teamsize > 10)
            this.el.nativeElement.style.backgroundColor = "yellow";
        else
            this.el.nativeElement.style.backgroundColor = "lightGray";
    };
    HighlightDirective.prototype.retainOriginal = function () {
        this.el.nativeElement.style.backgroundColor = this.original;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('highlight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HighlightDirective.prototype, "teamsize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "highlightHover", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "retainOriginal", null);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[highlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/models/supplymaster.ts":
/*!****************************************!*\
  !*** ./src/app/models/supplymaster.ts ***!
  \****************************************/
/*! exports provided: columnNames, proColumnNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnNames", function() { return columnNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proColumnNames", function() { return proColumnNames; });
var columnNames = [
    { headerName: 'Sno', field: 'sno' },
    { headerName: 'Customer Code', field: 'Custcode' },
    { headerName: 'Module', field: 'Module' },
    { headerName: 'Cost', field: 'cost', sortable: true, filter: true },
    { headerName: 'Part number', field: 'partno' },
    { headerName: 'Quantity', field: 'qty', sortable: true },
    { headerName: 'Product Code', field: 'productcode', filter: true },
    { headerName: 'Record type', field: 'recordtype' },
    { headerName: 'SupplyMonth', field: 'supplymonth' }
];
var proColumnNames = [
    { headerName: 'ProductCode', field: 'ProductCode' },
    { headerName: 'Expense', field: 'Expense' },
    { headerName: 'Units', field: 'Units' },
];


/***/ }),

/***/ "./src/app/pages/dataforms/dataforms.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dataforms/dataforms.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGFmb3Jtcy9kYXRhZm9ybXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dataforms/dataforms.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dataforms/dataforms.component.ts ***!
  \********************************************************/
/*! exports provided: DataformsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataformsComponent", function() { return DataformsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataformsComponent = /** @class */ (function () {
    function DataformsComponent() {
    }
    DataformsComponent.prototype.ngOnInit = function () {
    };
    DataformsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataforms',
            template: __webpack_require__(/*! raw-loader!./dataforms.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dataforms/dataforms.component.html"),
            styles: [__webpack_require__(/*! ./dataforms.component.css */ "./src/app/pages/dataforms/dataforms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataformsComponent);
    return DataformsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(ls) {
        this.ls = ls;
        this.ctype = "All";
        this.locations = this.ls.getLocations();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/location/location.component.css":
/*!************************************************************!*\
  !*** ./src/app/pages/home/location/location.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    overflow: hidden;\r\n    width: 400px;\r\n    height:280px;\r\n    margin: 20px;\r\n    float: left;\r\n    box-shadow: 3px 3px 3px gray;\r\n}\r\n.imagebox{\r\n    height: 100%;\r\n    width: 35%;\r\n    box-sizing: border-box;\r\n    float: left;\r\n    border: 1px solid gray;\r\n    text-align:center;\r\n    background-color: darkgray;\r\n    padding-top: 10%;\r\n}\r\n.imagebox img{\r\n    height: 80%;\r\n    width: 90%;\r\n}\r\n.content{\r\n    float: left;\r\n    box-sizing: border-box;\r\n    width: 65%;\r\n    height: 100%;\r\n    border: 1px solid gray;\r\n    background-color: lightgray;\r\n}\r\n.content h4{\r\n    color: darkslategrey;\r\n    font-family: arial;\r\n    text-align: center;\r\n    margin:  10px;\r\n}\r\n.description{\r\n    color: darkolivegreen;\r\n    font-family: consolas;\r\n    text-align: justify;\r\n    padding: 5px;\r\n}\r\nh5{\r\n    color: darkred;\r\n    font-family: Courier;\r\n    text-align: center;\r\n    margin: 5px;\r\n}\r\n.empcount{\r\n    color: darkblue;\r\n    font-family: Courier;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6MjgwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGdyYXk7XHJcbn1cclxuLmltYWdlYm94e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmltYWdlYm94IGltZ3tcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNvbnRlbnQgaDR7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogIDEwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBjb25zb2xhcztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmg1e1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgICBmb250LWZhbWlseTogQ291cmllcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5lbXBjb3VudHtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LocationComponent.prototype, "location", void 0);
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/pages/home/location/location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projectform/projectform.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/projects/projectform/projectform.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pro-form{\r\n    padding: 15px;\r\n    border: 2px solid rgb(95, 102, 83);\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdGZvcm0vcHJvamVjdGZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdGZvcm0vcHJvamVjdGZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm8tZm9ybXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTUsIDEwMiwgODMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/projectform/projectform.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/projects/projectform/projectform.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectformComponent", function() { return ProjectformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectformComponent = /** @class */ (function () {
    function ProjectformComponent(ps, ar, router) {
        var _this = this;
        this.ps = ps;
        this.ar = ar;
        this.router = router;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errors = [];
        this.btnEvent = this.addProject;
        this.buttonname = "Add Project";
        this.ar.params.subscribe(function (params) {
            var pid = params['pid'];
            if (pid)
                _this.buttonname = "update Project";
            for (var x in _this.ps.current) {
                if (_this.ps.current[x].projectid == pid) {
                    _this.projectid = _this.ps.current[x].projectid;
                    _this.projecttitle = _this.ps.current[x].projecttitle;
                    _this.teamsize = _this.ps.current[x].teamsize;
                    _this.duration = _this.ps.current[x].duration;
                    _this.coretech = _this.ps.current[x].coretech;
                    _this.btnEvent = _this.updateProject;
                }
            }
        });
    }
    ProjectformComponent.prototype.ngOnInit = function () {
    };
    ProjectformComponent.prototype.validation = function () {
        this.errors = [];
        if (this.projectid == undefined || this.projectid.length == 0)
            this.errors.push("Project id must be filled");
        else if (this.projectid.length < 5)
            this.errors.push("Project id must be atleast 5 char long");
        if (this.projecttitle == undefined || this.projecttitle.length == 0)
            this.errors.push("Project title must be filled");
        else if (this.projecttitle.length < 6)
            this.errors.push("Project title must be atleast  6 char long");
        if (this.teamsize == undefined || isNaN(this.teamsize))
            this.errors.push("Team size must be filled and should be number");
        else if (this.teamsize < 5 || this.teamsize > 25)
            this.errors.push("team size must be b/w 5 and and 25");
        if (this.duration == undefined || this.duration.length == 0)
            this.errors.push("Duration must be filled");
        if (this.coretech == undefined || this.coretech.length == 0)
            this.errors.push("Coretech  must be filled");
    };
    ProjectformComponent.prototype.addProject = function () {
        var _this = this;
        this.validation();
        if (this.errors.length == 0) {
            var obj = {
                projectid: this.projectid,
                projecttitle: this.projecttitle,
                duration: this.duration,
                teamsize: this.teamsize,
                coretech: this.coretech
            };
            this.ps.storeProject(obj).subscribe(function (data) {
                _this.projectid = "";
                _this.coretech = "";
                _this.teamsize = undefined;
                _this.projecttitle = "";
                _this.duration = "";
                alert("Data stored.!!!!");
                _this.notifyParent.emit("success");
            }, function () { alert("Data not stored"); });
        }
    };
    ProjectformComponent.prototype.updateProject = function () {
        var _this = this;
        this.validation();
        if (this.errors.length == 0) {
            var obj = {
                projectid: this.projectid,
                projecttitle: this.projecttitle,
                duration: this.duration,
                teamsize: this.teamsize,
                coretech: this.coretech
            };
            this.ps.updateProject(obj, obj.projectid).subscribe(function (data) {
                alert("Data stored.!!!!");
                _this.router.navigate(['/projects']);
            }, function () { alert("Data not stored"); });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('newitem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProjectformComponent.prototype, "notifyParent", void 0);
    ProjectformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectform',
            template: __webpack_require__(/*! raw-loader!./projectform.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projectform/projectform.component.html"),
            styles: [__webpack_require__(/*! ./projectform.component.css */ "./src/app/pages/projects/projectform/projectform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectformComponent);
    return ProjectformComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(ps) {
        this.ps = ps;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ps.getProjects().subscribe(function (data) {
            _this.projects = data;
            _this.ps.current = data;
        }, function () { return _this.projects = []; });
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/pages/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/reports/reports.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(fb, http, cd) {
        this.fb = fb;
        this.http = http;
        this.cd = cd;
        this.form = this.fb.group({
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.saveFile = function () {
        console.log("Called and working...!!!");
        var formData = new FormData();
        formData.append('file', this.form.get('file').value);
        console.log(this.formData);
    };
    ReportsComponent.prototype.changeFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.form.get('file').setValue(file);
        }
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/pages/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/pages/visualization/firstchart/firstchart.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/visualization/firstchart/firstchart.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc3VhbGl6YXRpb24vZmlyc3RjaGFydC9maXJzdGNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/visualization/firstchart/firstchart.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/visualization/firstchart/firstchart.component.ts ***!
  \************************************************************************/
/*! exports provided: FirstchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstchartComponent", function() { return FirstchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_chartdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chartdata.service */ "./src/app/services/chartdata.service.ts");



var FirstchartComponent = /** @class */ (function () {
    function FirstchartComponent(cs) {
        this.cs = cs;
        this.chartData = [];
        this.primaryXaxis = { valueType: 'Category' };
        this.chartData = this.cs.manhours;
        console.log(this.chartData);
    }
    FirstchartComponent.prototype.ngOnInit = function () {
    };
    FirstchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firstchart',
            template: __webpack_require__(/*! raw-loader!./firstchart.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/visualization/firstchart/firstchart.component.html"),
            styles: [__webpack_require__(/*! ./firstchart.component.css */ "./src/app/pages/visualization/firstchart/firstchart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_chartdata_service__WEBPACK_IMPORTED_MODULE_2__["ChartdataService"]])
    ], FirstchartComponent);
    return FirstchartComponent;
}());



/***/ }),

/***/ "./src/app/pages/visualization/productchart/productchart.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/visualization/productchart/productchart.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc3VhbGl6YXRpb24vcHJvZHVjdGNoYXJ0L3Byb2R1Y3RjaGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/visualization/productchart/productchart.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/visualization/productchart/productchart.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductchartComponent", function() { return ProductchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_supply_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/supply.service */ "./src/app/services/supply.service.ts");



var ProductchartComponent = /** @class */ (function () {
    function ProductchartComponent(ss) {
        this.ss = ss;
        this.chartData = [];
        this.primaryXaxis = { valueType: 'Category' };
    }
    ProductchartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getProducts().subscribe(function (data) { return _this.chartData = data; }, function () { return _this.chartData = []; });
    };
    ProductchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productchart',
            template: __webpack_require__(/*! raw-loader!./productchart.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/visualization/productchart/productchart.component.html"),
            styles: [__webpack_require__(/*! ./productchart.component.css */ "./src/app/pages/visualization/productchart/productchart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_supply_service__WEBPACK_IMPORTED_MODULE_2__["SupplyService"]])
    ], ProductchartComponent);
    return ProductchartComponent;
}());



/***/ }),

/***/ "./src/app/pages/visualization/visualization.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/visualization/visualization.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc3VhbGl6YXRpb24vdmlzdWFsaXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/visualization/visualization.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/visualization/visualization.component.ts ***!
  \****************************************************************/
/*! exports provided: VisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationComponent", function() { return VisualizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_supplymaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/supplymaster */ "./src/app/models/supplymaster.ts");
/* harmony import */ var src_app_services_supply_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/supply.service */ "./src/app/services/supply.service.ts");




var VisualizationComponent = /** @class */ (function () {
    function VisualizationComponent(ss) {
        this.ss = ss;
        this.rows = [];
        this.cols = src_app_models_supplymaster__WEBPACK_IMPORTED_MODULE_2__["proColumnNames"];
    }
    VisualizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getProducts().subscribe(function (data) { return _this.rows = data; }, function () { return _this.rows = []; });
    };
    VisualizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visualization',
            template: __webpack_require__(/*! raw-loader!./visualization.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/visualization/visualization.component.html"),
            styles: [__webpack_require__(/*! ./visualization.component.css */ "./src/app/pages/visualization/visualization.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_supply_service__WEBPACK_IMPORTED_MODULE_3__["SupplyService"]])
    ], VisualizationComponent);
    return VisualizationComponent;
}());



/***/ }),

/***/ "./src/app/pipes/productivity.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/productivity.pipe.ts ***!
  \********************************************/
/*! exports provided: ProductivityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductivityPipe", function() { return ProductivityPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductivityPipe = /** @class */ (function () {
    function ProductivityPipe() {
    }
    ProductivityPipe.prototype.transform = function (locations, type) {
        //let result:location[]=[];
        if (type == "Low Revenue") {
            return locations.filter(function (x) { return x.revenue <= 40; });
        }
        else if (type == "High Revenue") {
            return locations.filter(function (x) { return x.revenue > 40 && x.revenue <= 100; });
        }
        else if (type == "Very High") {
            return locations.filter(function (x) { return x.revenue > 100; });
        }
        else if (type == "Low to High") {
            return locations.sort(function (x, y) { return x.revenue > y.revenue ? 1 : x.revenue == y.revenue ? 0 : -1; });
        }
        else if (type == "High to Low") {
            return locations.sort(function (x, y) { return x.revenue > y.revenue ? -1 : x.revenue == y.revenue ? 0 : 1; });
        }
        else
            return locations;
    };
    ProductivityPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'productivity'
        })
    ], ProductivityPipe);
    return ProductivityPipe;
}());



/***/ }),

/***/ "./src/app/pipes/rated.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/rated.pipe.ts ***!
  \*************************************/
/*! exports provided: RatedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatedPipe", function() { return RatedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatedPipe = /** @class */ (function () {
    function RatedPipe() {
    }
    RatedPipe.prototype.transform = function (target, empcount) {
        if (target >= 7000)
            return target + "*";
        else
            return target;
    };
    RatedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'rated'
        })
    ], RatedPipe);
    return RatedPipe;
}());



/***/ }),

/***/ "./src/app/services/chartdata.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/chartdata.service.ts ***!
  \***********************************************/
/*! exports provided: ChartdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartdataService", function() { return ChartdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartdataService = /** @class */ (function () {
    function ChartdataService() {
        this.manhours = [
            { month: "January", hours: "3453", hours2: "4843" },
            { month: "Febraury", hours: "2453", hours2: "2843" },
            { month: "March", hours: "4453", hours2: "5843" },
            { month: "April", hours: "4956", hours2: "4113" },
            { month: "May", hours: "3452", hours2: "3843" },
            { month: "June", hours: "3251", hours2: "3146" },
            { month: "July", hours: "4788", hours2: "3713" },
            { month: "August", hours: "4677", hours2: "2643" },
            { month: "September", hours: "3898", hours2: "1943" },
            { month: "October", hours: "2884", hours2: "4456" },
            { month: "November", hours: "4808", hours2: "3797" },
            { month: "December", hours: "4899", hours2: "4051" }
        ];
    }
    ChartdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartdataService);
    return ChartdataService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationService = /** @class */ (function () {
    function LocationService() {
        this.locations = [
            {
                name: "Chennai Corporate office",
                description: "Located in Mount Road , spacious campus situated in heart of the city",
                revenue: 110,
                empcount: 14000,
                image: "chennai.jpg"
            },
            {
                name: "Bangalore Manufacturing unit",
                description: "Located in city outskirt , spacious campus could be reached from any part of the city",
                revenue: 67,
                empcount: 8000,
                image: "bangalore.jpg"
            },
            {
                name: "Jaipur Manufacturing unit",
                description: "Located in city outskirt , spacious campus could be reached from any part of the city",
                revenue: 11,
                empcount: 2000,
                image: "jaipur.jpg"
            },
            {
                name: "Nagpur Manufacturing unit",
                description: "Located in city outskirt ,  campus that could be reached in 20 minutes from anywhere in the city",
                revenue: 18,
                empcount: 3000,
                image: "mumbai.jpg"
            },
            {
                name: "Mumbai Corporate office",
                description: "Located in heart of the city, spacious campus could be reached from any part of the city",
                revenue: 98,
                empcount: 11500,
                image: "chennai.jpg"
            },
            {
                name: "Delhi Corporate office",
                description: "Located in heart of the city, spacious campus could be reached from any part of the city",
                revenue: 64,
                empcount: 4500,
                image: "delhi.jpg"
            },
            {
                name: "Madurai Manufacturing unit",
                description: "Located in heart of the city, spacious campus could be reached from any part of the city",
                revenue: 44,
                empcount: 6500,
                image: "madurai.jpeg"
            },
            {
                name: "Pune Corporate office",
                description: "Located in heart of the city, spacious campus could be reached from any part of the city",
                revenue: 33,
                empcount: 4500,
                image: "pune.jpg"
            },
            {
                name: "Kolkata Corporate office",
                description: "Located in heart of the city, spacious campus could be reached from any part of the city",
                revenue: 88,
                empcount: 9500,
                image: "kolkata.jpg"
            },
        ];
    }
    LocationService.prototype.getLocations = function () {
        return this.locations;
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get("http://localhost:3050/projects");
    };
    ProjectService.prototype.storeProject = function (obj) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://localhost:3050/projects", obj, this.httpOptions);
    };
    ProjectService.prototype.updateProject = function (obj, projectid) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put("http://localhost:3050/projects/" + projectid, obj, this.httpOptions);
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/supply.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/supply.service.ts ***!
  \********************************************/
/*! exports provided: SupplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyService", function() { return SupplyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SupplyService = /** @class */ (function () {
    function SupplyService(http) {
        this.http = http;
    }
    SupplyService.prototype.getSupplyMaster = function () {
        return this.http.get("http://localhost:49383/api/supplymasters/All");
    };
    SupplyService.prototype.getProducts = function () {
        return this.http.get("http://localhost:49383/api/supplymasters/GroupProduct");
    };
    SupplyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SupplyService);
    return SupplyService;
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
    production: true
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

module.exports = __webpack_require__(/*! D:\tvsapps\fullapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map