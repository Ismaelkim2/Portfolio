import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DocumentationComponent } from './documentation/documentation.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home component
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-form', component: ContactFormComponent },
  {path:'documentation',component:DocumentationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
