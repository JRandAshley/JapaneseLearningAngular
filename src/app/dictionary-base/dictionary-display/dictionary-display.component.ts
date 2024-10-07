import { Component } from '@angular/core';
import { Noun } from '../../models/words';

@Component({
  selector: 'app-dictionary-display',
  templateUrl: './dictionary-display.component.html',
  styleUrl: './dictionary-display.component.scss'
})
export class DictionaryDisplayComponent {
  Noun: Noun[] = [{
    id: "!template",
    hasKanji: false,
    Kanji: "string",
    hiraKata: "!string",
    romanji: "!string",
    english: "!string",
    notes: "string",
    synonyms: [],
    tags: []
  },{
  id: "1",
  hasKanji: false,
  Kanji: "",
  hiraKata: "ほん",
  romanji: "hon",
  english: "book(s)",
  notes: "",
  synonyms: [],
  tags: []
},{
  id: "2",
  hasKanji: false,
  Kanji: "",
  hiraKata: "",
  romanji: "hana",
  english: "flower(s)",
  notes: "",
  synonyms: [],
  tags: []
},{
  id: "3",
  hasKanji: false,
  Kanji: "",
  hiraKata: "テーブル",
  romanji: "Teburu",
  english: "table",
  notes: "",
  synonyms: [],
  tags: []
},{
  id: "4",
  hasKanji: false,
  Kanji: "",
  hiraKata: "ドア",
  romanji: "doa",
  english: "door",
  notes: "",
  synonyms: [],
  tags: []
},{
  id: "5",
  hasKanji: false,
  Kanji: "",
  hiraKata: "りんご",
  romanji: "ringo",
  english: "apple",
  notes: "",
  synonyms: [],
  tags: []
}]
}
