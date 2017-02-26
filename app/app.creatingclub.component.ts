import { Component, Inject, ElementRef, OnInit } from '@angular/core';
import { Club } from './club';
import { ClubService } from './club.service';
import { Location }    from '@angular/common';
import { FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';

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
          <div>
            <div class="col-sm-6"><div class="file_upload"><input type='file' id="imgInp"/></div></div>
            <div class="col-sm-6"><img id="blah" src="#" alt="your image" style="width: 100%; height: 30%" /></div>
          </div>
        </form>   
      </md-card-content>
      <md-card-actions> 
        <button md-button (click)="createClub()">Create</button>
      </md-card-actions>
    </md-card>  
    {{exceptionText}}
  `,
  styles: [`
    .file_upload{     
      border: 1px solid #ccc;     
      border-radius: 3px;     
      box-shadow: 0 0 5px rgba(0,0,0,0.1);     
      transition: box-shadow 0.1s linear 
    } 
    .file_upload.focus{     
      box-shadow: 0 0 5px rgba(0,30,255,0.4) 
    } 
    .file_upload > button{     
      background: #7300df;     
      transition: background 0.2s;     
      border: 1px solid rgba(0,0,0,0.1);     
      border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);     
      border-radius: 2px;     
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);     
      color: #fff;     
      text-shadow: #6200bd 0 -1px 0;     
      overflow: hidden;     white-space: nowrap;     
      text-overflow: ellipsis 
    } 
    .file_upload:hover > button{     
      background: #6200bd;     
      text-shadow: #5d00b3 0 -1px 0 
    } 
    .file_upload:active > button{     
      background: #5d00b3;     
      box-shadow: 0 0 3px rgba(0,0,0,0.3) inset 
    } 
  `]
})
export class CreatingClubComponent implements OnInit{
  club: Club;
  exceptionText: any;
  imageInBase64: any;
  storageRef: any;
  constructor(private clubService: ClubService, private location: Location, private _elRef: ElementRef,
              private router: Router,
              @Inject(FirebaseApp) firebaseApp: any){
    this.club = new Club('','');
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
          reader.readAsDataURL(this.files[0]);
       }
    })
  }

  createClub(){
    if( this.club.name==null || this.club.about==null ||
        this.club.name=="" || this.club.about==""){
      this.exceptionText = "enter all params";
    }else{
      this.clubService.createClub(this.club.name,this.club.about); 
      if(this.imageInBase64){
        var storageChildRef = this.storageRef.child('images/').child(this.club.name+'.jpg');
        storageChildRef.putString(this.imageInBase64, 'data_url').then(function(snapshot) {
          CreatingClubComponent.prototype.imageInBase64 = null;
          console.log('UUploaded a data_url string!');
        })
      }
      setTimeout(() => { 
       this.router.navigate(['/clubs']); 
      }, 1300);
    }
  }
}
