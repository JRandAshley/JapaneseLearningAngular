import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsDetailsComponent } from './flashcards-details.component';

describe('FlashcardsDetailsComponent', () => {
  let component: FlashcardsDetailsComponent;
  let fixture: ComponentFixture<FlashcardsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashcardsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashcardsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
