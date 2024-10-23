import { Injectable } from '@angular/core';
import { Noun, Verb, UsableVerb, Word } from '../models/words';
import { Nouns, Particles, Verbs } from '../datasets/dictionaryData';

// @Injectable({
//   providedIn: 'root'
// })

export class DictionaryToolService {
  getWordById(targetId: string, targetType: string) {
    let foundWord!: any;
    if(targetType === "particle"){
      foundWord = Particles.find(item => item.id === targetId);
    }
    else if(targetType === "noun"){
      foundWord = Nouns.find(item => item.id === targetId);
    }
    else if(targetType === "verb"){
      foundWord = Verbs.find(item => item.id === targetId);
    }
    else{
      foundWord= null;
    }
    return foundWord;
  }
  searchWords(searchText: string, includeParticles: boolean, includeNouns: boolean, includeVerbs: boolean){
    let acceptableWords: Array<Word> = [];
    let nextWord: Word;
    
    if(includeParticles){
      Particles.forEach(element => {
        if(element.Kanji.includes(searchText)){
          nextWord = {id: element.id, type: "particle", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.hiraKata.includes(searchText)){
          nextWord = {id: element.id, type: "particle", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.romanji.includes(searchText)){
          nextWord = {id: element.id, type: "particle", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.english.includes(searchText)){
          nextWord = {id: element.id, type: "particle", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
      });
    }

    if(includeNouns){
      Nouns.forEach(element => {
        if(element.Kanji.includes(searchText)){
          nextWord = {id: element.id, type: "noun", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.hiraKata.includes(searchText)){
          nextWord = {id: element.id, type: "noun", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.romanji.includes(searchText)){
          nextWord = {id: element.id, type: "noun", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.english.includes(searchText)){
          nextWord = {id: element.id, type: "noun", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
          acceptableWords.push(nextWord);
        }
      });
    }

    if(includeVerbs){
      Verbs.forEach(element => {
        if(element.dictionaryFormK.includes(searchText)){
          nextWord = {id: element.id, type: "verb", kanji: element.dictionaryFormK, hiraKata: element.dictionaryFormHK, romanji: element.dictionaryFormRomanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.dictionaryFormHK.includes(searchText)){
          nextWord = {id: element.id, type: "verb", kanji: element.dictionaryFormK, hiraKata: element.dictionaryFormHK, romanji: element.dictionaryFormRomanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.dictionaryFormRomanji.includes(searchText)){
          nextWord = {id: element.id, type: "verb", kanji: element.dictionaryFormK, hiraKata: element.dictionaryFormHK, romanji: element.dictionaryFormRomanji, english: element.english}
          acceptableWords.push(nextWord);
        }
        else if(element.english.includes(searchText)){
          nextWord = {id: element.id, type: "verb", kanji: element.dictionaryFormK, hiraKata: element.dictionaryFormHK, romanji: element.dictionaryFormRomanji, english: element.english}
          acceptableWords.push(nextWord);
        }
      });
    }
    return acceptableWords;
  }
  getParticles() {
    return Particles;
  }
  getNouns() {
    return Nouns;
  }
  getVerbs() {
    return Verbs;
  }
  getAllWords() {
    let arrayToReturn: Array<Word> = [];
    let nextWord: Word;
    Particles.forEach(element => {
      nextWord = {id: element.id, type: "particle", kanji: element.Kanji, hiraKata: element.hiraKata, romanji: element.romanji, english: element.english}
      arrayToReturn.push(nextWord);
    });
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

  useVerbBase(targetId: string, purpose: string) {
    let usableVerbK: string = "";
    let usableVerbHK: string = "";
    let usableVerbRomanji: string = "";

    let verbBases: Verb = this.getWordById(targetId, "verb");
    if(purpose === "politePresentFuture"){
      usableVerbK = verbBases.B2FormK+"ます";
      usableVerbHK = verbBases.B2FormHK+"ます";
      usableVerbRomanji = verbBases.B2FormRomanji+"masu";
    }
    else if(purpose === "politePast"){
      usableVerbK = verbBases.B2FormK+"ました";
      usableVerbHK = verbBases.B2FormHK+"ました";
      usableVerbRomanji = verbBases.B2FormRomanji+"mashita";
    }
    else if(purpose === "politeNeg"){
      usableVerbK = verbBases.B2FormK+"ません";
      usableVerbHK = verbBases.B2FormHK+"ません";
      usableVerbRomanji = verbBases.B2FormRomanji+"masen";
    }
    else if(purpose === "politePastNeg"){
      usableVerbK = verbBases.B2FormK+"ませんでした";
      usableVerbHK = verbBases.B2FormHK+"ませんでした";
      usableVerbRomanji = verbBases.B2FormRomanji+"masen deshita";
    }
    else if(purpose === "plainPresentFuture"){
      usableVerbK = verbBases.B3FormK;
      usableVerbHK = verbBases.B3FormHK;
      usableVerbRomanji = verbBases.B3FormRomanji;
    }
    else if(purpose === "plainPast"){
      usableVerbK = verbBases.BTaFormK;
      usableVerbHK = verbBases.BTaFormHK;
      usableVerbRomanji = verbBases.BTaFormRomanji;
    }
    else if(purpose === "plainNeg"){
      usableVerbK = verbBases.B1FormK+"ない";
      usableVerbHK = verbBases.B1FormHK+"ない";
      usableVerbRomanji = verbBases.B1FormRomanji+"nai"
    }
    else if(purpose === "plainPastNeg"){
      usableVerbK = verbBases.B1FormK+"なかった";
      usableVerbHK = verbBases.B1FormHK+"なかった";
      usableVerbRomanji = verbBases.B1FormRomanji+"nakatta";
    }
    else if(purpose === "wantTo"){
      usableVerbK = verbBases.B2FormK+"たい";
      usableVerbHK = verbBases.B2FormHK+"たい";
      usableVerbRomanji = verbBases.B2FormRomanji+"tai";
    }
    else if(purpose === "ifVerb"){
      usableVerbK = verbBases.B4FormK+"ば";
      usableVerbHK = verbBases.B4FormHK+"ば";
      usableVerbRomanji = verbBases.B4FormRomanji+"ba";
    }
    else if(purpose === "politeCan"){
      usableVerbK = verbBases.B4FormK+"ます";
      usableVerbHK = verbBases.B4FormHK+"ます";
      usableVerbRomanji = verbBases.B4FormRomanji+"masu";
    }
    else if(purpose === "plainCan"){
      usableVerbK = verbBases.B4FormK+"る";
      usableVerbHK = verbBases.B4FormHK+"る";
      usableVerbRomanji = verbBases.B4FormRomanji+"ru";
    }
    else if(purpose === "volitional"){
      usableVerbK = verbBases.B5FormK;
      usableVerbHK = verbBases.B5FormHK;
      usableVerbRomanji = verbBases.B5FormRomanji;
    }
    else if(purpose === "tryTo"){
      usableVerbK = verbBases.B5FormK+"とする";
      usableVerbHK = verbBases.B5FormHK+"とする";
      usableVerbRomanji = verbBases.B5FormRomanji+"to suru";
    }
    else if(purpose === "wantSomeoneElseTo"){
      usableVerbK = verbBases.BTeFormK+"欲しい";
      usableVerbHK = verbBases.BTeFormHK+"ほしい";
      usableVerbRomanji = verbBases.BTeFormRomanji+"hoshii";
    }
    else if(purpose === "politeCommand"){
      usableVerbK = verbBases.BTeFormK+"下さい";
      usableVerbHK = verbBases.BTeFormHK+"ください";
      usableVerbRomanji = verbBases.BTeFormRomanji+"kudasai";
    }
    else if(purpose === "plainCommand"){
      usableVerbK = verbBases.BTeFormK;
      usableVerbHK = verbBases.BTeFormHK;
      usableVerbRomanji = verbBases.BTeFormRomanji;
    }
    else if(purpose === "plainPresentlyVerbingAni"){
      usableVerbK = verbBases.BTeFormK+"いる";
      usableVerbHK = verbBases.BTeFormHK+"いる";
      usableVerbRomanji = verbBases.BTeFormRomanji+"iru";
    }
    else if(purpose === "plainPresentlyVerbing"){
      usableVerbK = verbBases.BTeFormK+"います";
      usableVerbHK = verbBases.BTeFormHK+"います";
      usableVerbRomanji = verbBases.BTeFormRomanji+"imasu";
    }
    else if(purpose === "ifAndWhen"){
      usableVerbK = verbBases.BTaFormK+"ら";
      usableVerbHK = verbBases.BTaFormHK+"ら";
      usableVerbRomanji = verbBases.BTaFormRomanji+"ra";
    }
    else if(purpose === "doSuchThingsAs"){
      usableVerbK = verbBases.BTaFormK+"りする";
      usableVerbHK = verbBases.BTaFormHK+"りする";
      usableVerbRomanji = verbBases.BTaFormRomanji+"ri suru";
    }
    else if(purpose === "lets"){
      usableVerbK = verbBases.B2FormK+"ましょう";
      usableVerbHK = verbBases.B2FormHK+"ましょう";
      usableVerbRomanji = verbBases.B2FormRomanji+"mashou";
    }
    let returnedVerb: UsableVerb = {Kanji: usableVerbK, HiraKata: usableVerbHK, romanji: usableVerbRomanji}
    return returnedVerb;
  }
  constructor() { 
    
  }
}
