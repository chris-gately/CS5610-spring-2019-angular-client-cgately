export class LessonServiceClient {
  LESSON_URL = 'http://localhost:8080/api/module/';
  findLessonsForModule(moduleId) {
    return fetch(this.LESSON_URL + moduleId + '/lesson')
      .then(response => response.json());
  }
}
