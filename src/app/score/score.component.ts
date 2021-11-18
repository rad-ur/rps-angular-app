import { Component, OnInit,DoCheck} from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit,DoCheck {
  score!:number;
  constructor(private scoreService:ScoreService) {
      this.score=0;
   }

  ngOnInit(): void {

  }
  ngDoCheck(){
    if(this.score!==this.scoreService.getScore()){
    this.score=this.scoreService.getScore();}
  }
}
