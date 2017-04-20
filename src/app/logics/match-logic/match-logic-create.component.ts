import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"

import { MatchLogic, Logic, Question, Questionary, Option, Group } from "../../questionary/common/types";

@Component({
  selector: 'match-logic-create',
  templateUrl: './match-logic-create.component.html'
})

export class MatchLogicCreateComponent implements OnInit {
  tmp:any;

  constructor (private router: Router){
    this.tmp = { 
      bool: null
    };
    this.tmp.bool = MatchLogic.BOOL_TYPES.find(e=> { return (e.code == 'and'); })
  }
  ngOnInit():void  {
  }

  getBoolTypes(): any {
    return MatchLogic.BOOL_TYPES;
  }
  getData() {
    return {
      mlBool: this.tmp.bool.code,
      type: 'match-logic'
    }
  }
}

