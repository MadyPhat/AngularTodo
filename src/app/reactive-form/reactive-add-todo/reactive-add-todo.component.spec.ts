import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddTodoComponent } from './reactive-add-todo.component';

describe('ReactiveAddTodoComponent', () => {
  let component: ReactiveAddTodoComponent;
  let fixture: ComponentFixture<ReactiveAddTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
