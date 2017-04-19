import { ComponentRef, ViewContainerRef, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { GroupService } from "../common/group.service";

import { Questionary, Option, Group } from "../../questionary/common/types";

@Component({
  selector: 'group-edit',
  templateUrl: './group-edit.component.html'
})

export class GroupEditComponent implements OnInit {
  data: any;

  constructor (private router: Router, private gService:GroupService) {
  }
  ngOnInit():void  {
  }

  setData(d: any) {
    this.data = {
      visibility: d.default_visibility
    };
    console.log("From EDit");
    console.log(d);
  }

  getData(): any {
    return {
      visibility: this.data.visibility
    }
  }
}

