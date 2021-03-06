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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var club_1 = require("./club");
var club_service_1 = require("./club.service");
var angularfire2_1 = require("angularfire2");
var ClubsComponent = (function () {
    function ClubsComponent(clubService, router, firebaseApp) {
        this.clubService = clubService;
        this.router = router;
        this.firebaseApp = firebaseApp;
    }
    ClubsComponent.prototype.getClubs = function () {
        var _this = this;
        this.clubService.getClubs()
            .subscribe(function (clubs) {
            _this.allClubs = new Array;
            clubs.forEach(function (element) {
                _this.allClubs.push(new club_1.Club(element.$key, element.about));
            });
            _this.allClubs.forEach(function (club) {
                _this.getImageByName(club.name);
            });
        });
    };
    ClubsComponent.prototype.ngOnInit = function () {
        this.getClubs();
    };
    ClubsComponent.prototype.gotoDetail = function (club) {
        this.router.navigate(['/about', club.name]);
    };
    ClubsComponent.prototype.getImageByName = function (name) {
        var _this = this;
        var storageRef = this.firebaseApp.storage().ref().child('images/' + name + '.jpg');
        storageRef.getDownloadURL().then(function (url) {
            _this.allClubs.forEach(function (element) {
                if (element.name === name)
                    element.image = url;
            });
        });
    };
    return ClubsComponent;
}());
ClubsComponent = __decorate([
    core_1.Component({
        selector: 'clubs-app',
        template: "\n    <div class=\"clubs\">\n      <div *ngFor=\"let club of allClubs\" (click)=\"gotoDetail(club)\" style=\"margin-top: 5px\">\n        <md-card>\n          <md-card-title-group>\n              <img md-card-sm-image [src]=\"club.image\">\n              <md-card-title>{{club.name}}</md-card-title>\n          </md-card-title-group>\n        </md-card>\n      </div>\n    </div>\n  ",
        providers: [club_service_1.ClubService]
    }),
    __param(2, core_1.Inject(angularfire2_1.FirebaseApp)),
    __metadata("design:paramtypes", [club_service_1.ClubService,
        router_1.Router, Object])
], ClubsComponent);
exports.ClubsComponent = ClubsComponent;
//# sourceMappingURL=app.clubs.component.js.map