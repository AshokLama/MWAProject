import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './course/courses.component';

const routes: Routes = [
  {
    path: 'courses', component: CoursesComponent,
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
