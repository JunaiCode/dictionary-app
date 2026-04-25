import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordResult } from './word-result';

describe('WordResult', () => {
  let component: WordResult;
  let fixture: ComponentFixture<WordResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordResult],
    }).compileComponents();

    fixture = TestBed.createComponent(WordResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
