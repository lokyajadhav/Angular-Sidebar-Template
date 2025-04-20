import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TaskCreateDialogComponent } from '../task-create-dialog/task-create-dialog.component';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  displayedColumns: string[] = ['title', 'description', 'assignedTo', 'status','action'];
  dataSource = new MatTableDataSource<any>();
  statusOptions: string[] = ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'];
  selectedStatus:any
  constructor(private dialog: MatDialog)
  {

  }
  ngOnInit(): void {
    this.fetchTasks();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskCreateDialogComponent, {
      width: '565px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchTasks();
      }
    });
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


  updateStatus(task:any, status:any): void {
  }
}
