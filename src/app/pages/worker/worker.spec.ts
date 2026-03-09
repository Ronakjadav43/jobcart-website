import { ComponentFixture, TestBed } from '@angular/core/testing';

import { worker } from './worker';

describe('worker', () => {
  let component: worker;
  let fixture: ComponentFixture<worker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [worker],
    }).compileComponents();

    fixture = TestBed.createComponent(worker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
