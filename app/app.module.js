"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var app_clubs_component_1 = require("./app.clubs.component");
var app_about_component_1 = require("./app.about.component");
var app_creatingclub_component_1 = require("./app.creatingclub.component");
var card_1 = require("@angular2-material/card");
var button_1 = require("@angular2-material/button");
var input_1 = require("@angular2-material/input");
var club_service_1 = require("./club.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            card_1.MdCardModule,
            button_1.MdButtonModule,
            input_1.MdInputModule
        ],
        declarations: [
            app_component_1.AppComponent,
            app_clubs_component_1.ClubsComponent,
            app_about_component_1.AboutComponent,
            app_creatingclub_component_1.CreatingClubComponent
        ],
        providers: [
            club_service_1.ClubService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map