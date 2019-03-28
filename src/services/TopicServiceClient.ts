export class TopicServiceClient {
  TOPIC_URL = 'http://localhost:8080/api/lesson/';
  HOST_URL = 'http://localhost:8080/api';

  findTopicsForLesson(lessonId) {
    return fetch(this.TOPIC_URL + lessonId + '/topic')
      .then(response => response.json());
  }

  findTopicById(topicId) {
    return fetch(this.HOST_URL + '/topic/' + topicId)
      .then(response => response.json());
  }
}
