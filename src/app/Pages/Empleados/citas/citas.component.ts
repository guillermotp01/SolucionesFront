import { Component, OnInit } from '@angular/core';
import { Citas } from '../../../Models/Citas';
import { CitaService } from '../../../Services/cita.service';
import { Router } from '@angular/router';
import { FormatoInspeccion } from '../../../Models/FormatoInspeccion';
import { FormatoInspeccionService } from '../../../Services/formato-inspeccion.service';
import { DetalleFormatoInspeccion } from '../../../Models/DetalleFormatoInspeccion';
import { EstadoConservacion } from '../../../Models/EstadoConservacion';
import { Componente } from '../../../Models/Componente';
import Swal from 'sweetalert2';
import { DetalleInspeccionService } from '../../../Services/detalle-inspeccion.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  listaCitas: Citas[] = [];
  cita: Citas = new Citas();
  estadosConservacion: EstadoConservacion[] = [];
  componentes: Componente[] = [];
  formatoInspeccion: FormatoInspeccion = new FormatoInspeccion();
  formatosInspeccion: FormatoInspeccion[] = [];
  detalleFormatoInspeccion: DetalleFormatoInspeccion = new DetalleFormatoInspeccion();
  mostrarModalFormatoInspeccion: boolean = false;
  mostrarModalDetalleFormatoInspeccion: boolean = false;

  constructor(
    private router: Router,
    private citaService: CitaService,
    private detalleFormatoService: DetalleInspeccionService,
    private formatoService: FormatoInspeccionService
  ) {}

  ngOnInit(): void {
    this.listarCitas();
    this.listarComponentes();
    this.listarEstadosConservacion();
  }

  listarCitas(): void {
    this.citaService.listarTodo().subscribe(
      response => {
        this.listaCitas = response;
      },
      error => {
        console.error('Error al obtener las citas', error);
      }
    );
  }

  listarComponentes(): void {
    this.detalleFormatoService.listarComponentes().subscribe(data => {
      this.componentes = data;
    });
  }

  listarEstadosConservacion(): void {
    this.detalleFormatoService.listarEstadosConservacion().subscribe(data => {
      this.estadosConservacion = data;
    });
  }

  mostrarConfirmacion(cita: Citas): void {
    Swal.fire({
      title: '¿Deseas crear un formato de inspección?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, crear formato'
    }).then((result) => {
      if (result.isConfirmed) {
        this.crearFormatoInspeccion(cita);
      }
    });
  }

  crearFormatoInspeccion(cita: Citas): void {
    const nuevoFormato = {
      id: 0,
      nombre: 'formato',
      descripcion: 'nuevo formato para la inspección',
      hora: new Date(),
      detalles: []
    };

    this.formatoService.registrar(nuevoFormato).subscribe(resp => {
      console.log('Respuesta del backend:', resp); // Log para verificar la respuesta
      if (resp.success) {
        const formatoId = resp.formatoId; // Obtener el ID del formato creado desde la respuesta
        console.log('ID del Formato creado:', formatoId); // Log para verificar el ID
        this.abrirModalFormatoInspeccion(cita, formatoId); // Abrir el modal con el ID del formato
      } else {
        console.error('Error al registrar el Formato de Inspección');
      }
    }, error => {
      console.error('Error al registrar el Formato de Inspección', error);
    });
  }

  abrirModalFormatoInspeccion(cita: Citas, formatoId: number): void {
    this.cita = cita;
    this.formatoInspeccion.id = formatoId; // Asignar el ID al formato de inspección
    this.mostrarModalFormatoInspeccion = true; // Mostrar el modal
  }

  cerrarModalFormatoInspeccion(): void {
    this.mostrarModalFormatoInspeccion = false;
  }

  cerrarModalDetalleFormatoInspeccion(): void {
    this.mostrarModalDetalleFormatoInspeccion = false;
  }

  agregarDetalle(): void {
    if (!this.formatoInspeccion.detalles) {
      this.formatoInspeccion.detalles = []; // Asegura que detalles esté inicializado como un arreglo
    }
    this.formatoInspeccion.detalles.push(new DetalleFormatoInspeccion());
  }

  removerDetalle(index: number): void {
    if (this.formatoInspeccion.detalles) {
      this.formatoInspeccion.detalles.splice(index, 1);
    }
  }

  guardarDetalleFormatoInspeccion(id: number): void {
    this.detalleFormatoInspeccion.formatoDeInspeccionId = id; // Asignar el ID del formato de inspección al detalle
    this.detalleFormatoService.registrar(this.detalleFormatoInspeccion).subscribe(
      response => {
        console.log('Detalle de Formato de Inspección registrado con éxito', response);
        this.cerrarModalFormatoInspeccion(); // Cerrar el modal después de guardar
      },
      error => {
        console.error('Error al registrar el Detalle de Formato de Inspección', error);
      }
    );
  }
}
