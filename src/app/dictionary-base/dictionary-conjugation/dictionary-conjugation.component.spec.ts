import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryConjugationComponent } from './dictionary-conjugation.component';

describe('DictionaryConjugationComponent', () => {
  let component: DictionaryConjugationComponent;
  let fixture: ComponentFixture<DictionaryConjugationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DictionaryConjugationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DictionaryConjugationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
