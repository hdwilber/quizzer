import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { LogicService } from "../common/logic.service";

import { Logic, Question, Questionary, Option, Group } from "../../questionary/common/types";



@Component({
  //moduleId: module.id,
  selector: 'logic-create',
  templateUrl: './logic-create.component.html'
})

export class LogicCreateComponent implements OnInit {
  tmp: any;

  constructor (private router: Router){
    this.tmp = { 
      action: null,
    };
  }
  ngOnInit():void  {
  }

  getLogicActions(): any {
    return Logic.ACTION_TYPES;
  }


  getData(): any {
    return {
      lAction: this.tmp.action.code,
      type: 'logic'
    };
  }
}

