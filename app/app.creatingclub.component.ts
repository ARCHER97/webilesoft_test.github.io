import { Component, Inject, ElementRef, OnInit } from '@angular/core';
import { Club } from './club';
import { ClubService } from './club.service';
import { Location }    from '@angular/common';
import { FirebaseApp } from 'angularfire2';

declare var jQuery: any;

@Component({
  selector: 'creating-club-app',
  template: `
    <md-card class="demo-card demo-basic">
      <md-card-content>
        <div>
          Creating club
        </div>
        <form enctype="multipart/form-data" method="post">
          <md-input  placeholder="Name of club" [(ngModel)]="club.name" 
                [ngModelOptions]="{standalone: true}" style="width: 100%" ></md-input>
          <md-input  placeholder="About" [(ngModel)]="club.about"
                [ngModelOptions]="{standalone: true}"  style="width:  100%"></md-input>
          <md-input  placeholder="Image" [(ngModel)]="club.image" 
                [ngModelOptions]="{standalone: true}" style="width:  100%"></md-input>
          <div>
            <input type='file' id="imgInp" />
            <img id="blah" src="#" alt="your image" />
          </div>
        </form>
      {{exceptionText}}  
      </md-card-content>
      <md-card-actions> 
        <button md-button (click)="createClub()">Create</button>
      </md-card-actions>
    </md-card>  
  `
})
export class CreatingClubComponent implements OnInit{
  club: Club;
  exceptionText: any;
  imageInBase64: any;
  storageRef: any;
  constructor(private clubService: ClubService, private location: Location, private _elRef: ElementRef,
              @Inject(FirebaseApp) firebaseApp: any){
    this.club = new Club('','','');
    this.storageRef = firebaseApp.storage().ref();
  }
  ngOnInit(): any{
    jQuery(this._elRef.nativeElement).find('#imgInp').change(function(){
       if (this.files && this.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e: any) {
            CreatingClubComponent.prototype.imageInBase64 = e.target.result;
            $('#blah').attr('src', e.target.result);
          }
          console.log(this.files[0])
          reader.readAsDataURL(this.files[0]);
       }
    })
  }

  createClub(){
    if(this.club.name==null || this.club.about==null || this.club.image==null ||
       this.club.name=="" || this.club.about=="" || this.club.image==""){
      this.exceptionText = "enter all params";
    }else{
      this.clubService.createClub(this.club.name,this.club.about,this.club.image);
      var storageChildRef = this.storageRef.child(this.club.name+'.jpg');
      storageChildRef.putString(this.imageInBase64, 'data_url').then(function(snapshot) {
        console.log('UUploaded a data_url string!');
      });
      this.location.back();
    }
  }
}
