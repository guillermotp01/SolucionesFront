import { Citas } from "./Citas";
import { DetalleFormatoInspeccion } from "./DetalleFormatoInspeccion";


export class FormatoInspeccion {
    id: number;
    nombre: string;
    descripcion: string;
    hora: Date;
    detalles: DetalleFormatoInspeccion[];
  
    constructor() {
      this.id = 0;
      this.nombre = '';
      this.descripcion = '';
      this.hora = new Date();
      this.detalles = [];
    }
  }
  