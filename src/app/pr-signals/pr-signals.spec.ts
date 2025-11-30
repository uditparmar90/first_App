import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrSignals } from './pr-signals';

describe('PrSignals', () => {
  let component: PrSignals;
  let fixture: ComponentFixture<PrSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
