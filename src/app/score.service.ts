import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  score!:number;
  
  constructor() { 
    this.score=0;
    if (sessionStorage.getItem('saveScore')) {
      this.score= parseInt(sessionStorage.getItem('saveScore')!);
    }
  }

  resetScore(){
    sessionStorage.setItem('saveScore',""+0);
    this.score=0;
  }
 
  getScore(){
    return this.score;
  }
  
  incrementScore(){
    this.score++;
    sessionStorage.setItem('saveScore',""+this.score);
  }
  decrementScore(){
    this.score--;
    sessionStorage.setItem('saveScore',""+this.score);
  }
}
