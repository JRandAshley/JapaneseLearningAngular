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

  @Input()
  detail!: Card;

  @Output()
  nextCardEvent = new EventEmitter<string>();

  constructor(){ }
  ngOnInit(): void{

  }
  flipCard(){
    this.isFlipped = !this.isFlipped;
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
