import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient,private router:Router) {}


  loggedInn(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
    const event={
          
      "data":"Null",
      "loginStatus":false
    }
    localStorage.clear();
   this.triggerTaskAssigned(event)
   this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem('role')!=undefined) return true; else return false;
  }

  login(email: string, password: string, role: string): Observable<any> {
    const payload = {
      "email":email,
      "password":password
    }

    return this.http.post(`${this.apiUrl}/login`, payload);
  }
}
