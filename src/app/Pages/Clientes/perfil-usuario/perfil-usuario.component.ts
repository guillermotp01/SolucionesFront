import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../Models/Cliente';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent  implements OnInit{
  cliente: any;

  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit(): void {
    this.cliente = this.loginService.getUser();
  }
  
  miPerfil(){
    this.router.navigate(['miperfil']);
  }
  misCitas(){
    this.router.navigate(['miscita']);
  }
  misVehiculos(){
    this.router.navigate(['misautos']);
  }
}
