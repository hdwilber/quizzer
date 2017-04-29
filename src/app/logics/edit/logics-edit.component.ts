import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params} from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionaryService } from "../../questionary/common/questionary.service";
import { LogicService } from "../common/logic.service";
import { GroupService } from "../../group/common/group.service";
import { QuestionService } from "../../question/common/question.service";
import { E, Match, MatchLogic, Logic, Question, Questionary, Option, Group } from "../../questionary/common/types";
import { TreeNode } from "../../tree-view/types";
import { MatchLogicCreateComponent  } from "../match-logic/match-logic-create.component";
import { MatchCreateComponent  } from "../match/match-create.component";

@Component({

  selector: 'logics-edit',
  templateUrl: './logics-edit.component.html'
})
export class LogicsEditComponent implements OnInit {
  constructor () {
  }
  ngOnInit():void  {
  }

}

