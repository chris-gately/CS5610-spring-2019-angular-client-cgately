import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  courseId;
  moduleId;
  lessonId;
  lessons = [];

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) {
    route.params.subscribe(params => this.setParams(params));
  }

  loadLessons(moduleId) {
    this.moduleId = moduleId;
    this.service.findLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons);
  }

  setParams(params) {
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    this.loadLessons(this.moduleId);
  }

  ngOnInit() {
  }

}
