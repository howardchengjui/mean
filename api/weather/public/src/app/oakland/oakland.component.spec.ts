import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaklandComponent } from './oakland.component';

describe('OaklandComponent', () => {
  let component: OaklandComponent;
  let fixture: ComponentFixture<OaklandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaklandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaklandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
