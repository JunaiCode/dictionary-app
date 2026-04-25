import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningsList } from './meanings-list';

describe('MeaningsList', () => {
  let component: MeaningsList;
  let fixture: ComponentFixture<MeaningsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeaningsList],
    }).compileComponents();

    fixture = TestBed.createComponent(MeaningsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
