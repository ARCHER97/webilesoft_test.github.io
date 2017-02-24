import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }   from './app.component';
import { ClubsComponent } from './app.clubs.component';
import { AboutComponent } from './app.about.component';
import { CreatingClubComponent } from './app.creatingclub.component';

import { MdCardModule }         from '@angular2-material/card';
import { MdButtonModule }         from '@angular2-material/button';
import { MdInputModule }         from '@angular2-material/input';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './firebase.config';

import { ClubService }         from './club.service';



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    AngularFireModule.initializeApp(firebaseConfig) 
  ],
  declarations: [ 
    AppComponent,
    ClubsComponent,
    AboutComponent,
    CreatingClubComponent
  ],
  providers: [
    ClubService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
