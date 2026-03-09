import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringSection } from './hiring-section';

describe('HiringSection', () => {
  let component: HiringSection;
  let fixture: ComponentFixture<HiringSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringSection],
    }).compileComponents();

    fixture = TestBed.createComponent(HiringSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
