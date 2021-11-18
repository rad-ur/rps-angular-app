import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHandsComponent } from './display-hands.component';

describe('DisplayHandsComponent', () => {
  let component: DisplayHandsComponent;
  let fixture: ComponentFixture<DisplayHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
