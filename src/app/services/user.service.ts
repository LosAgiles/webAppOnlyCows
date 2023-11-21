import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getTypeUser(){
    return window.sessionStorage.getItem("typeUser")
  }


}
