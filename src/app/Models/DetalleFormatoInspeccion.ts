import { Componente } from "./Componente";
import { EstadoConservacion } from "./EstadoConservacion";

export class DetalleFormatoInspeccion {
    id: number = 0;
    componentes: Componente = new Componente();
    estadoConservacion: EstadoConservacion = new EstadoConservacion();
    formatoDeInspeccionId: number = 0; 
}

