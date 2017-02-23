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
var core_1 = require('@angular/core');
var CreatingClubComponent = (function () {
    function CreatingClubComponent() {
        this.club = {
            name: '',
            about: '',
            image: ''
        };
    }
    CreatingClubComponent.prototype.createClub = function () {
        console.log(this.club.name + " " + this.club.about + " " + this.club.image);
    };
    CreatingClubComponent = __decorate([
        core_1.Component({
            selector: 'creating-club-app',
            template: "\n    <h2>{{club.name}} details!</h2>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"club.name\" placeholder=\"name\">\n    </div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"club.about\" placeholder=\"about\">\n    </div>\n    <div>\n      <label>image: </label>\n      <input [(ngModel)]=\"club.image\" placeholder=\"image\">\n    </div>\n    <button (click)=\"createClub()\">Create</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CreatingClubComponent);
    return CreatingClubComponent;
}());
exports.CreatingClubComponent = CreatingClubComponent;
//# sourceMappingURL=app.creatingclub.component.js.map