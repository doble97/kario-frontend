import { Injectable } from '@angular/core';
import { LogedUser } from '../entidades/logedUser';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private isLoged:boolean
  private user!:LogedUser
  constructor() { 
    this.isLoged=false

  }
  public authenticate(successful:boolean, user:LogedUser){
    this.isLoged=successful;
    this.user = user
    console.log('ESTADO DEL OBJETO', this.isLoged, this.user);
  }
}
