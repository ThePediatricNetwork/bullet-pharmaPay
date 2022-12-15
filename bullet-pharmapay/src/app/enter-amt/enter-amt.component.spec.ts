import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAmtComponent } from './enter-amt.component';

describe('EnterAmtComponent', () => {
  let component: EnterAmtComponent;
  let fixture: ComponentFixture<EnterAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterAmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
