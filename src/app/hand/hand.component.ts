import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  @Input() className!:string;
  @Output() pick= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
   
  }

  onPick(){
    this.pick.emit(this.className);
  }

}
