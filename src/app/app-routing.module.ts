import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomePage';
import { QuestionComponent } from './Question';
import { QuestionListComponent } from './Question';
import { InsertComponent } from './Insert';
import { FormQuizComponent } from './Question';
import { UpdateComponent } from './Update';
import { TestListComponent } from './AddTest';
import { AddTestComponent } from './AddTest';
import { DeleteTestComponent } from './Test';
import { UpdateTestComponent } from './UpdateTest';
import { UserComponent } from './UserDashboard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './login/register.component';

const routes: Routes = [
    { path: 'getlogin', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'AdminHome', component: HomeComponent },
    { path: 'Question', component: QuestionComponent },
    { path: 'QuestionList', component: QuestionListComponent },
    { path: 'Insert', component: InsertComponent },
    { path: 'Quiz', component: FormQuizComponent },
    { path: 'Update', component: UpdateComponent },
    { path: 'Addtest', component: AddTestComponent},
    { path: 'Gettests', component: TestListComponent},
    { path: 'Deletetest', component: DeleteTestComponent},
    { path: 'Gettest', component: UpdateTestComponent},
    { path: 'Updatetest', component:UpdateTestComponent},
    { path: 'User', component:UserComponent},
    { path: '**', redirectTo: '' }
];


export const AppRoutingModule = RouterModule.forRoot(routes);
