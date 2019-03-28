import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courseId;
  moduleId;
  modules = [];

  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  loadModules(courseId) {
    this.courseId = courseId;
    this.service.findModulesForCourse(courseId).then(modules => this.modules = modules);
  }

  setParams(params) {
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.loadModules(this.courseId);
  }

  ngOnInit() {
  }

}
