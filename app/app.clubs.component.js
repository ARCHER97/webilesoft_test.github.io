"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var club_service_1 = require("./club.service");
var ClubsComponent = (function () {
    function ClubsComponent(clubService, router) {
        this.clubService = clubService;
        this.router = router;
    }
    ClubsComponent.prototype.getHeroes = function () {
        this.clubs = this.clubService.getClubs();
    };
    ClubsComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ClubsComponent.prototype.gotoDetail = function (club) {
        this.router.navigate(['/about', club.name]);
    };
    return ClubsComponent;
}());
ClubsComponent = __decorate([
    core_1.Component({
        selector: 'clubs-app',
        template: "\n  <!--angular2-material card and button-->\n    <div class=\"clubs\">\n      <div *ngFor=\"let club of clubs\" (click)=\"gotoDetail(club)\" style=\"margin-top: 5px\">\n        <md-card>\n          <md-card-title-group>\n              <img md-card-sm-image src={{club.image}}>\n              <md-card-title>{{club.name}}</md-card-title>\n          </md-card-title-group>\n        </md-card>\n      </div>\n    </div>\n  ",
        providers: [club_service_1.ClubService]
    }),
    __metadata("design:paramtypes", [club_service_1.ClubService,
        router_1.Router])
], ClubsComponent);
exports.ClubsComponent = ClubsComponent;
//# sourceMappingURL=app.clubs.component.js.map