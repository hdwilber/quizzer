import { SimpleChange, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router } from "@angular/router";
import { Session, User } from "../../user/common/types"
import { UserService } from "../../user/common/user.service";
import { OptionService } from "../common/option.service";

import { Question, Questionary, Option, Group } from "../../questionary/common/types";
import { Enode } from "../../enode/common/types";
import { EnodeService } from "../../enode/common/enode.service";

@Component({
  selector: 'option-view',
  templateUrl: './option-view.component.html'
})

export class OptionViewComponent implements OnInit {
  @Input() enode: Enode;
  aux: Enode;

  constructor (private router: Router, private oService:OptionService, private eService: EnodeService) {
  }
  ngOnInit():void  {
    if (this.enode.data.type == 'link') {
      if (this.enode.data.value  > 0) {
        this.aux = this.eService.search(this.enode.data.value);
      }
    }
  }
  ngOnChanges(changes: SimpleChange) {
  }
}

