export class TopicServiceClient {
  TOPIC_URL = 'https://thawing-ridge-10669.herokuapp.com/api/lesson/';
  HOST_URL = 'https://thawing-ridge-10669.herokuapp.com/api';

  findTopicsForLesson(lessonId) {
    return fetch(this.TOPIC_URL + lessonId + '/topic')
      .then(response => response.json());
  }

  findTopicById(topicId) {
    return fetch(this.HOST_URL + '/topic/' + topicId)
      .then(response => response.json());
  }
}
