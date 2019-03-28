import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];

  constructor(private service: TopicServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  loadTopics(lessonId) {
    this.lessonId = lessonId;
    this.service.findTopicsForLesson(lessonId)
      .then(topics => this.topics = topics);
  }

  setParams(params) {
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    this.topicId = params.topicId;
    this.loadTopics(this.lessonId);
  }

  ngOnInit() {
  }

}
