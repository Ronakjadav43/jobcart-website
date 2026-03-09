import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedLogos } from './trusted-logos';

describe('TrustedLogos', () => {
  let component: TrustedLogos;
  let fixture: ComponentFixture<TrustedLogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedLogos],
    }).compileComponents();

    fixture = TestBed.createComponent(TrustedLogos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
