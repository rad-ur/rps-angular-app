import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

import { ScoreService } from '../score.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [style({ opacity: 0 }), animate('0.8s')]),
    ]),
  ],
})
export class OutcomeComponent implements OnInit, AfterViewInit {
  @Input() pickedHand!: string;
  @Output() resetHand = new EventEmitter();
  
  animationState = 'hide';
  playerSource!: string;
  count!: number;
  showHand!: boolean;
  housePick!: string;
  houseSource!: string;
  message!: string;
  playerWins!: string;
  houseWins!: string;
  constructor(private scoreService: ScoreService) {
    
    this.playerWins = 'PLAYER WINS';
    this.houseWins = 'HOUSE WINS';
    this.showHand = false;
    this.count = 3;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.animationState = 'show';
  }

  ngOnChanges() {
    this.playerSource = `../../assets/images/icon-${this.pickedHand}.svg`;
    const countdown = setInterval(() => {
      this.count--;
      if (this.count === 0) {
        clearInterval(countdown);
        this.pickHouseHand();
        this.showHand = true;
        this.outcome();
      }
    }, 700);
  }

  pickHouseHand() {
    const pickArray = ['scissors', 'rock', 'paper'];
    const random = Math.floor(Math.random() * 3);
    this.housePick = pickArray[random];
    this.houseSource = `../../assets/images/icon-${this.housePick}.svg`;
  }

  outcome() {
    if (this.pickedHand === 'scissors' && this.housePick === 'rock') {
      this.message = this.houseWins;
      this.updateScore(this.message);
    } else if (this.pickedHand === 'rock' && this.housePick === 'scissors') {
      this.message = this.playerWins;
      this.updateScore(this.message);
    } else if (this.pickedHand === 'paper' && this.housePick === 'rock') {
      this.message = this.playerWins;
      this.updateScore(this.message);
    } else if (this.pickedHand === 'rock' && this.housePick === 'paper') {
      this.message = this.houseWins;
      this.updateScore(this.message);
    } else if (this.pickedHand === 'scissors' && this.housePick === 'paper') {
      this.message = this.playerWins;
      this.updateScore(this.message);
    } else if (this.pickedHand === 'paper' && this.housePick === 'scissors') {
      this.message = this.houseWins;
      this.updateScore(this.message);
    } else {
      this.message = 'DRAW';
    }
  }

  resetHandHandler() {
    this.resetHand.emit('');
  }

  updateScore(msg: string) {
    if (msg === 'HOUSE WINS') {
      this.scoreService.decrementScore();
    } else {
      this.scoreService.incrementScore();
    }
  }
}
