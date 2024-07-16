import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent implements OnInit{
  nombreUsuario: string | null = null;
  RolUsuario: string | null = null;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    const user = this.loginService.getUser();
    if (user) {
      this.nombreUsuario = user.nombre; 
      this.RolUsuario = this.loginService.getUserRole();
    }
  }

  cerrarSesion() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  formCita(){
    this.router.navigate(['cita']);
  }

  inicio(){
    this.router.navigate(['']);
  }

  nosotros(){
    this.router.navigate(['nosotros']);
  }

  contacto(){
    this.router.navigate(['contacto']);
  }

  formLogin(){
    this.router.navigate(['login']);
  }

  formRegistro(){
    this.router.navigate(['registro']);
  }

  misCitas(){
    this.router.navigate(['micita']);
  }

  misDatos(){
    this.router.navigate(['miperfil']);
  }

  citasAdmin(){
    this.router.navigate(['citasAdmin']);
  }

  usuarioAdmin(){
    this.router.navigate(['usuarioAdmin']);
  }
}
