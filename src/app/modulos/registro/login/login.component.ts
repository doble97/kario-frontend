import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin!:FormGroup
  constructor(private client:UserService) {
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
        next: (data)=>console.log('respuesta',data),
        error: (err)=>console.log('error->',err),
      }
    )
  }

}
