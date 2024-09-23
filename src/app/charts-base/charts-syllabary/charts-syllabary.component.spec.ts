import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsSyllabaryComponent } from './charts-syllabary.component';

describe('ChartsSyllabaryComponent', () => {
  let component: ChartsSyllabaryComponent;
  let fixture: ComponentFixture<ChartsSyllabaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartsSyllabaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartsSyllabaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
