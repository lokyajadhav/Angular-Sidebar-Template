import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { TasksManangerComponent } from './pages/tasks-mananger/tasks-mananger.component';
import { ResourcesComponent } from './pages/resources/resources.component';




const routes: Routes = [
  { path: 'tasks-view', component: TaskViewComponent },
  { path: 'tasks-manager', component: TasksManangerComponent },
  { path: 'resources', component: ResourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
