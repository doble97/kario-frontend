import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../servicios/user.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  formRegister!:FormGroup
  constructor(private http:UserService) {
    this.createForm()
   }

  ngOnInit(): void {
  }
  private createForm(){
    this.formRegister = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  public sendUser(){
    console.log(this.formRegister.value);
    this.http.doRegister('/create-user',this.formRegister.value)
      .subscribe({
        next:(data)=>{
          console.log('exito',data);
          
        },
        error: (err)=>{
          console.log('Error');
          
        }
      })
  }
}
