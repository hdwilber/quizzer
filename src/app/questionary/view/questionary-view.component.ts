import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionaryService } from "../common/questionary.service";
import { Questionary, Option, Group } from "../common/types";
import { Enode } from "../../enode/common/types";

@Component({
  selector: 'questionary-view',
  templateUrl: './questionary-view.component.html'
})

export class QuestionaryViewComponent implements OnInit {
  @Input() enode: Enode;
  quest: Questionary;

  constructor (private router: Router, private qService:QuestionaryService) {
  }
  ngOnInit():void  {
    console.log(this.quest);
    this.quest = this.enode.data;
  }

  update() {
  }

  cancel() {
  }
}

