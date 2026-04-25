import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryPage } from './dictionary-page';

describe('DictionaryPage', () => {
  let component: DictionaryPage;
  let fixture: ComponentFixture<DictionaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
