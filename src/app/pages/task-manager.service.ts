import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private loggedIn = false;
  private apiUrl = 'http://localhost:8080';

  private taskAssignedSource = new Subject<any>();

  
  taskAssigned$ = this.taskAssignedSource.asObservable();

 

  
  triggerTaskAssigned(task: any) {
    this.taskAssignedSource.next(task);
  }

  constructor(private http: HttpClient) {}


  loggedInn(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
   this.triggerTaskAssigned(false)
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string, role: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.apiUrl}/login`, payload);
  }
}
