export class ModuleServiceClient {
  MODULE_URL = 'https://thawing-ridge-10669.herokuapp.com/api/course/COURSE_ID/module';
  HOST_URL = 'https://thawing-ridge-10669.herokuapp.com/api';

  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }

  findModuleById(moduleId) {
    return fetch(this.HOST_URL + '/module/' + moduleId)
      .then(response => response.json());
  }
}
