import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card';
//import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-flashcards-details',
  templateUrl: './flashcards-details.component.html',
  styleUrl: './flashcards-details.component.scss'
})
export class FlashcardsDetailsComponent implements OnInit {
  isFlipped: boolean = false;
  japSide: boolean = true;
  sideDeterminer: number = Math.floor(Math.random()*(100));

  @Input()
  detail!: Card;

  @Output()
  nextCardEvent = new EventEmitter<string>();

  constructor(){ }
  ngOnInit(): void{
    if(this.sideDeterminer > 50){
      this.japSide = false;
    }
  }

  flipCard(){
    this.isFlipped = !this.isFlipped;
    this.japSide = !this.japSide;
  }
  goToNextCard(cardResult: string){
    this.nextCardEvent.emit(cardResult);
  }
  incorrect(){
    this.flipCard();
    this.goToNextCard("incorrect");
  }
  correct(){
    this.flipCard();
    this.goToNextCard("correct");
  }
}
