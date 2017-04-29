import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";

import { CoolStorageModule, CoolLocalStorage } from "angular2-cool-storage";

import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';

//Services 
import { UserService } from "./user/common/user.service";
import { RestService } from "./common/rest.service";
import { QuestionaryService } from "./questionary/common/questionary.service";
import { GroupService } from "./group/common/group.service";
import { ElementService } from "./common/element.service";

// Componenets
import { UserLoginComponent }  from './user/login/user-login.component';
import { UserRegisterComponent }  from './user/register/user-register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { QuestionaryCreateComponent } from './questionary/create/questionary-create.component';
import { QuestionaryEditComponent } from './questionary/edit/questionary-edit.component';
import { QuestionaryViewComponent } from './questionary/view/questionary-view.component';

import { GroupCreateComponent  } from './group/create/group-create.component';
import { GroupEditComponent } from './group/edit/group-edit.component';
import { GroupViewComponent } from './group/view/group-view.component';
import { LogicService } from './logics/common/logic.service';

//import { QuestionaryActionComponent } from './questionary/questionary-action.component';

//import { StepAddComponent } from './questionary/step-add.component';
//import { StepActionComponent } from './questionary/step-action.component';
//import { StepEditComponent } from './questionary/step-edit.component';

import { QuestionCreateComponent }  from './question/create/question-create.component';
import { QuestionService }  from './question/common/question.service';

import { QuestionEditComponent }  from './question/edit/question-edit.component';
import { TakenQuizService }  from './taken-quiz/common/taken-quiz.service';

import { OptionService }  from './option/common/option.service';
import { EnodeService }  from './enode/common/enode.service';

import { OptionCreateComponent } from './option/create/option-create.component';
import { OptionEditComponent } from './option/edit/option-edit.component';

import { LogicsCreateComponent } from './logics/create/logics-create.component';
import { LogicsViewComponent } from './logics/view/logics-view.component';
import { LogicsEditComponent } from './logics/edit/logics-edit.component';

import { LogicCreateComponent } from './logics/logic/logic-create.component';
import { LogicViewComponent } from './logics/logic/logic-view.component';

import { MatchLogicCreateComponent } from './logics/match-logic/match-logic-create.component';
import { MatchLogicViewComponent } from './logics/match-logic/match-logic-view.component';

import { MatchCreateComponent } from './logics/match/match-create.component';
import { MatchViewComponent } from './logics/match/match-view.component';


import { TakenQuizActionComponent } from './taken-quiz/action/taken-quiz-action.component';

import { TakenQuizHistoryComponent } from './taken-quiz/history/taken-quiz-history.component';


import { ManagerComponent } from './manager/manager.component';

import { EnodeComponent } from "./enode/enode.component";
import { EnodeEditComponent } from "./enode/edit/enode-edit.component";
import { EnodeViewComponent } from "./enode/view/enode-view.component";
import { EnodeCreateComponent } from "./enode/create/enode-create.component";

import { QuestionViewComponent } from "./question/view/question-view.component";
import { OptionViewComponent } from "./option/view/option-view.component";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogDirective } from "./common/dialog.directive";

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    HomeComponent, 
    DialogDirective, 

    QuestionaryCreateComponent,
    QuestionaryEditComponent,
    QuestionaryViewComponent,

    GroupCreateComponent, 
    GroupEditComponent,
    GroupViewComponent,

    QuestionCreateComponent,
    QuestionEditComponent,
    QuestionViewComponent,

    LogicsCreateComponent,
    LogicsViewComponent,
    LogicsEditComponent,

    LogicCreateComponent,
    LogicViewComponent,
    MatchLogicViewComponent,
    MatchViewComponent,

    OptionCreateComponent,
    OptionEditComponent,
    OptionViewComponent,

    MatchLogicCreateComponent,
    MatchCreateComponent,

    ManagerComponent,

    TakenQuizActionComponent,
    TakenQuizHistoryComponent,

    EnodeComponent,
    EnodeEditComponent,
    EnodeViewComponent,
    EnodeCreateComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CoolStorageModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RestService,
    UserService,
    QuestionaryService,
    GroupService,
    QuestionService,
    LogicService,
    OptionService,
    TakenQuizService,
    EnodeService,
    ElementService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EnodeCreateComponent, QuestionaryCreateComponent, GroupCreateComponent, QuestionCreateComponent, LogicsCreateComponent, LogicCreateComponent, OptionCreateComponent, MatchLogicCreateComponent, MatchCreateComponent, EnodeViewComponent,
    EnodeEditComponent, QuestionaryEditComponent, GroupEditComponent, QuestionEditComponent, OptionEditComponent
  ]
})
export class AppModule { }
