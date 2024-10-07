import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryDisplayComponent } from './dictionary-display.component';

describe('DictionaryDisplayComponent', () => {
  let component: DictionaryDisplayComponent;
  let fixture: ComponentFixture<DictionaryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DictionaryDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DictionaryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
