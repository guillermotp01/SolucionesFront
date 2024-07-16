import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginData = {
    "username": '',
    "password": ''
  }

  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  
  }


  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      Swal.fire('','Debe ingresar un nombre de usuario', 'question');
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      Swal.fire('','Debe ingresar una contraseña', 'question');
      return;
    }

    this.loginService.generarToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        console.log(data.token);
        this.loginService.loginUser(data.token); // Guarda el token en localStorage
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user); // Guarda el usuario en localStorage
          console.log(user);
          if(this.loginService.getUserRole() == "empleado"){
            this.router.navigate(['citasAdmin']);
            this.loginService.loginStatusSubject.next(true);
          }
          else if(this.loginService.getUserRole() == "cliente"){
            this.router.navigate(['']);
            this.loginService.loginStatusSubject.next(true);
          }
          else{
            this.loginService.logout();
          }
        })
      }, (error) => {
        console.log(error);
        Swal.fire('Detalles inválidos', 'Vuelva a Intentarlo', 'error'); // Corregir tipografía aquí
      }
    )
  }

  formRegistro(){
    this.router.navigate(['registro']);
  }
}
