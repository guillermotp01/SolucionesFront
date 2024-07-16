import { EstadoCita } from "./EstadoCita";
import { TipoCita } from "./TipoCita";
import { Vehiculo } from "./Vehiculo";

export class Citas {
    id: number =  0;
    fechaRegistro: Date = new Date();
    fechaInicio: Date = new Date();
    hora: string  = '';
    precio: number  =  0;
    observaciones: string = '';
    vehiculo: Vehiculo = new Vehiculo(); 
    tipoCita: TipoCita = new TipoCita();  
    estadoCita: EstadoCita = new EstadoCita();  
}