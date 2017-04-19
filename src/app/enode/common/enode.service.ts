import {Injectable, Inject} from "@angular/core";
import {Headers, Response, Http} from "@angular/http";
import { Router } from "@angular/router";

import "rxjs/add/operator/toPromise";
import { User, Session} from "../../user/common/types";
import {E, Question, Option, Group, Questionary, TakenQuiz, Logic, MatchLogic, Match} from "../../questionary/common/types";

import { RestService } from "../../common/rest.service";
import { UserService } from "../../user/common/user.service";
import { Enode, TypeDef, AddingType } from "./types";

@Injectable()

export class EnodeService {
    session: Session;
    restService: RestService;
    user: User;
  
    constructor (private router: Router, private http:Http, restService: RestService, private userService: UserService) {
        this.session = userService.session;
        this.restService = restService;
    }

    checkUnauthorized(err) {
      if (err.status == 401) {
        this.userService.logout();
        this.userService.login("hd.wilber@gmail.com", "asdf")
        .then(res=> {
          this.session = res;
          this.router.navigate(['/manager']);
        });
      }
      return err;
    }
    getById(id): Promise<Enode> {
      return this.http.get(this.restService.getServerPath() + '/elements/'+id,
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as Enode;
          })
          .catch(err => { 
            console.log ("Getting Element failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }
    getChildren(id): Promise<Array<Enode>> {
      return this.http.get(this.restService.getServerPath() + '/elements/'+id+'/children',
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as Array<Enode>;
          })
          .catch(err => { 
            console.log ("Getting Element failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }

    getAddingTypes(): Promise<AddingType[]> {
      return this.http.get(this.restService.getServerPath() + '/elements/addingTypes',
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as AddingType[];
          })
          .catch(err => { 
            console.log ("Getting Adding Types failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }
    getTypes(): Promise<TypeDef[]> {
      return this.http.get(this.restService.getServerPath() + '/elements/types',
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as TypeDef[];
          })
          .catch(err => { 
            console.log ("Getting Types failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }

    getRoots(): Promise<any> {
      return this.http.get(this.restService.getServerPath() + '/elements/0/children',
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as any;
          })
          .catch(err => { 
            console.log ("Getting Element failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }
    
    create(d: any) : Promise<E> {
      return this.http.post(this.restService.getServerPath() + '/elements', JSON.stringify(d),
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as E;
          })
          .catch(err => { 
            console.log ("Create Element failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }

    appendIn(id:number, d: any) : Promise<E> {
      return this.http.post(this.restService.getServerPath() + '/elements/'+id+'/appendIn', JSON.stringify(d),
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as E;
          })
          .catch(err => { 
            console.log ("Create Element failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }
    delete(d: Enode): Promise<boolean> {
      return this.http.delete(this.restService.getServerPath() + '/elements/'+d.id,
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            if (aux.status == "ok") {
              return true as boolean;
            }
          })
          .catch(err => { 
            console.log ("Delete Element failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }

    getParent (top: Enode, d: Enode): Enode {
      if (top.children === undefined) {
        return null;
      } else if (top.children.length == 0) {
        return null;
      }

      if (top.children.indexOf(d) == -1) {
        var res = null;

        for(var i = 0; i < top.children.length; i++) {
          var aux = this.getParent(top.children[i], d);
          if (aux != null) {
            res = aux;
            break;
          }
        }
        return res;
      } else {
        return top;
      }
    }
    update(d: any) : Promise<E> {
      return this.http.patch(this.restService.getServerPath() + '/elements/'+d.id, JSON.stringify(d),
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as E;
          })
          .catch(err => { 
            console.log ("Create Element failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }
}
