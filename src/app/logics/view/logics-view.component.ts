import { SimpleChange, ViewChild, ComponentRef, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { LogicService } from "../common/logic.service";

import { Logic, Question, Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../../enode/common/types";
import { EnodeService } from "../../enode/common/enode.service";
import { DialogDirective } from "../../common/dialog.directive";

import { LogicCreateComponent } from "../logic/logic-create.component";
import { MatchLogicCreateComponent } from "../match-logic/match-logic-create.component";
import { MatchCreateComponent } from "../match/match-create.component";


@Component({
  selector: 'logics-view',
  templateUrl: './logics-view.component.html'
})

export class LogicsViewComponent implements OnInit {
  @Input() enode: Enode;
  root: Enode;
  tmp:any;

  constructor (private router: Router, private lService:LogicService, private eService: EnodeService){
  }

  ngOnInit():void  {
  }
}

