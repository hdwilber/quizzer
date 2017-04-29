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
  types: Array<any>;

  constructor (private router: Router, private qService:QuestionaryService) {
    this.types = qService.types;
  }
  ngOnInit():void  {
  }

  setData(d: any) {
    let taux:any = this.qService.types.find(e => {
      if (e.code == d.type){
        return true;
      }
    });

    this.data = {
      type: taux
    };
  }
  getData() {
    return {
      quType: this.data.type.code,
      type: 'questionary'
    };
  }
}

