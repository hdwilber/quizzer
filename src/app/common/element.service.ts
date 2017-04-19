import {Injectable, Inject} from "@angular/core";
import {Headers, Response, Http} from "@angular/http";
import { Router } from "@angular/router";

import "rxjs/add/operator/toPromise";
import { User, Session} from "../user/common/types";
import {E, Question, Option, Group, Questionary, TakenQuiz, Logic, MatchLogic, Match} from "../questionary/common/types";

import { RestService } from "./rest.service";
import { UserService } from "../user/common/user.service";
import { Enode } from "../enode/common/types";

@Injectable()
export class ElementService {
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
    getChildren(id): Promise<Enode[]> {
      return this.http.get(this.restService.getServerPath() + '/elements/'+id+'/children',
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as Enode[];
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


    getRoots(): Promise<any> {
      return this.http.get(this.restService.getServerPath() + '/elements/roots',
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


    getById(id: number): Promise<E> {
      return this.http.get(this.restService.getServerPath() + '/elements/'+id,
                           {headers: this.restService.createHeaders()})
          .toPromise()
          .then( res => {
            var aux = res.json();
            return aux.data as E;
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
    delete(d: Question): Promise<boolean> {
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
            console.log ("Delete Question failed");
            this.checkUnauthorized(err);
            console.log(err);
            if (err.status == 401) {
            }
            return Promise.resolve();
          });
    }
}
