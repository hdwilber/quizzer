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
  selector: 'logics-create',
  templateUrl: './logics-create.component.html'
})

export class LogicsCreateComponent implements OnInit {
  enode: Enode;
  @Input() ref: Enode;
  @Input() root: Enode;
  tmp:any;
  @ViewChild(DialogDirective) dialogAnchor: DialogDirective;
  dialogRef: ComponentRef<any>; 
  types = [{
    img: '/assets/logicico.png',
    code: 'logic'
  }, {
    img: '/assets/mlogicico.png',
    code: 'match-logic'
  }, {
    img: '/assets/matchico.png',
    code: 'match'
  }];
  close = new EventEmitter();

  constructor (private router: Router, private lService:LogicService, private eService: EnodeService){
    this.tmp = { 
      code: null,
      label: null,
      type: null
    };
  }
  ngOnInit():void  {
  }

  getLogicActions(): any {
    return Logic.ACTION_TYPES;
  }
  ngOnChanges(change: SimpleChange) {
    if (change['root'] != undefined) {
      if (this.dialogRef != null) {
        this.dialogRef.instance.root = this.root;
      }
    }
  }
  setRef(r: Enode): void {
    this.ref = r;
  }

  setType(t) {
    this.tmp.type = t;
    switch(t.code) {
      case 'logic':
        this.dialogRef = this.dialogAnchor.createDialog(LogicCreateComponent);
        break;
      case 'match-logic':
        this.dialogRef = this.dialogAnchor.createDialog(MatchLogicCreateComponent);
        break;
      case 'match':
        this.dialogRef = this.dialogAnchor.createDialog(MatchCreateComponent);
        this.dialogRef.instance.setRoot(this.root);
        break;
    }
  }


  create() {
    console.log ("Starting to create Logic");
    let data = this.dialogRef.instance.getData();
    console.log(data);
    if (data.type == 'logic') {
      console.log("RASDFASFD");
      console.log(this.enode);
      data.eRef = this.enode.id;
    } else {
      data.eRef = this.ref.id;
    }
    console.log ("Starting to create Logic 2");
    data.code = this.tmp.code;
    data.addingType = "append-in";
    data.labelType = "text";
    data.labelData = "";
    data.lQuest = this.root.id;

    console.log("DATA TO SEND");
    console.log(data);

    console.log ("Starting to create Logic 3");
    this.eService.create(data)
    .then( q => {
      if (data.type == "logic") {
        data.ref = this.enode.logics;
      } else {
        data.ref = this.ref;
      }
      this.close.emit({data: data, res: q});
    });
  }

  cancel() {
    this.close.emit(null);
  }

  getQuestionTypes() {
    return Question.TYPES;
  }
}

