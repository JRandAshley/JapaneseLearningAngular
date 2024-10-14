import { Injectable } from '@angular/core';
import { Noun, Verb, Word } from '../models/words';
import { Nouns, Verbs } from '../datasets/dictionaryData';

// @Injectable({
//   providedIn: 'root'
// })

export class DictionaryToolService {
  getWordById(targetId: string, targetType: string) {
    let foundWord!: any;
    if(targetType === "noun"){
      foundWord = Nouns.find(item => item.id === targetId);
    }
    else if(targetType === "verb"){
      foundWord = Verbs.find(item => item.id === targetId);
    }
    return foundWord;
  }
  getNouns() {
    return Nouns;
  }
  getVerbs() {
    return Verbs;
  }
  getAllWords() {
    let arrayToReturn: Array<Word> = [];
    let nextWord;
    Nouns.forEach(element => {
      nextWord = {id: element.id, type: "noun", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
      arrayToReturn.push(nextWord);
    });
    Verbs.forEach(element => {
      nextWord = {id: element.id, type: "verb", kanji: element.dictionaryFormK, hiraKata: element.dictionaryFormHK, romanji: element.dictionaryFormRomanji, english: element.english}
      arrayToReturn.push(nextWord);
    });
    return arrayToReturn;
  }

  constructor() { 
    
  }
}
