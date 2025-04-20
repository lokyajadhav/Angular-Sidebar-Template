import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TaskCreateDialogComponent } from '../task-create-dialog/task-create-dialog.component';
import { TaskManagerService } from '../task-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {
  assignForm!: FormGroup;
  displayedColumns: string[] = ['title', 'description', 'assignedTo', 'status','action'];
  dataSource = new MatTableDataSource<any>();
  statusOptions: string[] = ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'];
  selectedStatus:any
  availableDevelopers:any=[];
   Tasks = [
    {
      id:1,
      title: 'Fix Login Bug',
      description: 'Resolve issue in login form validation',
      assignedTo: 'Ravi',
      status: 'IN_PROGRESS'
    },
    {
      id:4,
      title: 'Design Dashboard',
      description: 'Create UI for dashboard page',
      assignedTo: 'Madhav',
      status: 'NOT_STARTED'
    }
  ];
  constructor(private fb: FormBuilder, private dialog: MatDialog, private taskService:TaskManagerService)
  {

  }
  ngOnInit(): void {
    this.fetchTasks();
    this. fetchAvailableDevelopers();

    this.assignForm = this.fb.group({
      taskId: ['', Validators.required],
      userId: ['', Validators.required]
    });
  }
  onAssignTask()
  {
    const { taskId, userId } = this.assignForm.value;
    this.taskService.assignTask(taskId,userId).subscribe(
      (response: any) => {
       
     alert("task has been assigned")
     this.fetchAvailableDevelopers();
     this.fetchTasks();
        
        
      },
      (error: any) => {
        alert(' failed to assign task to developer');
      }
    );
  }
  fetchAvailableDevelopers()
  {
    this.taskService.fetchAvailableDevelopers().subscribe(
      (response: any) => {
       
     this.availableDevelopers=response;
       console.log(this.availableDevelopers)
        
        
      },
      (error: any) => {
        alert(' failed to available developers');
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskCreateDialogComponent, {
      width: '565px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchTasks();
       this. fetchAvailableDevelopers();
      }
    });
  }
  fetchTasks()
  {
  
    this.dataSource.data=this.Tasks
  }


  updateStatus(task:any, status:any): void {
  }
}
