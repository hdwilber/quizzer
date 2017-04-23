import { SimpleChange, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionService } from "../common/question.service";

import { Question, Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../../enode/common/types";
import { EnodeService } from "../../enode/common/enode.service";

@Component({
  selector: 'question-view',
  templateUrl: './question-view.component.html'
})

export class QuestionViewComponent implements OnInit {
  @Input() enode: Enode;
  templated = false;
  aux: Enode;
  tmpAux = [];

  constructor (private router: Router, private qService:QuestionService, private eService: EnodeService) {
    this.aux = new Enode();
    this.aux.children = [];
  }
  ngOnInit():void  {
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("BEEOFOEASDFASD INIT");
    if (this.enode.data.linked) {
      console.log("La puta madre");
      if (this.enode.data.value > 0) {
        this.aux = this.eService.search (this.enode.data.value);
        this.enode.children.forEach( e => {

        });
      }
    }
  }

  getQuestionTypes() {
    return Question.TYPES;
  }
}

