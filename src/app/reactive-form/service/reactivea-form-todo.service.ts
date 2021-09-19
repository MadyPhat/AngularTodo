import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReactiveTodo } from 'src/app/interface/reactive-todo';


const _API = 'http://localhost:3000/reactive-todos';

@Injectable({
  providedIn: 'root'
})

export class ReactiveFormTodoService {
  constructor(private httpClient: HttpClient) { }

  getAllTodos(): Observable<ReactiveTodo[]> {
    return this.httpClient.get<ReactiveTodo[]>(_API);
  }

  getATodo(id: any): Observable<ReactiveTodo> {
    return this.httpClient.get<ReactiveTodo>(`${_API}/${id}`);
  }

  getStatus(status: any): Observable<ReactiveTodo[]>{
    return this.httpClient.get<ReactiveTodo[]>(`${_API}?status=${status}`);
  }

  addTodo(data: any): Observable<ReactiveTodo[]> {
    return this.httpClient.post<ReactiveTodo[]>(_API, data);
  }

  updateTodo(id: any, data: any): Observable<ReactiveTodo> {
    return this.httpClient.put<ReactiveTodo>(`${_API}/${id}`, data);
  }

  deleteTodo(id: any): Observable<ReactiveTodo> {
    return this.httpClient.delete<ReactiveTodo>(`${_API}/${id}`);
  }

  sortByPriorityTodo(keyword: any): Observable<ReactiveTodo>{
    return this.httpClient.get<ReactiveTodo>(`${_API}?priority=${keyword}`)
  }

}

