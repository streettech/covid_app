import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { RepService } from './rep.service';
import { BackendService } from './backend.service';

import { AppRoutingModule, rountingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { FormComponent } from './form/form.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuestionsComponent,
    QuestionComponent,
    FormComponent,
    FormSubmittedComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [RepService, BackendService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, {dataEncapsulation: false}
)
