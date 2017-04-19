import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionService } from "../common/question.service";

import { Question, Questionary, Option, Group } from "../../questionary/common/types";

@Component({
  selector: 'question-create',
  templateUrl: './question-create.component.html'
})

export class QuestionCreateComponent implements OnInit {
  tmp:any;

  constructor (private router: Router, private qService:QuestionService) {
    this.tmp = { 
      type: null,
      subType: null,
      visibility: true
    };
  }
  ngOnInit():void  {
  }

  getData(): any {
    // Return data according to requirements
    return {
      visibility: this.tmp.visibility,
      qType: this.tmp.type.code,
      qSubType: this.tmp.subType.code,
      type: 'question'
    };
  }

  getQuestionTypes() {
    return Question.TYPES;
  }
}

