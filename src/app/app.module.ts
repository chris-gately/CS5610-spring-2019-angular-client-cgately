import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseServiceClient} from '../services/CourseServiceClient';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { routing} from './app.routing';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from '../services/LessonServiceClient';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {TopicServiceClient} from '../services/TopicServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
