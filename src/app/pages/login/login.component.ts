import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskManagerService } from '../task-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder, private loginService: TaskManagerService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['Developer']  // default role
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
    const { email, password, role } = this.loginForm.value;
     let event={}
      if(role === "Manager")
      {
         event={
          
          "data":"Manager",
          "loginStatus":true
        }
        
      }
      else{
        event={
          
          "data":"Developer",
          "loginStatus":true
        }
      }
console.log(event)
console.log("role: ",role)
      this.loginService.triggerTaskAssigned(event)
       
           this.loginService.loggedInn(); 
          this.router.navigate(['/tasks-view']);
      // this.loginService.login(email, password, role).subscribe(
      //   (response: any) => {
      //     console.log('Login successful', response);
      //     // handle navigation based on role
      //     this.loginService.triggerTaskAssigned(true);
      //     this.loginService.loggedInn(); // Mark user as logged in
      //     this.router.navigate(['/tasks-view']);
      //   },
      //   (error: any) => {
      //     console.error('Login failed', error);
      //   }
      // );
    }
  }
}
