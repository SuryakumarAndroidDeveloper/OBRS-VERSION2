/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObrsComponent } from './obrs.component';

describe('ObrsComponent', () => {
  let component: ObrsComponent;
  let fixture: ComponentFixture<ObrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
