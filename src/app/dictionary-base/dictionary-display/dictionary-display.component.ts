import { Component } from '@angular/core';
import { Particle, Noun, Verb, UsableVerb } from '../../models/words';
import { DictionaryToolService } from '../../services/dictionary-tool.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dictionary-display',
  templateUrl: './dictionary-display.component.html',
  styleUrl: './dictionary-display.component.scss'
})

export class DictionaryDisplayComponent {
  wordSelected: boolean = false;
  selectedWordType!: string;
  selectedWordId!: string;
  selectedParticle!: Particle;
  selectedNoun!: Noun;
  selectedVerb!: Verb;

  searchText: string = "";
  searchParticles: boolean = true;
  searchNouns: boolean = true;
  searchVerbs: boolean = true;
  CurrentDisplay;

  showVerbUseCase: boolean = false;
  useCase!: UsableVerb;
  verbPurpose: string = "";

  constructor(private service: DictionaryToolService) {
    this.CurrentDisplay = service.getAllWords();
  }

  showWord(wordId: string, wordType: string) {
    this.wordSelected = true;
    this.selectedWordType = wordType;
    if(wordType === "particle"){
      this.selectedParticle = this.service.getWordById(wordId, wordType);
    }
    if(wordType === "noun"){
      this.selectedNoun = this.service.getWordById(wordId, wordType);
    }
    if(wordType === "verb"){
      this.selectedVerb = this.service.getWordById(wordId, wordType);
    }
  }

  searchSubmit(){
    this.CurrentDisplay = this.service.searchWords(this.searchText, this.searchParticles, this.searchNouns, this.searchVerbs);
  }
  showUseCase(wordId: string, purpose: string) {
    this.showVerbUseCase = true;
    this.useCase = this.service.useVerbBase(wordId, purpose);
  }
  updatePurpose(event: Event) {
    this.verbPurpose = (event.target as HTMLInputElement).value;
  }
}
