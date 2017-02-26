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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var angularfire2_1 = require("angularfire2");
var club_service_1 = require("./club.service");
var AboutComponent = (function () {
    function AboutComponent(clubService, route, location, firebaseApp) {
        this.clubService = clubService;
        this.route = route;
        this.location = location;
        this.firebaseApp = firebaseApp;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.club = this.clubService.getClub(this.route.snapshot.params['name']);
        this.getLogoClub(this.club.name);
    };
    AboutComponent.prototype.goBack = function () {
        this.location.back();
    };
    AboutComponent.prototype.getLogoClub = function (name) {
        var _this = this;
        var storageRef = this.firebaseApp.storage().ref().child('images/' + name + '.jpg');
        storageRef.getDownloadURL().then(function (url) {
            _this.club.image = url;
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-app',
        template: "\n    <div *ngIf=\"club\">\n      <md-card>\n        <md-card-header>\n            <img md-card-avatar [src]=\"club.image\">\n            <md-card-title><h3>{{club.name}}</h3></md-card-title>\n        </md-card-header>\n        <md-card-content>\n            <pre>{{club.about}}</pre>\n        </md-card-content>\n      </md-card>\n      <md-card-actions>\n        <button md-button (click)=\"goBack()\">Back</button>\n      </md-card-actions>\n    </div>\n  "
    }),
    __param(3, core_1.Inject(angularfire2_1.FirebaseApp)),
    __metadata("design:paramtypes", [club_service_1.ClubService,
        router_1.ActivatedRoute,
        common_1.Location, Object])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=app.about.component.js.map