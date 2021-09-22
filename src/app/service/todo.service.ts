import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './../interface/todo';

const _API = 'http://localhost:3000/todos';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id(id: any, data: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(_API);
  }

  getATodo(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${_API}/${id}`);
  }

  getStatus(status: string): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${_API}?status=${status}`);
  }

  addTodo(data: Todo): Observable<Todo[]> {
    return this.httpClient.post<Todo[]>(_API, data);
  }

  updateTodo(id: number, data: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${_API}/${id}`, data);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${_API}/${id}`);
  }

  sortByPriorityTodo(keyword: string): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${_API}?priority=${keyword}`)
  }
}
