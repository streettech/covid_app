import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormComponent } from './form/form.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'form', component: FormComponent},
  {path: 'form-submitted', component: FormSubmittedComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [
  HomeComponent, HeaderComponent, FooterComponent,
  QuestionsComponent, FormComponent, FormSubmittedComponent,
  ResultComponent
]
