import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

import { NgApexchartsModule } from "ng-apexcharts";
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import  { BodyComponent } from './body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { TasksManangerComponent } from './pages/tasks-mananger/tasks-mananger.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  
    BodyComponent,
        TaskViewComponent,
        TasksManangerComponent,
        ResourcesComponent,
        LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    NgApexchartsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatOptionModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
