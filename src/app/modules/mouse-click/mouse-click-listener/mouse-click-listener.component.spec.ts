import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseClickListenerComponent } from './mouse-click-listener.component';

describe('MouseClickListenerComponent', () => {
  let component: MouseClickListenerComponent;
  let fixture: ComponentFixture<MouseClickListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseClickListenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseClickListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
