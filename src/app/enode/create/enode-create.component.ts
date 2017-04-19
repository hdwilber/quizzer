import { ComponentRef, ViewChild, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { EnodeService } from "../common/enode.service";
import { Enode, TypeDef, AddingType } from "../common/types";
import { DialogDirective } from "../../common/dialog.directive";
import { GroupCreateComponent } from "../../group/create/group-create.component";
import { QuestionCreateComponent } from "../../question/create/question-create.component";
import { OptionCreateComponent } from "../../option/create/option-create.component";
import { QuestionaryCreateComponent } from "../../questionary/create/questionary-create.component";

@Component({
  selector: 'enode-create',
  templateUrl: './enode-create.component.html',
  styleUrls: ['enode-create.component.scss']
})

export class EnodeCreateComponent implements OnInit {
  @ViewChild(DialogDirective) dialogAnchor: DialogDirective;
  dialogRef: ComponentRef<any>; 
  enode: Enode =  new Enode();
  ref: Enode;
  types: TypeDef[];
  addingTypes: AddingType[];
  p: Enode;
  tmp = {
    type: null,
    addingType: null,
    code: null,
    label: null
  };
  close = new EventEmitter();

  constructor (
    private router: Router, private eService: EnodeService
  ) {
  }
  ngOnInit():void  {
    this.eService.getTypes()
    .then (res => {
      this.types = res;
    });
    this.eService.getAddingTypes()
    .then (res => {
      this.addingTypes = res;
    });
  }

  setType(t) {
    this.tmp.type = t;
    console.log(this.tmp.type);
    switch(t.code) {
      case 'group':
        this.dialogRef = this.dialogAnchor.createDialog(GroupCreateComponent);
      break;
      case 'question':
        this.dialogRef = this.dialogAnchor.createDialog(QuestionCreateComponent);
      break;
      case 'questionary':
        this.dialogRef = this.dialogAnchor.createDialog(QuestionaryCreateComponent);
      break;
      case 'option':
        this.dialogRef = this.dialogAnchor.createDialog(OptionCreateComponent);
      break;
    }
  }
  create() {
    let data = this.dialogRef.instance.getData()
    console.log("DATA FROM GROUP");
    console.log(data);
    data.code = this.tmp.code;
    data.labelType = "text";
    data.labelData = this.tmp.label;
    if (this.tmp.addingType.code != 'root')
      data.eRef = this.ref.id;
    data.addingType = this.tmp.addingType.code;
    
    console.log("Final DATA TO CREATE");
    console.log(data);
    this.eService.create(data)
    .then (res => {
      data.ref = this.ref;
      this.close.emit({data: data, res: res});
    })
  }

  cancel() {
    this.close.emit(null);
  }

}

