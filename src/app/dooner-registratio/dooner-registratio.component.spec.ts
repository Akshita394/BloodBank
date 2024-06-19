import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoonerRegistratioComponent } from './dooner-registratio.component';

describe('DoonerRegistratioComponent', () => {
  let component: DoonerRegistratioComponent;
  let fixture: ComponentFixture<DoonerRegistratioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoonerRegistratioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoonerRegistratioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
