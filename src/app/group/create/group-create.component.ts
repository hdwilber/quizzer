import { ComponentRef, ViewContainerRef, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { GroupService } from "../common/group.service";

import { Questionary, Option, Group } from "../../questionary/common/types";

@Component({
  //moduleId: module.id,
  selector: 'group-create',
  templateUrl: './group-create.component.html'
})

export class GroupCreateComponent implements OnInit {
  tmp = {
    visibility: null
  }

  @Output() close = new EventEmitter();

  constructor (private router: Router, private gService:GroupService) {
    this.tmp.visibility = true;
  }
  ngOnInit():void  {
  }

  getData(): any {
    return {
      visibility: this.tmp.visibility,
      type: 'group'
    }
  }
}

