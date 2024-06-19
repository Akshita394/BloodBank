import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequestRegistrationComponent } from './blood-request-registration.component';

describe('BloodRequestRegistrationComponent', () => {
  let component: BloodRequestRegistrationComponent;
  let fixture: ComponentFixture<BloodRequestRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodRequestRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodRequestRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
