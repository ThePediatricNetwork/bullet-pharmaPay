import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMobComponent } from './reg-mob.component';

describe('RegMobComponent', () => {
  let component: RegMobComponent;
  let fixture: ComponentFixture<RegMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegMobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
