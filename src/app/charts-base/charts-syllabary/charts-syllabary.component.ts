import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-charts-syllabary',
  templateUrl: './charts-syllabary.component.html',
  styleUrl: './charts-syllabary.component.scss'
})
export class ChartsSyllabaryComponent {
  showDakuten: boolean = false;
  showHandakuten: boolean = false;
  showRomanji: boolean = false;
  showHiragana: boolean = true;
  showKatakana: boolean = false;
  showKanji: boolean = true;
  test: string = "testtext";
}
