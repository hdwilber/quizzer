import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionaryService } from "../common/questionary.service";
import { Questionary, Option, Group } from "../common/types";

@Component({
  //moduleId: module.id,
  selector: 'questionary-edit',
  templateUrl: './questionary-edit.component.html'
})

export class QuestionaryEditComponent implements OnInit {
  data: any;

  constructor (private router: Router, private qService:QuestionaryService) {
  }
  ngOnInit():void  {
  }

  setData(d: any) {
    this.data = d;
  }
  getData() {
    return {
    };
  }
}

