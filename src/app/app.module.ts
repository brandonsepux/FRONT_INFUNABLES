import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CalendarsComponent } from './components/calendars/calendars.component';
import { ComplaintComponent } from './components/complaints/complaint.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: "courses", component: CoursesComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "home", component: HomeComponent},
  { path: "students", component: StudentsComponent},
  { path: "calendars", component: CalendarsComponent},
  { path: "complaints", component: ComplaintComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StudentsComponent,
    CoursesComponent,
    CalendarsComponent,
    ComplaintComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }