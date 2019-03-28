export class LessonServiceClient {
  LESSON_URL = 'https://thawing-ridge-10669.herokuapp.com/api/module/';
  HOST_URL = 'https://thawing-ridge-10669.herokuapp.com/api';

  findLessonsForModule(moduleId) {
    return fetch(this.LESSON_URL + moduleId + '/lesson')
      .then(response => response.json());
  }

  findLessonById(lessonId) {
    return fetch(this.HOST_URL + '/lesson/' + lessonId)
      .then(response => response.json());
  }
}
