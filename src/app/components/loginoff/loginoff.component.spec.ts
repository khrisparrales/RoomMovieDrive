import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginoffComponent } from './loginoff.component';

describe('LoginoffComponent', () => {
  let component: LoginoffComponent;
  let fixture: ComponentFixture<LoginoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
