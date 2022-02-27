import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, rountingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionsComponent } from './questions/questions.component';
import { RepService } from './rep.service';
import { QuestionComponent } from './question/question.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuestionsComponent,
    QuestionComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
