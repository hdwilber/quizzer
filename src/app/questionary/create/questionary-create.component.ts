import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionaryService } from "../common/questionary.service";
import { Questionary, Option, Group } from "../common/types";

@Component({
  //moduleId: module.id,
  selector: 'questionary-create',
  templateUrl: './questionary-create.component.html'
})

export class QuestionaryCreateComponent implements OnInit {
  quest: Questionary = new Questionary();

  constructor (private router: Router, private qService:QuestionaryService) {
  }
  ngOnInit():void  {
  }

  getData() {
    return {
      type: 'questionary'
    };
  }
}

