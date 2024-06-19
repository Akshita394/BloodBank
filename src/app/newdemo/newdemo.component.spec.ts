import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdemoComponent } from './newdemo.component';

describe('NewdemoComponent', () => {
  let component: NewdemoComponent;
  let fixture: ComponentFixture<NewdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
