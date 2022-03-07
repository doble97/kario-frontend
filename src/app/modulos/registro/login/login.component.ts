import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LogedUser } from 'src/app/entidades/logedUser';
import { Response_From_Server } from 'src/app/entidades/response_from_server';
import { StateService } from 'src/app/services/state.service';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin!:FormGroup
  constructor(private client:UserService, private state:StateService) {
    this.createFormulario()
    
   }

  ngOnInit(): void {
  }

  createFormulario (){
    this.formularioLogin= new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  sendCredential(){
    console.log(this.formularioLogin.value);
    this.client.doLogin('/login', this.formularioLogin.value).subscribe(
      {
        next: (data:Response_From_Server)=>this.state.authenticate(data.successful, data.data as LogedUser),
        error: (err)=>console.log('error->',err),
      }
    )
  }

}
