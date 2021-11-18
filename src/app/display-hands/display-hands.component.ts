import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-display-hands',
  templateUrl: './display-hands.component.html',
  styleUrls: ['./display-hands.component.css'],
  animations: [
    trigger('fadeOut', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', [animate('0.4s')]),
    ]),
  ],
})
export class DisplayHandsComponent implements OnInit {
  @Output() pick = new EventEmitter();
  animationState = 'show';
  constructor() {}

  ngOnInit(): void {}

  receivePick(msg: string) {
    this.onPick(msg);
  }

  onPick(msg: string) {
    this.animationState = 'hide';
    setTimeout(() => {
      this.pick.emit(msg);
    }, 400);
  }
}
