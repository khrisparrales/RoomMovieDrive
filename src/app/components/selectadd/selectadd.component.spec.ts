import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectaddComponent } from './selectadd.component';

describe('SelectaddComponent', () => {
  let component: SelectaddComponent;
  let fixture: ComponentFixture<SelectaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
