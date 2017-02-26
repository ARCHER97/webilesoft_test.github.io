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
var club_service_1 = require("./club.service");
var common_1 = require("@angular/common");
var angularfire2_1 = require("angularfire2");
var router_1 = require("@angular/router");
var CreatingClubComponent = CreatingClubComponent_1 = (function () {
    function CreatingClubComponent(clubService, location, _elRef, router, firebaseApp) {
        this.clubService = clubService;
        this.location = location;
        this._elRef = _elRef;
        this.router = router;
        this.club = new club_1.Club('', '');
        this.storageRef = firebaseApp.storage().ref();
    }
    CreatingClubComponent.prototype.ngOnInit = function () {
        jQuery(this._elRef.nativeElement).find('#imgInp').change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    CreatingClubComponent_1.prototype.imageInBase64 = e.target.result;
                    $('#blah').attr('src', e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    };
    CreatingClubComponent.prototype.createClub = function () {
        var _this = this;
        if (this.club.name == null || this.club.about == null ||
            this.club.name == "" || this.club.about == "") {
            this.exceptionText = "enter all params";
        }
        else {
            this.clubService.createClub(this.club.name, this.club.about);
            if (this.imageInBase64) {
                var storageChildRef = this.storageRef.child('images/').child(this.club.name + '.jpg');
                storageChildRef.putString(this.imageInBase64, 'data_url').then(function (snapshot) {
                    CreatingClubComponent_1.prototype.imageInBase64 = null;
                    console.log('UUploaded a data_url string!');
                });
            }
            setTimeout(function () {
                _this.router.navigate(['/clubs']);
            }, 1300);
        }
    };
    return CreatingClubComponent;
}());
CreatingClubComponent = CreatingClubComponent_1 = __decorate([
    core_1.Component({
        selector: 'creating-club-app',
        template: "\n    <md-card class=\"demo-card demo-basic\">\n      <md-card-content>\n        <div>\n          Creating club\n        </div>\n        <form enctype=\"multipart/form-data\" method=\"post\">\n          <md-input  placeholder=\"Name of club\" [(ngModel)]=\"club.name\" \n                [ngModelOptions]=\"{standalone: true}\" style=\"width: 100%\" ></md-input>\n          <md-input  placeholder=\"About\" [(ngModel)]=\"club.about\"\n                [ngModelOptions]=\"{standalone: true}\"  style=\"width:  100%\"></md-input>\n          <div>\n            <div class=\"col-sm-6\"><input type='file' id=\"imgInp\" /></div>\n            <div class=\"col-sm-6\"><img id=\"blah\" src=\"#\" alt=\"your image\" style=\"width: 100%; height: 30%\" /></div>\n          </div>\n        </form>   \n      </md-card-content>\n      <md-card-actions> \n        <button md-button (click)=\"createClub()\">Create</button>\n      </md-card-actions>\n    </md-card>  \n    {{exceptionText}}\n  "
    }),
    __param(4, core_1.Inject(angularfire2_1.FirebaseApp)),
    __metadata("design:paramtypes", [club_service_1.ClubService, common_1.Location, core_1.ElementRef,
        router_1.Router, Object])
], CreatingClubComponent);
exports.CreatingClubComponent = CreatingClubComponent;
var CreatingClubComponent_1;
//# sourceMappingURL=app.creatingclub.component.js.map