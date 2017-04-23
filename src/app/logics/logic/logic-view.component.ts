import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { LogicService } from "../common/logic.service";
import { GroupService } from "../../group/common/group.service";
import { QuestionService } from "../../question/common/question.service";

import { Match, MatchLogic, Logic, Question, Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../../enode/common/types";
import { EnodeService } from "../../enode/common/enode.service";

@Component({
  selector: 'logic-view',
  templateUrl: './logic-view.component.html',
  styleUrls: ['./logic-view.component.scss']
})

export class LogicViewComponent implements OnInit {
  @Input() enode: Enode;

  constructor (private router: Router, eService: EnodeService) {
  }
  ngOnInit():void  {
  }

}

