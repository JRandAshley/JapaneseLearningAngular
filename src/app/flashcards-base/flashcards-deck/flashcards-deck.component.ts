import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Card } from '../../models/card';

@Component({
  selector: 'app-flashcards-deck',
  templateUrl: './flashcards-deck.component.html',
  styleUrl: './flashcards-deck.component.scss'
})
export class FlashcardsDeckComponent implements OnInit {
  deck1: Card[] = [{
    id: 1,
    japKanji: "",
    japHiraKata: "",
    japRomanji: "itte",
    japNotes: "",
    english: "Go!",
    example: "",
    engNotes: ""
  },
  {
    id: 2,
    japKanji: "",
    japHiraKata: "",
    japRomanji: "u shiro",
    japNotes: "",
    english: "behind",
    example: "" ,
    engNotes: ""
  },
  {
    id: 3,
    japKanji: "",
    japHiraKata: "",
    japRomanji: "-masen ka",
    japNotes: "",
    english: "would you like to...?",
    example: "" ,
    engNotes: ""
  },
  {
    id: 4,
    japKanji: "",
    japHiraKata: "",
    japRomanji: "naka",
    japNotes: "",
    english: "inside",
    example: "" ,
    engNotes: ""
  },
  {
    id: 5,
    japKanji: "",
    japHiraKata: "",
    japRomanji: "kirai na",
    japNotes: "",
    english: "hate",
    example: "" ,
    engNotes: ""
  },
  {
    id: 6,
    japKanji: "",
    japHiraKata: "",
    japRomanji: "watashi",
    japNotes: "",
    english: "I/me",
    example: "",
    engNotes: ""
  }];

  deck2: Card[] = [{
    id: 1,
    japKanji: "fsa1",
    japHiraKata: "fsb1",
    japRomanji: "",
    japNotes: "",
    english: "bsa1",
    example: "bsb1",
    engNotes: ""
  },
  {
    id: 2,
    japKanji: "fsa2",
    japHiraKata: "fsb2",
    japRomanji: "",
    japNotes: "",
    english: "bsa2",
    example: "bsb2",
    engNotes: ""
  },
  {
    id: 3,
    japKanji: "fsa3",
    japHiraKata: "fsb3",
    japRomanji: "",
    japNotes: "",
    english: "bsa3",
    example: "bsb3",
    engNotes: ""
  }];

  numbersDeck: Card[] = [{
    id: 1,
    japKanji: "一",
    japHiraKata: "いち",
    japRomanji: "ichi",
    japNotes: "",
    english: "one",
    example: "",
    engNotes: ""
  },
  {
    id: 2,
    japKanji: "二",
    japHiraKata: "に",
    japRomanji: "ni",
    japNotes: "",
    english: "two",
    example: "",
    engNotes: ""
  },
  {
    id: 3,
    japKanji: "三",
    japHiraKata: "さん",
    japRomanji: "san",
    japNotes: "",
    english: "three",
    example: "",
    engNotes: ""
  },
  {
    id: 4,
    japKanji: "四",
    japHiraKata: "し、よん",
    japRomanji: "shi, yon",
    japNotes: "yon after 10",
    english: "four",
    example: "",
    engNotes: "yon after 10"
  },
  {
    id: 5,
    japKanji: "五",
    japHiraKata: "ご",
    japRomanji: "go",
    japNotes: "",
    english: "five",
    example: "",
    engNotes: ""
  },
  {
    id: 6,
    japKanji: "六",
    japHiraKata: "ろく",
    japRomanji: "roku",
    japNotes: "",
    english: "six",
    example: "",
    engNotes: ""
  },
  {
    id: 7,
    japKanji: "七",
    japHiraKata: "しち、なな",
    japRomanji: "shichi, nana",
    japNotes: "nana after 10",
    english: "seven",
    example: "",
    engNotes: "nana after 10"
  },
  {
    id: 8,
    japKanji: "ハ",
    japHiraKata: "はち",
    japRomanji: "hachi",
    japNotes: "",
    english: "eight",
    example: "",
    engNotes: ""
  },
  {
    id: 9,
    japKanji: "九",
    japHiraKata: "きゅう",
    japRomanji: "hyuu / ku",
    japNotes: "",
    english: "nine",
    example: "",
    engNotes: ""
  },
  {
    id: 10,
    japKanji: "十",
    japHiraKata: "じゅう",
    japRomanji: "juu",
    japNotes: "",
    english: "ten",
    example: "",
    engNotes: ""
  },
  {
    id: 11,
    japKanji: "百",
    japHiraKata: "ひゃく",
    japRomanji: "hyaku",
    japNotes: "",
    english: "hundred",
    example: "",
    engNotes: ""
  },
  {
    id: 12,
    japKanji: "test",
    japHiraKata: "test",
    japRomanji: "test",
    japNotes: "test",
    english: "test",
    example: "test",
    engNotes: "test, test, test, test, test, test, test"
  }];

  currentDeck: Card[] = this.deck1;
  currentCard: number = 0;

  numberFlipped: number = 0;
  numberCorrect: number = 0;
  numberIncorrect: number = 0;
  score: number = 0;

  ngOnInit(): void {
    this.currentCard = Math.floor(Math.random()*(this.currentDeck.length))
  }

  setCurrentCardTo(cardIndex: number){
    this.currentCard = cardIndex;
  }
  changeDeck(deckName: string){
    this.numberFlipped = 0;
    this.numberCorrect = 0;
    this.numberIncorrect = 0;
    // this.currentDeck = eval("this."+deckName);
    if(deckName==="deck1"){
      this.currentDeck=this.deck1;
    }
    if(deckName==="deck2"){
      this.currentDeck=this.deck2;
    }
    if(deckName==="numbersDeck"){
      this.currentDeck=this.numbersDeck;
    }
    this.currentCard = Math.floor(Math.random()*(this.currentDeck.length));
  }

  receiveNextCardEvent($event: string) {
    // if(this.currentCard<this.deck1.length-1){
    //   this.currentCard = this.currentCard + 1;
    // }
    // else{
    //   this.currentCard=0;
    // }
    var possibleNewCard = Math.floor(Math.random()*(this.currentDeck.length))
    if(possibleNewCard===this.currentCard){
      if(possibleNewCard<this.currentDeck.length-1){
        possibleNewCard = possibleNewCard + 1;
      }
      else{
        possibleNewCard = 0;
      }
    }
    this.currentCard = possibleNewCard;
    this.numberFlipped = this.numberFlipped + 1;
    if($event==="correct"){
      this.numberCorrect = this.numberCorrect + 1;
    }
    if($event==="incorrect"){
      this.numberIncorrect = this.numberIncorrect + 1;
    }
    this.score = (this.numberCorrect/this.numberFlipped)*100;
  }
}
