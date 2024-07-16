import { Component, inject, Input, OnInit } from '@angular/core';
import { Vehiculo } from '../../../Models/Vehiculo';
import { Citas } from '../../../Models/Citas';
import { TipoCita } from '../../../Models/TipoCita';
import { CitaService } from '../../../Services/cita.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login.service';
import { VehiculoService } from '../../../Services/vehiculo.service';
import { Cliente } from '../../../Models/Cliente';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sacar-cita',
  templateUrl: './sacar-cita.component.html',
  styleUrls: ['./sacar-cita.component.css']
})
export class SacarCitaComponent implements OnInit {

  @Input('codigo') codigo: number | null = null;
  vehiculos: Vehiculo[] = [];
  vehiculo: Vehiculo = new Vehiculo();
  cita: Citas = new Citas();
  cliente: Cliente = new Cliente();
  tipoCita: TipoCita[] = [];
  vehiculoSeleccionado: number | undefined;
  usuarioIngresa = null;

  constructor(
    private citaService: CitaService, 
    private router: Router, 
    private loginService: LoginService, 
    private vehiculoService: VehiculoService
  ) {}



  ngOnInit(): void {
    this.usuarioIngresa = this.loginService.getUser();
    if (this.usuarioIngresa != null) {
      this.obtenerDatosUsuario();
      this.listarTipoDeCita();
      this.listarVehiculos();
    }
  }

  crearVehiculo() {
    this.cita = {
      id: 0,
      fechaRegistro: new Date,
      fechaInicio:  new Date,
      hora: '',
      precio: 0,
      observaciones: '',
      vehiculo: {
        id: 0,
        placa: '',
        fecha: 0,
        color: '',
        motor: '',
        modelo: {
          id: 0,
          nombre: '',
          marca: {
            id: 0,
            nombre: ''
          }
        }
      },
      tipoCita: {
        id: 0,
        nombre: ''
      },
      estadoCita: {
        id: 0,
        nombre: ''
      }
    };  
  }

  listarTipoDeCita() {
    this.citaService.listarTipoCita().subscribe(resp => {
      if (resp) {
        this.tipoCita = resp;
      }
    });
  }

  obtenerDatosUsuario() {
    this.loginService.getCurrentUser().subscribe(
      (response: any) => this.cliente = response as Cliente,
      error => console.error('Error al obtener datos del usuario', error)
    );
  }

  listarVehiculos() {
    this.vehiculoService.listarVehiculos().subscribe(resp => {
      if (resp) {
        this.vehiculos = resp;
      }
    });
  }

  seleccionarVehiculo(): void {
    if (this.vehiculoSeleccionado) {
      this.vehiculoService.obtenerVehiculoPorId(this.vehiculoSeleccionado).subscribe(
        response => this.vehiculo = response,
        error => console.error('Error al obtener vehículo:', error)
      );
    } else {
      this.vehiculo = new Vehiculo();
    }
  }

  registrarCita() {
    this.citaService.registrarCita(this.cita).subscribe(resp => {
      if (resp) {
        Swal.fire('Éxito', 'Cita registrada correctamente', 'success');
        this.router.navigate(['/']);  
      }
      else{
        console.error('Error al registrar la cita');
        Swal.fire('Error', 'No se pudo registrar la cita', 'error');
      }
    });
  }

  ingresarSesion() {
    this.router.navigate(['login']);
  }

  registroSesion() {
    this.router.navigate(['registro']);
  }

  minDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }
}
