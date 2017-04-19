import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionService } from "../common/question.service";

import { Question, Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../../enode/common/types";

@Component({
  selector: 'question-view',
  templateUrl: './question-view.component.html'
})

export class QuestionViewComponent implements OnInit {
  @Input() enode: Enode;

  constructor (private router: Router, private qService:QuestionService) {
  }
  ngOnInit():void  {
  }

  getQuestionTypes() {
    return Question.TYPES;
  }
}

