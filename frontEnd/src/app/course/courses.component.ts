import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course-service.service';
import { CourseModule } from './course.module';

@Component({
  selector: 'app-courses',
  template: `
    <table>
      <tr>
        <th>Name</th>
        <th>Code</th>
        <th>Action</th>
      </tr>
      <tr *ngFor="let course of courses" >
        <td>{{ course.name }}</td>
        <td>{{ course.code }}</td> 
        <td>
          <button (click)="deleteCourse(course._id)">Delete course</button>
        </td>
      </tr>
    </table>
  `,
  styles: [
    'td { text-align: center; }',
    'table {width: 50%;}',
    '#course_id {display: none}',
    'table, th, td {border: 1px solid black;}'
  ]
})
export class CoursesComponent implements OnInit {
  courses: any = [];
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
  }

  fetchCourses(): void {
    this.courseService.getCourses().subscribe(
      (courses: any) => {
        this.courses = courses.payload;
        console.log(courses);
      },
      (error: any) => {
        console.log(error);
      });
  }

  deleteCourse(id: string): void {
    this.courseService.deleteCourse(id).subscribe(
      (courses: any) => {
        console.log(courses.payload);
        this.fetchCourses();
      },
      (error: any) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.fetchCourses();
  }

}
