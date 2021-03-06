"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var webApiManager_service_1 = require("./service/webApiManager.service");
var auth_guard_service_1 = require("./service/auth.guard.service");
var auth_service_1 = require("./service/auth.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var topmenu_component_1 = require("./components/topmenu/topmenu.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [auth_guard_service_1.AuthGuard, auth_service_1.AuthService, webApiManager_service_1.WebApiManager]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, http_1.HttpModule, ng2_toastr_1.ToastModule.forRoot(), forms_1.ReactiveFormsModule],
            declarations: [topmenu_component_1.TopMenuComponent],
            exports: [topmenu_component_1.TopMenuComponent],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map