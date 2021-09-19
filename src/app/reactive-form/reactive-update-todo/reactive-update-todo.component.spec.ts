import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUpdateTodoComponent } from './reactive-update-todo.component';

describe('ReactiveUpdateTodoComponent', () => {
  let component: ReactiveUpdateTodoComponent;
  let fixture: ComponentFixture<ReactiveUpdateTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveUpdateTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveUpdateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
