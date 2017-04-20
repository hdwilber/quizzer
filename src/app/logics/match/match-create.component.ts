import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { LogicService } from "../common/logic.service";
import { GroupService } from "../../group/common/group.service";
import { QuestionService } from "../../question/common/question.service";

import { Match, MatchLogic, Logic, Question, Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../../enode/common/types";

@Component({
  selector: 'match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.scss']
})

export class MatchCreateComponent implements OnInit {
  root: Enode;
  tmp:any;
  targetIdx = 0;

  constructor (private router: Router) {
    this.tmp = { 
      operator: null,
      target: null,
      targetOption: null
    };
  }
  ngOnInit():void  {
  }

  setRoot(r: Enode) {
    this.root = JSON.parse(JSON.stringify(r));
  }

  getOperatorTypes(): any {
    return Match.OPERATOR_TYPES;
  }

  getData() {
    return {
      mOperator: this.tmp.operator.code,
      mTarget: this.tmp.target.id,
      mTargetValue: null,
      mOption: this.tmp.targetOption.id,
      type: 'match'
    };
  }

  setTarget(i:number) {
    this.targetIdx = i;
  }

  handleSelectedTarget(t: Enode) {
    switch(this.targetIdx){
      case 0: 
        this.tmp.target = t;
        break;
      case 1:
        this.tmp.targetOption = t;
        break;
    }
    console.log(t);
  }
}

