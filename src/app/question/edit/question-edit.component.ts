import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionService } from "../common/question.service";

import { Question, Questionary, Option, Group } from "../../questionary/common/types";

@Component({
  selector: 'question-edit',
  templateUrl: './question-edit.component.html'
})

export class QuestionEditComponent implements OnInit {
  data: any;

  constructor (private router: Router, private qService:QuestionService) {
  }
  ngOnInit():void  {
  }

  setData(d: any) {
    console.log(d);
    let taux:any = Question.TYPES.find(e => {
      if (e.code == d.type){
        return true;
      }
    });

    let staux = taux.subTypes.find(e => {
      if (e.code == d.sub_type) {
        return true;
      }
    });
    this.data = {
      type: taux,
      subType : staux,
      visibility: d.default_visibility,
      linked: d.linked,
      value: d.value
    };
  }

  getData(): any {
    // Return data according to requirements
    return {
      visibility: this.data.visibility,
      qLinked: this.data.linked,
      qValue: this.data.value as number,
      qType: this.data.type.code,
      qSubType: this.data.subType.code,
      type: 'question'
    };
  }

  getQuestionTypes() {
    return Question.TYPES;
  }
}

