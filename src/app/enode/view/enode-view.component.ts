import { ComponentRef,  ViewChild, SimpleChange, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { QuestionaryService } from "../../questionary/common/questionary.service";
import { Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../common/types";
import { DialogDirective } from "../../common/dialog.directive";
import { LogicsCreateComponent } from "../../logics/create/logics-create.component";
import { EnodeService } from "../../enode/common/enode.service";

@Component({
  selector: 'enode-view',
  templateUrl: './enode-view.component.html',
  styleUrls: ['./enode-view.component.scss']
})

export class EnodeViewComponent implements OnInit {
  @Input() enode: Enode;
  @Input() root: Enode;

  @ViewChild(DialogDirective) dialogAnchor: DialogDirective;
  dialogRef: ComponentRef<any>; 

  tabs: Array<any>= [
    {
      code: "general",
      name: "General",
    },
    {
      code: "specific",
      name: "Specific",
    },
    {
      code: "logics",
      name: "Logics",
    },
    {
      code: "stats",
      name: "Stats",
    },
    {
      code: "new",
      name: "New"
    }
  ];
  selectedLogic: Enode;

  currentTab: any;

  constructor (private router: Router, private qService:QuestionaryService, private eService: EnodeService) {
    this.currentTab = this.tabs[0];
  }
  ngOnInit():void  {
    console.log(this.enode);
    this.tabs[1].name = this.enode.type;
    this.selectedLogic = this.enode.logics;
  }

  ngOnChanges(change: SimpleChange): void{
    this.tabs[1].name = this.enode.type;
  }

  changeTab(c: any):void {
    this.currentTab = c;
  }

  createLogicElement() {
      this.dialogRef = this.dialogAnchor.createDialog(LogicsCreateComponent);
      this.dialogRef.instance.setRef(this.selectedLogic);
      this.dialogRef.instance.root = this.root;
      this.dialogRef.instance.enode = this.enode;

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
              pa = this.eService.getParent (this.enode, res.data.ref) as Enode;
              console.log(pa);
              pa.children.push(res.res);
              break;
            case 'prepend':
              pa = this.eService.getParent (this.enode, res.data.ref) as Enode;
              console.log(pa);
              pa.children.unshift(res.res);
              break;
            case 'next-to':
              pa = this.eService.getParent (this.enode, res.data.ref) as Enode;
              console.log(pa);
              pa.children.splice(pa.children.indexOf(res.data.ref)+1, 0, res.res);
              break;
            case 'prev-to':
              pa = this.eService.getParent (this.enode, res.data.ref) as Enode;
              console.log(pa);
              pa.children.splice(pa.children.indexOf(res.data.ref), 0, res.res);
              break;
            case 'root':
              this.enode.children.push(res.res);
              break;
          }
        } else {
          console.log("End");
          this.dialogRef.destroy();
        }
      });
  }

  createEnode() {
  }

  deleteLogicElement() {
    this.eService.delete(this.selectedLogic)
    .then (res =>
      {
        if (res) {
          var p = this.eService.getParent(this.enode.logics, this.selectedLogic);
          p.children.splice(p.children.indexOf(this.selectedLogic), 1);
        } else {
          console.log("Something is wrong");
        }
    });
  }

  handleSelectedLogic(l) {
    this.selectedLogic = l;
    console.log(l);
    if (this.dialogRef != null) {
      this.dialogRef.instance.setRef(this.selectedLogic);
    }
  }

  update() {
  }

  cancel() {
  }
}

