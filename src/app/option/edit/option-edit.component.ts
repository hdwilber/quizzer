import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { OptionService } from "../common/option.service";

import { Question, Questionary, Option, Group } from "../../questionary/common/types";

@Component({
  selector: 'option-edit',
  templateUrl: './option-edit.component.html'
})

export class OptionEditComponent implements OnInit {
  data:any;

  constructor (private router: Router, private oService:OptionService) {
  }
  ngOnInit():void  {
  }

  setData(d: any) {
    let taux = Option.TYPES.find(e => {
      if (e.code == d.type) {
        return true;
      }
    });
    this.data =  {
      type: taux,
      value: d.value,
      extra: d.extra
    }

  }

  getData() {
    return {
      oType: this.data.type.code,
      oValue: this.data.value,
      oExtra: this.data.extra,
    };
  }

  getOptionTypes() {
    return Option.TYPES;
  }
}

