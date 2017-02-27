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
var club_1 = require("./club");
var angularfire2_1 = require("angularfire2");
var root;
var clubs = new Array;
var items;
var ClubService = (function () {
    function ClubService(af, firebaseApp) {
        this.af = af;
        this.storage = firebaseApp.storage();
    }
    ClubService.prototype.getClubs = function () {
        return this.af.database.list('/clubs');
    };
    ClubService.prototype.getClub = function (name) {
        var club;
        this.getClubs()
            .subscribe(function (clubs) {
            clubs.forEach(function (element) {
                if (element.$key === name)
                    club = new club_1.Club(element.$key, element.about);
            });
        });
        return club;
    };
    ClubService.prototype.createClub = function (name, about) {
        var itemObservable = this.af.database.object('/clubs/' + name);
        var stringUpdate = { about: about };
        itemObservable.update(stringUpdate);
    };
    return ClubService;
}());
ClubService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(angularfire2_1.FirebaseApp)),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire, Object])
], ClubService);
exports.ClubService = ClubService;
//# sourceMappingURL=club.service.js.map