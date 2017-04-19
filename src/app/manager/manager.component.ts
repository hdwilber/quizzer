import { ComponentRef, ViewChild, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "./../user/common/types"
import { UserService } from "../user/common/user.service";
import { EnodeService } from "../enode/common/enode.service";
import { QuestionaryService } from "../questionary/common/questionary.service";
import { TakenQuizService } from "../taken-quiz/common/taken-quiz.service";
import {E,Option, Group, Question, Questionary, TakenQuiz, Logic, MatchLogic, Match} from "../questionary/common/types";
import { Enode } from "../enode/common/types";

import { DialogDirective } from "../common/dialog.directive";

import { EnodeCreateComponent } from "./../enode/create/enode-create.component";
import { EnodeEditComponent } from "./../enode/edit/enode-edit.component";


@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
  styleUrls: ['manager.component.scss']

})

export class ManagerComponent implements OnInit {
  qRoot: Enode;
  tqRoot: Enode;
  selected: Enode;
  @ViewChild(DialogDirective) dialogAnchor: DialogDirective;
  dialogRef: ComponentRef<any>;
  selectedRoot: Enode;

  constructor (private router: Router, private qService :QuestionaryService, private tqService: TakenQuizService, private eService: EnodeService) {

    this.tqRoot = new Enode();
    this.tqRoot.id = 0;
    this.tqRoot.type = 'root';
    this.tqRoot.code = 'Taken Quizzes';
    this.tqRoot.label = {
      type: "text",
      data: "Taken Quizzes"
    };
    this.selected = this.qRoot;
  }

  ngOnInit():void  {
    this.eService.getRoots()
    .then (
      res => {
        console.log(res);
        this.qRoot = res.questionaries;
        //this.tqRoot.children = res.takenQuizzes;
      }
    );
  }
  handleSelected(d:any) {
    console.log("something has changed");
    console.log(d);
    this.selected = d;

    if (d.type == 'questionary') {
      if (d.children == null) {
        this.eService.getById(d.id)
        .then (res => {
          console.log(res);
          this.selected.children = res.children;
          // Cloning data;
        });
      }
      this.selectedRoot = d;
    }
    if (this.dialogRef != null && this.dialogRef.instance != null) {
      this.dialogRef.instance.ref = this.selected;
    }
  }

  edit() {
    var aux: Enode = this.selected;
    this.dialogRef = this.dialogAnchor.createDialog(EnodeEditComponent);
    this.dialogRef.instance.setEnode(aux);
    this.dialogRef.instance.close.subscribe(res => {
      if (res) {
        console.log(res);
        aux.code = res.res.code;
        aux.data = res.res.data;
        aux.label = res.res.label;
      }
      this.dialogRef.destroy();
    });
  }
  create() {
    this.dialogRef = this.dialogAnchor.createDialog(EnodeCreateComponent);
    this.dialogRef.instance.ref = this.selected;
    this.dialogRef.instance.close.subscribe(res => {
      if (res) {
        var pa: Enode = null;
        switch(res.data.addingType) {
          case 'append-in':
            if (res.data.ref.children === undefined) {
              res.data.ref.children = [];
            }
            res.data.ref.children.push(res.res);
            break;
          case 'prepend-in':
            if (res.data.ref.children === undefined) {
              res.data.ref.children = [];
            }
            res.data.ref.children.unshift(res.res);
            break;
          case 'append':
            pa = this.eService.getParent (this.qRoot, res.data.ref) as Enode;
            console.log(pa);
            pa.children.push(res.res);
            break;
          case 'prepend':
            pa = this.eService.getParent (this.qRoot, res.data.ref) as Enode;
            console.log(pa);
            pa.children.unshift(res.res);
            break;
          case 'next-to':
            pa = this.eService.getParent (this.qRoot, res.data.ref) as Enode;
            console.log(pa);
            pa.children.splice(pa.children.indexOf(res.data.ref)+1, 0, res.res);
            break;
          case 'prev-to':
            pa = this.eService.getParent (this.qRoot, res.data.ref) as Enode;
            console.log(pa);
            pa.children.splice(pa.children.indexOf(res.data.ref), 0, res.res);
            break;
          case 'root':
            this.qRoot.children.push(res.res);
            break;
        }
      }
      this.dialogRef.destroy();
    });
  }

  delete() {
    this.eService.delete(this.selected)
    .then (res =>
      {
        if (res) {
          var p = this.eService.getParent(this.qRoot, this.selected);
          p.children.splice(p.children.indexOf(this.selected), 1);
        } else {
          console.log("Something is wrong");
        }
    });
  }
}
