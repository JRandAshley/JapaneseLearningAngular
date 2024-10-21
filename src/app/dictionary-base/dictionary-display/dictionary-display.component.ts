import { Component } from '@angular/core';
import { Particle, Noun, Verb, UsableVerb } from '../../models/words';
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
  ParticleDictionary;
  NounDictionary;
  VerbDictionary
  CurrentDisplay;

  showVerbUseCase: boolean = false;
  useCase!: UsableVerb;
  verbPurpose: string = "";

  constructor(private service: DictionaryToolService) {
    this.ParticleDictionary = service.getParticles();
    this.NounDictionary = service.getNouns();
    this.VerbDictionary = service.getVerbs();
    this.CurrentDisplay = service.getAllWords();
  }

  showWord(wordId: string, wordType: string) {
    this.wordSelected = true;
    this.selectedWordType = wordType;
    if(wordType === "particle"){
      this.selectedVerb = this.service.getWordById(wordId, wordType);
    }
    if(wordType === "noun"){
      this.selectedNoun = this.service.getWordById(wordId, wordType);
    }
    if(wordType === "verb"){
      this.selectedVerb = this.service.getWordById(wordId, wordType);
    }
  }

  showUseCase(wordId: string, purpose: string) {
    this.showVerbUseCase = true;
    this.useCase = this.service.useVerbBase(wordId, purpose);
  }
  updatePurpose(event: Event) {
    this.verbPurpose = (event.target as HTMLInputElement).value;
  }
}
