import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './HomePage';
import { QuestionComponent } from './Question';
import { QuestionService } from './Question/question-service';
import { InsertComponent } from './Insert';
import { InsertService } from './Insert/insert-service';
import { UpdateComponent } from './Update';
import { UpdateService } from './Update/update-service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './Question';
import { FormQuizComponent } from './Question';
import { CommonModule } from '@angular/common';
//import { CarouselModule } from 'ngx-owl-carousel-o';
import { UserComponent } from './UserDashboard';
import { LoginModule } from './login/login.module';
import { AddTestService } from './AddTest/add-service';
import { AddTestComponent } from './AddTest';
import { TestListComponent } from './AddTest';
import { UpdateTestService } from './UpdateTest/update-service';
import { UpdateTestComponent } from './UpdateTest';
import { DeleteTestService } from './Test/delete-service';
import { DeleteTestComponent } from './Test';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionListComponent,
    QuestionComponent,
    FormQuizComponent,
    UpdateComponent,
    UserComponent,
    AddTestComponent,
    TestListComponent,
    UpdateTestComponent,
    DeleteTestComponent,
    InsertComponent
  ],
  imports: [
    HttpClientModule, 
    FormsModule, 
    CommonModule,
    BrowserModule,
    LoginModule,
    AppRoutingModule
    
  ],
  providers: [QuestionService,InsertService, UpdateService, AddTestService, UpdateTestService, DeleteTestService],
  bootstrap: [AppComponent],
  exports: [ QuestionComponent , QuestionListComponent, InsertComponent, FormQuizComponent, UpdateComponent, UserComponent, AddTestComponent,
    TestListComponent, UpdateTestComponent, DeleteTestComponent]
})
export class AppModule { }
