import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses = [];
  modules = [];
  selectedCourseId = 0;
  selectedModuleId = 0;

  constructor(private service: CourseServiceClient) { }

  selectCourse = courseId => {
    this.selectedCourseId = courseId;
    this.service.findModulesForCourse(courseId).then(modules => this.modules = modules);
  }

  selectModule = moduleId => {
    this.selectedModuleId = moduleId;
  }

  ngOnInit() {
    this.service.findAllCourses().then(courses => {this.courses = courses;
    });
  }

}
