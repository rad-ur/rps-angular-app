import { Component, OnInit} from '@angular/core';
import { NgBodyScrollLockService } from 'ng-body-scroll-lock';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
 showRules!:boolean;
 
  constructor(private bodyScroll:NgBodyScrollLockService) {
    this.showRules=false;
   }

  ngOnInit(): void {
   
  }

  hideModal(){
    this.showRules=false;
    this.bodyScroll.EnableBodyScroll('document');
  }

  showModal(){
    this.showRules=true;
    this.bodyScroll.DisableBodyScroll('document');
  }
    
}
