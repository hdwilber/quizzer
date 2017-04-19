import { Output, Input, Component, OnInit, SimpleChange, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params} from "@angular/router";
import { Session, User } from "../user/common/types"
import { UserService } from "../user/common/user.service";
import { ElementService } from "./../common/element.service";
import { Enode } from "./common/types";

@Component({
  moduleId: module.id,
  selector: 'enode',
  templateUrl: './enode.component.html'
})
export class EnodeComponent implements OnInit {
  @Input() enode: any;
  @Input() current : any;
  @Output() selected  = new EventEmitter();

  constructor () {
  }
  ngOnInit():void  {
  }

  ngOnChanges(changes: SimpleChange) :void {
    if (this.enode.expanded === undefined) {
      this.enode.expanded = true;
    }
    if (this.enode.checked === undefined) {
      this.enode.checked = true;
    }
  }
  toggleExpand(n: any):void {
    n.expanded = !n.expanded;
    this.toggleExpandRecursive(n, n.expanded);
  }
  functionde(n) {
    if (this.current != n )  {
      this.selected.emit(n);
      this.current = n;
    }
  }

  hasChildren(n: any):boolean {
    if (this.enode.children != null) {
      if (this.enode.children.length > 0) {
        return true;
      }
    }
    return false;
  }

  toggleExpandRecursive(n:any, state:boolean):void {
    if (n.children != null) {
      n.children.forEach( c => {
        c.expanded = state;
        this.toggleExpandRecursive(c, state);
      });
    }
  }
  select(n: any):void {
    this.selected.emit(n);
  }
  getChecked(n: any):boolean {
    return n.checked;
  }
  printCurrent() {
    console.log(this.current);
  }

  checkChildren(): boolean {
    //return (this.expanded && this.children != null);
    return false;
  }
  appendMatch(n: any) {
  }
  appendMatchLogic(n: any) {
  }
}

