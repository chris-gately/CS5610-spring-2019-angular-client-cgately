export class LessonServiceClient {
  LESSON_URL = 'http://localhost:8080/api/module/';
  HOST_URL = 'http://localhost:8080/api';

  findLessonsForModule(moduleId) {
    return fetch(this.LESSON_URL + moduleId + '/lesson')
      .then(response => response.json());
  }

  findLessonById(lessonId) {
    return fetch(this.HOST_URL + '/lesson/' + lessonId)
      .then(response => response.json());
  }
}
