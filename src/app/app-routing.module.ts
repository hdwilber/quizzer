import { NgModule }             from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from "@angular/forms";

// Components
import { AppComponent }  from './app.component';
import { UserLoginComponent }  from './user/login/user-login.component';
import { HomeComponent } from './home/home.component';

import { QuestionaryEditComponent } from './questionary/edit/questionary-edit.component';
import { GroupEditComponent } from './group/edit/group-edit.component';
import { QuestionEditComponent } from './question/edit/question-edit.component';
import { LogicEditComponent } from './logics/edit/logic-edit.component';
import { TakenQuizActionComponent } from './taken-quiz/action/taken-quiz-action.component';
import { TakenQuizHistoryComponent } from './taken-quiz/history/taken-quiz-history.component';

import { ManagerComponent } from './manager/manager.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from "@angular/http";

const routes: Routes = [
    { path: '', redirectTo: '/manager', pathMatch: 'full' },
    { path: 'login', component: UserLoginComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'home', component: HomeComponent },
    { path: 'take/:takenQuizId', component: TakenQuizActionComponent},
    { path: 'history/:takenQuizId', component: TakenQuizHistoryComponent}
];

@NgModule({
    imports: [ 
    RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
