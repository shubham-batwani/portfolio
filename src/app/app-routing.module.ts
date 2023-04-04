import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    component:EducationComponent,
    path:'education'
  },
  {
    component: ProjectsComponent,
    path:'projects'
  },
  {
    component: ContactComponent,
    path:'contact'
  },
  {
    component:HomeComponent,
    path:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
