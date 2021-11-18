import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HandComponent } from './hand/hand.component';
import { ScoreComponent } from './score/score.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayHandsComponent } from './display-hands/display-hands.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgBodyScrollLockModule } from 'ng-body-scroll-lock';


@NgModule({
  declarations: [
    AppComponent,
   
    
    HandComponent,
             ScoreComponent,
             HeaderComponent,
             ModalComponent,
             ButtonComponent,
             DisplayHandsComponent,
             OutcomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgBodyScrollLockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
