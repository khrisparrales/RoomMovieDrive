import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindbComponent } from './logindb.component';

describe('LogindbComponent', () => {
  let component: LogindbComponent;
  let fixture: ComponentFixture<LogindbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
