import { Component } from '@angular/core';
import { Verb, UsableVerb } from '../../models/words';
import { DictionaryToolService } from '../../services/dictionary-tool.service';

@Component({
  selector: 'app-dictionary-conjugation',
  templateUrl: './dictionary-conjugation.component.html',
  styleUrl: './dictionary-conjugation.component.scss'
})
export class DictionaryConjugationComponent {
  selectedVerb!: Verb;
  pendingVerb: string = "";

  verbBase: string = "";//the conjugated form of the current verb
  baseIndex: number = 0;//the first hiragana of the current base ending
  currentBase: string = "3";//1=あ,2=い,3=う,4=え,5=お the currently selected base form
  baseStartHira: string = "";//the first hiragana of the base form's ending
  verbConjugated: string = "";//the verb when fully conjugated
  conjugationIndex: number = 20;//where the conjugation hiragana start
  selectedConjugation = "";//the purposed used for the most recent conjugation
  usage: string = "";//usage to be displayed

  displayCharacters: string = "";//verb as shown on the page

  box0: string = "";
  box1: string = "";
  box2: string = "";
  box3: string = "";
  box4: string = "";
  box5: string = "";
  box6: string = "";
  box7: string = "";
  box8: string = "";
  box9: string = "";
  box10: string = "";
  box11: string = "";
  box12: string = "";
  box13: string = "";
  box14: string = "";

  constructor(private service: DictionaryToolService) {
    this.updateVerb("hanasu");
  }
  updateVerb(newVerb: string){
    this.selectedVerb = this.service.getWordById(newVerb, "verb");
    this.verbBase = this.selectedVerb.dictionaryFormHK;
    this.baseIndex = this.verbBase.length-1;
    this.baseStartHira = this.verbBase[this.baseIndex];
    this.displayCharacters = this.verbBase;
    this.conjugationIndex = 20;

    this.updateUsage();
    this.updateDisplay();
  }
  changeVerbBase(base: string){
    if(base === "1"){
      this.verbBase = this.selectedVerb.B1FormHK;
      this.currentBase = "1";
    }
    if(base === "2"){
      this.verbBase = this.selectedVerb.B2FormHK;
      this.currentBase = "2";
    }
    if(base === "3"){
      this.verbBase = this.selectedVerb.B3FormHK;
      this.currentBase = "3";
    }
    if(base === "4"){
      this.verbBase = this.selectedVerb.B4FormHK;
      this.currentBase = "4";
    }
    if(base === "5"){
      this.verbBase = this.selectedVerb.B5FormHK;
      this.currentBase = "5";
    }
    this.baseStartHira = this.verbBase[this.baseIndex];
    this.displayCharacters = this.verbBase;
    this.conjugationIndex = 20;
    this.selectedConjugation = "";

    this.updateUsage();
    this.updateDisplay();
  }
  addConjugation(purpose: string){
    this.displayCharacters = this.service.useVerbBase(this.selectedVerb.id, purpose).HiraKata;
    this.selectedConjugation = purpose;
    this.conjugationIndex = this.verbBase.length;

    this.updateUsage();
    this.updateDisplay();
  }
  updateUsage(){
    this.usage = "";
    if(this.currentBase === "1"){
      if(this.selectedConjugation === "plainNeg"){
        this.usage = "Plain Negative Non-Past (will not)"
      }
      else if(this.selectedConjugation === "plainPastNeg"){
        this.usage = "Plain Negative Past (did not)"
      }
    }
    else if(this.currentBase === "2"){
      if(this.selectedConjugation === "politePresentFuture"){
        this.usage = "Polite Non-Past"
      }
      else if(this.selectedConjugation === "politePast"){
        this.usage = "Polite Past"
      }
      else if(this.selectedConjugation === "politeNeg"){
        this.usage = "Polite Negative Non-Past (will not)"
      }
      else if(this.selectedConjugation === "politePastNeg"){
        this.usage = "Polite Negative Past (did not)"
      }
      else if(this.selectedConjugation === "wantTo"){
        this.usage = "Want to (add です (desu) to make it polite)"
      }
      else if(this.selectedConjugation === "lets"){
        this.usage = "Let's Verb"
      }
    }
    else if(this.currentBase === "3"){
      if(this.selectedConjugation === ""){
        this.usage = "Plain Non-Past"
      }
    }
    if(this.currentBase === "4"){
      if(this.selectedConjugation === "ifVerb"){
        this.usage = "If Verb"
      }
      else if(this.selectedConjugation === "plainCan"){
        this.usage = "Plain Can Verb (only Godan, becomes Ichidan)"
      }
      else if(this.selectedConjugation === "politeCan"){
        this.usage = "Polite Can Verb (only Godan, becomes Ichidan)"
      }
    }
    if(this.currentBase === "5"){
      if(this.selectedConjugation === "tryTo"){
        this.usage = "Try to Verb"
      }
      else if(this.selectedConjugation === "volitional"){
        this.usage = "pending usage"
      }
    }
  }
  updateDisplay(){
    if(this.displayCharacters.length > 0){this.box0=this.displayCharacters[0]}else{this.box0=""};
    if(this.displayCharacters.length > 1){this.box1=this.displayCharacters[1]}else{this.box1=""};
    if(this.displayCharacters.length > 2){this.box2=this.displayCharacters[2]}else{this.box2=""};
    if(this.displayCharacters.length > 3){this.box3=this.displayCharacters[3]}else{this.box3=""};
    if(this.displayCharacters.length > 4){this.box4=this.displayCharacters[4]}else{this.box4=""};
    if(this.displayCharacters.length > 5){this.box5=this.displayCharacters[5]}else{this.box5=""};
    if(this.displayCharacters.length > 6){this.box6=this.displayCharacters[6]}else{this.box6=""};
    if(this.displayCharacters.length > 7){this.box7=this.displayCharacters[7]}else{this.box7=""};
    if(this.displayCharacters.length > 8){this.box8=this.displayCharacters[8]}else{this.box8=""};
    if(this.displayCharacters.length > 9){this.box9=this.displayCharacters[9]}else{this.box9=""};
    if(this.displayCharacters.length > 10){this.box10=this.displayCharacters[10]}else{this.box10=""};
    if(this.displayCharacters.length > 11){this.box11=this.displayCharacters[11]}else{this.box11=""};
    if(this.displayCharacters.length > 12){this.box12=this.displayCharacters[12]}else{this.box12=""};
    if(this.displayCharacters.length > 13){this.box13=this.displayCharacters[13]}else{this.box13=""};
    if(this.displayCharacters.length > 14){this.box14=this.displayCharacters[14]}else{this.box14=""};
  }
}
