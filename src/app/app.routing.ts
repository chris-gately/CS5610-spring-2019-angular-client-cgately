import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ProfileComponent} from './profile/profile.component';
import { WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
