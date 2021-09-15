import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveListTodoComponent } from './reactive-list-todo.component';

describe('ReactiveListTodoComponent', () => {
  let component: ReactiveListTodoComponent;
  let fixture: ComponentFixture<ReactiveListTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveListTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveListTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
