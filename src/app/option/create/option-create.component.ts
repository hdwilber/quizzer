import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { OptionService } from "../common/option.service";

import { Question, Questionary, Option, Group } from "../../questionary/common/types";

@Component({
  selector: 'option-create',
  templateUrl: './option-create.component.html'
})

export class OptionCreateComponent implements OnInit {
  tmp:any;

  constructor (private router: Router, private oService:OptionService) {
    this.tmp = { 
      type: null,
      value: null,
      data: null,
      extra: null
    };
  }
  ngOnInit():void  {
  }

  getData() {
    return {
      oType: this.tmp.type.code,
      oValue: this.tmp.value,
      oExtra: this.tmp.extra,
      type: 'option'
    };
  }

  getOptionTypes() {
    return Option.TYPES;
  }
}

