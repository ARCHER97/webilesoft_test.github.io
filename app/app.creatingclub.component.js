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
var club_1 = require("./club");
var club_service_1 = require("./club.service");
var common_1 = require("@angular/common");
var CreatingClubComponent = (function () {
    function CreatingClubComponent(clubService, location) {
        this.clubService = clubService;
        this.location = location;
        this.club = new club_1.Club('', '', '');
    }
    CreatingClubComponent.prototype.createClub = function () {
        console.log(this.club.name + " " + this.club.about + " " + this.club.image);
        this.clubService.createClub(this.club.name, this.club.about, this.club.image);
        this.location.back();
    };
    return CreatingClubComponent;
}());
CreatingClubComponent = __decorate([
    core_1.Component({
        selector: 'creating-club-app',
        template: "\n    <md-card class=\"demo-card demo-basic\">\n      <md-card-content>\n        <div>\n          Creating club\n        </div>\n        <form>\n          <md-input  placeholder=\"Name of club\" [(ngModel)]=\"club.name\" \n                [ngModelOptions]=\"{standalone: true}\" style=\"width: 100%\" ></md-input>\n          <md-input  placeholder=\"About\" [(ngModel)]=\"club.about\"\n                [ngModelOptions]=\"{standalone: true}\"  style=\"width:  100%\"></md-input>\n          <md-input  placeholder=\"Image\" [(ngModel)]=\"club.image\" \n                [ngModelOptions]=\"{standalone: true}\" style=\"width:  100%\"></md-input>\n        </form>\n      </md-card-content>\n      <md-card-actions>\n        <button md-button (click)=\"createClub()\">Create</button>\n      </md-card-actions>\n    </md-card>\n  "
    }),
    __metadata("design:paramtypes", [club_service_1.ClubService, common_1.Location])
], CreatingClubComponent);
exports.CreatingClubComponent = CreatingClubComponent;
//# sourceMappingURL=app.creatingclub.component.js.map