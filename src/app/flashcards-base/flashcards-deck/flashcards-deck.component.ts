import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-flashcards-deck',
  templateUrl: './flashcards-deck.component.html',
  styleUrl: './flashcards-deck.component.scss'
})
export class FlashcardsDeckComponent implements OnInit {
  currentCard: number = 0;
  deck1: Card[] = [{
    id: 1,
    frontSideA: "itte",
    frontSideB: "",
    backSideA: "Go!",
    backSideB: ""
  },
  {
    id: 2,
    frontSideA: "u shiro",
    frontSideB: "",
    backSideA: "behind",
    backSideB: "" 
  },
  {
    id: 3,
    frontSideA: "-masen ka",
    frontSideB: "",
    backSideA: "would you like to...?",
    backSideB: "" 
  },
  {
    id: 4,
    frontSideA: "naka",
    frontSideB: "",
    backSideA: "inside",
    backSideB: "" 
  },
  {
    id: 5,
    frontSideA: "kirai na",
    frontSideB: "",
    backSideA: "hate",
    backSideB: "" 
  },
  {
    id: 6,
    frontSideA: "watashi",
    frontSideB: "",
    backSideA: "I/me",
    backSideB: "" 
  }];

  ngOnInit(): void {
    //console.log("on init");
  }

  setCurrentCardTo(cardIndex: number){
    this.currentCard = cardIndex;
  }

  receiveNextCardEvent($event: string) {
    if(this.currentCard<this.deck1.length-1){
      this.currentCard = this.currentCard + 1;
    }
    else{
      this.currentCard=0;
    }
    console.log($event);
  }
}
