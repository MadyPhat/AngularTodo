import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/interface/todo';
import { Observable } from 'rxjs';


const _API = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})

export class DrivenFormTodoService {
  constructor(private httpClient: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(_API);
  }

  getATodo(id: any): Observable<Todo> {
    return this.httpClient.get<Todo>(`${_API}/${id}`);
  }

  getStatus(status: any): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${_API}?complete=${status}`);
  }

  addTodo(data: any): Observable<Todo[]> {
    return this.httpClient.post<Todo[]>(_API, data);
  }

  updateTodo(id: any, data: any): Observable<Todo> {
    return this.httpClient.put<Todo>(`${_API}/${id}`, data);
  }

  sortByPriorityTodo(keyword: any): Observable<Todo>{
    return this.httpClient.get<Todo>(`${_API}?priority=${keyword}`)
  }

  deleteTodo(id: any): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${_API}/${id}`);
  }

}
