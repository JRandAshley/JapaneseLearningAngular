import { Component } from '@angular/core';
import { Noun, Verb } from '../../models/words';
import { DictionaryToolService } from '../../services/dictionary-tool.service';

@Component({
  selector: 'app-dictionary-display',
  templateUrl: './dictionary-display.component.html',
  styleUrl: './dictionary-display.component.scss'
})

export class DictionaryDisplayComponent {
  wordSelected: boolean = false;
  selectedWordType!: string;
  selectedWordId!: string;
  selectedNoun!: Noun;
  selectedVerb!: Verb;
  NounDictionary;
  VerbDictionary
  CurrentDisplay;

  constructor(private service: DictionaryToolService) {
    this.NounDictionary = service.getNouns();
    this.VerbDictionary = service.getVerbs();
    this.CurrentDisplay = service.getAllWords();
  }

  showWord(wordId: string, wordType: string) {
    this.wordSelected = true;
    this.selectedWordType = wordType;
    if(wordType === "noun"){
      this.selectedNoun = this.service.getWordById(wordId, wordType)
    }
    if(wordType === "verb"){
      this.selectedVerb = this.service.getWordById(wordId, wordType)
    }
  }
}
