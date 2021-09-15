import { TestBed } from '@angular/core/testing';

import { DrivenFormTodoService } from './driven-form-todo.service';

describe('DrivenFormTodoService', () => {
  let service: DrivenFormTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrivenFormTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
