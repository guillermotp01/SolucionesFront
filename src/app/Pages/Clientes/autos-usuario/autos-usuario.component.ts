import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from '../../../Services/vehiculo.service';
import { Vehiculo } from '../../../Models/Vehiculo';
import { Marca } from '../../../Models/Marca';
import { Modelo } from '../../../Models/Modelo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autos-usuario',
  templateUrl: './autos-usuario.component.html',
  styleUrls: ['./autos-usuario.component.css']
})
export class AutosUsuarioComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  vehiculo: Vehiculo = new Vehiculo();
  actualizarModal: boolean = false;
  idVehiculoEliminar: number = 0;
  MostrarModalActualizarVehiculo: boolean = false;
  MostrarModalEliminarVehiculo: boolean = false;

  constructor(private vehiculoService: VehiculoService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerVehiculosCliente();
    this.listarMarcas();
    this.listarModelos();
  }

  obtenerVehiculosCliente(): void {
    this.vehiculoService.listarVehiculos().subscribe(
      response => {
        this.vehiculos = response;
      },
      error => {
        console.error('Error al obtener vehículos del cliente:', error);
      }
    );
  }

  listarMarcas() {
    this.vehiculoService.listarMarca().subscribe(data => {
      this.marcas = data;
    });
  }

  listarModelos() {
    this.vehiculoService.listarModelo().subscribe(data => {
      this.modelos = data;
    });
  }

  crearVehiculo() {
    this.actualizarModal = false;
    this.MostrarModalActualizarVehiculo = true;
    this.vehiculo = {
      id: 0,
      placa: '',
      color: '',
      fecha: 0,
      motor: '',
      modelo: {
        id: 0,
        nombre: '',
        marca: {
          id: 0,
          nombre: ''
        }
      }
    };  
  }

  modalActualizar(item: any): void {
    this.actualizarModal = true;
    this.MostrarModalActualizarVehiculo = true;
    this.MostrarModalEliminarVehiculo = false;

    this.vehiculo = {
      id: item.id,
      placa: item.placa,
      color: item.color,
      fecha: item.fecha,
      motor: item.motor,
      modelo: {
        id: item.modelo.id,
        nombre: item.modelo.nombre,
        marca: {
          id: item.modelo.marca.id,
          nombre: item.modelo.marca.nombre
        }
      }
    };
  }

  modalEliminar(id: number) {
    this.idVehiculoEliminar = id;
    this.MostrarModalEliminarVehiculo = true;
    this.MostrarModalActualizarVehiculo = false;
  }

  guardar() {
    this.vehiculoService.crear(this.vehiculo).subscribe(resp => {
      if (resp) {
        Swal.fire('Registro Exitoso', 'El vehiculo fue registrado correctamente', 'success')
        this.obtenerVehiculosCliente();
      }else{
        Swal.fire('Registro Fallido', 'El vehiculo no se pudo registrar', 'error')
        this.obtenerVehiculosCliente();
      }
    });
    this.MostrarModalActualizarVehiculo = false;
  }

  actualizar() {
    const vehiculoId = this.vehiculo.id;
    this.vehiculoService.actualizar(vehiculoId, this.vehiculo).subscribe(resp => {
      if (resp) {
        this.obtenerVehiculosCliente();
      }
    });
    this.MostrarModalActualizarVehiculo = false;
  }

  eliminar() {
    this.vehiculoService.eliminar(this.idVehiculoEliminar).subscribe(resp => {
      if (resp) {
        this.obtenerVehiculosCliente();
      }
    });
    this.MostrarModalEliminarVehiculo = false;
  }

  cancelar() {
    this.MostrarModalActualizarVehiculo = false;
    this.MostrarModalEliminarVehiculo = false;
  }

  miPerfil() {
    this.router.navigate(['miperfil']);
  }

  misCitas() {
    this.router.navigate(['miscita']);
  }

  misVehiculos() {
    this.router.navigate(['misautos']);
  }
}
