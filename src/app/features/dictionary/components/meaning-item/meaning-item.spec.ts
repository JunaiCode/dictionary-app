import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningItem } from './meaning-item';

describe('MeaningItem', () => {
  let component: MeaningItem;
  let fixture: ComponentFixture<MeaningItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeaningItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MeaningItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
