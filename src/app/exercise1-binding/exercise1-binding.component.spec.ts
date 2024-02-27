import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1BindingComponent } from './exercise1-binding.component';

describe('Exercise1BindingComponent', () => {
  let component: Exercise1BindingComponent;
  let fixture: ComponentFixture<Exercise1BindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise1BindingComponent]
    });
    fixture = TestBed.createComponent(Exercise1BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
