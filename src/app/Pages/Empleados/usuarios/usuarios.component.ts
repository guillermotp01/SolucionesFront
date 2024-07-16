import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../Models/Cliente';
import { UsuarioService } from '../../../Services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  MostrarModalActualizarCliente: boolean = false;
  MostrarModalEliminarCliente: boolean = false;
  actualizarModal: boolean = false;
  idClienteEliminar: number = 0;


  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {
    this.listarUsuarios();
  }

  crearUsuario() {
    this.actualizarModal = false;
    this.MostrarModalActualizarCliente = true;
    this.cliente = {
        id: 0,
        nombre: '',
        apellido: '',
        tipoDocumento:'',
        nroDocumento:0,
        correo: '',
        username:'',
        password:'',
        direccion: '',
        telefono:0
    };  
  }

  modalActualizar(item: any): void {
    this.actualizarModal = true;
    this.MostrarModalActualizarCliente = true;
    this.MostrarModalEliminarCliente = false;

    this.cliente = {
        id: item.id,
        nombre: item.nombre,
        apellido: item.apellido,
        tipoDocumento: item.tipoDocumento,
        nroDocumento: item.nroDocumento,
        correo: item.correo,
        username: item.username,
        password: item.password,
        direccion: item.direccion,
        telefono: item.telefono
    };
  }

  modalEliminar(id: number) {
    this.idClienteEliminar = id;
    this.MostrarModalEliminarCliente = true;
    this.MostrarModalActualizarCliente = false;
  }

  listarUsuarios(): void {
    this.usuarioService.listar().subscribe(
      usuarios => {
        this.clientes = usuarios;
      },
      error => {
        console.error('Error al obtener clientes', error);
      }
    );
  }

  actualizar() {
    const clienteId = this.cliente.id;
    this.usuarioService.actualizar(clienteId, this.cliente).subscribe(resp => {
        if (resp) {
            this.listarUsuarios();
        }
    });
    this.MostrarModalActualizarCliente = false;
}

  eliminar(){
    this.usuarioService.eliminar(this.idClienteEliminar).subscribe(resp => {
      if(resp){
        this.listarUsuarios();
      }
    });
    this.MostrarModalEliminarCliente = false;
  }

  guardar() {
    this.usuarioService.crear(this.cliente).subscribe(resp => {
      if (resp) {
        this.listarUsuarios();  
      }
    });
    this.MostrarModalActualizarCliente = false;
  }


  cancelar() {
    this.MostrarModalActualizarCliente = false;
    this.MostrarModalEliminarCliente = false;
  }
}
