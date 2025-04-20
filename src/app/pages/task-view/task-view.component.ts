import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  displayedColumns: string[] = ['title', 'description', 'assignedTo', 'status'];
  dataSource = new MatTableDataSource<any>();


  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks()
  {
   const Tasks = [
      {
        title: 'Fix Login Bug',
        description: 'Resolve issue in login form validation',
        assignedTo: 'Ravi',
        status: 'IN_PROGRESS'
      },
      {
        title: 'Design Dashboard',
        description: 'Create UI for dashboard page',
        assignedTo: 'Madhav',
        status: 'NOT_STARTED'
      }
    ];
    this.dataSource.data=Tasks
  }

}
