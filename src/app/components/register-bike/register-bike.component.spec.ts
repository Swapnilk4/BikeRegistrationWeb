import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBikeComponent } from './register-bike.component';

describe('RegisterBikeComponent', () => {
  let component: RegisterBikeComponent;
  let fixture: ComponentFixture<RegisterBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
