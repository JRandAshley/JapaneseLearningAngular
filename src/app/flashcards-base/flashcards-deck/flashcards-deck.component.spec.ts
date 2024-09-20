import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsDeckComponent } from './flashcards-deck.component';

describe('FlashcardsDeckComponent', () => {
  let component: FlashcardsDeckComponent;
  let fixture: ComponentFixture<FlashcardsDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardsDeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashcardsDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
