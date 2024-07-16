import { Component, Input, OnInit, inject } from '@angular/core';
import { CitaService } from '../../../Services/cita.service';
import { Router } from '@angular/router';
import { Citas } from '../../../Models/Citas';

@Component({
  selector: 'app-mi-cita',
  templateUrl: './mi-cita.component.html',
  styleUrl: './mi-cita.component.css'
})
export class MiCitaComponent implements OnInit{
  private citasServicio = inject(CitaService);
  listaCitas: Citas[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.obtenerCitasCliente();
  }

  obtenerCitasCliente(): void {
    this.citasServicio.listar().subscribe(
      response => {
        this.listaCitas = response;
      },
      error => {
        console.error('Error al obtener vehículos del cliente:', error);
      }
    );
  }

  crearCita(): void {
    this.router.navigate(['cita']);
  }

  verDetalles(idCita: number): void {
    if (idCita) {
      this.router.navigate(['detallecita/', idCita]); 
    } else {
      console.error('idCita is undefined or null');
    }
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
