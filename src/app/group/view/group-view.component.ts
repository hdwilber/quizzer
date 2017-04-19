import { ComponentRef, ViewContainerRef, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { GroupService } from "../common/group.service";

import { Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../../enode/common/types";

@Component({
  selector: 'group-view',
  templateUrl: './group-view.component.html'
})

export class GroupViewComponent implements OnInit {
  @Input() enode: Enode;

  constructor () {
  }
  ngOnInit():void  {
  }
}

