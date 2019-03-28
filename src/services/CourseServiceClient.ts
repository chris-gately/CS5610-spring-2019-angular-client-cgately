import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  COURSE_URL = 'https://thawing-ridge-10669.herokuapp.com/api/course';
  
  findAllCourses = () =>
    fetch(this.COURSE_URL)
      .then(response => response.json())

  findModulesForCourse = courseId =>
    fetch(this.COURSE_URL + courseId + '/module')
      .then(response => response.json())

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
