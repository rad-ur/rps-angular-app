import { Component, ViewChild } from '@angular/core';
import { ScoreService } from './score.service';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pickedHand!:string;
  
  @ViewChild(ModalComponent) modal!:ModalComponent;
  constructor(private scoreService:ScoreService){
  }
  
  setPickedHand(msg:string){
    this.pickedHand=msg;
  }
 
  showRulesHandler(){
    this.modal.showModal();
  }
    
   resetScore(){
     this.scoreService.resetScore();
   }

}


