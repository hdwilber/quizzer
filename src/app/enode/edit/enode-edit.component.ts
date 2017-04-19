import { ComponentRef, ViewChild, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { EnodeService } from "../common/enode.service";
import { Enode, TypeDef, AddingType } from "../common/types";
import { DialogDirective } from "../../common/dialog.directive";
import { GroupEditComponent } from "../../group/edit/group-edit.component";
import { QuestionEditComponent } from "../../question/edit/question-edit.component";
import { OptionEditComponent } from "../../option/edit/option-edit.component";
import { QuestionaryEditComponent } from "../../questionary/edit/questionary-edit.component";

@Component({
  selector: 'enode-edit',
  templateUrl: './enode-edit.component.html',
  styleUrls: ['enode-edit.component.scss']
})

export class EnodeEditComponent implements OnInit {
  @ViewChild(DialogDirective) dialogAnchor: DialogDirective;
  dialogRef: ComponentRef<any>; 
  enode: Enode;
  types: TypeDef[];
  addingTypes: AddingType[];
  tmp: any;
  close = new EventEmitter();

  constructor (
    private router: Router, private eService: EnodeService
  ) {
  }
  ngOnInit():void{
  }

  setEnode(e: Enode):void {
    console.log(e);
    this.tmp = {
      id: e.id,
      type: e.type,
      code: e.code,
      label: {
        type: ''+e.label.type,
        data: ''+e.label.data
      }
    }
    this.enode = e;
    this.setType(e.type)
  }

  setType(t) {
    console.log("setting type: " + t);
    switch(t) {
      case 'group':
        this.dialogRef = this.dialogAnchor.createDialog(GroupEditComponent);
      break;
      case 'question':
        this.dialogRef = this.dialogAnchor.createDialog(QuestionEditComponent);
      break;
      case 'questionary':
        this.dialogRef = this.dialogAnchor.createDialog(QuestionaryEditComponent);
      break;
      case 'option':
        this.dialogRef = this.dialogAnchor.createDialog(OptionEditComponent);
      break;
    }

    this.dialogRef.instance.setData(this.enode.data)
  }

  update() {
    let data = this.dialogRef.instance.getData()
    console.log("DATA FROM INSTANCE");
    console.log(data);
    data.id = this.tmp.id;
    data.code = this.tmp.code;
    data.labelType = "text";
    data.labelData = this.tmp.label.data;
    
    console.log("Final DATA TO CREATE");
    console.log(data);
    this.eService.update(data)
    .then (res => {
      this.close.emit({data: data, res: res});
    })
  }

  cancel() {
    this.close.emit(null);
  }

}

