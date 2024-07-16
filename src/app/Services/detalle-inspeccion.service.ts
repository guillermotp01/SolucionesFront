import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsetting';
import { Observable } from 'rxjs';
import { Componente } from '../Models/Componente';
import { EstadoConservacion } from '../Models/EstadoConservacion';
import { FormatoInspeccion } from '../Models/FormatoInspeccion';
import { DetalleFormatoInspeccion } from '../Models/DetalleFormatoInspeccion';

@Injectable({
  providedIn: 'root'
})
export class DetalleInspeccionService {


  private http=inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/detalleFormatoInspeccion";

  constructor() { }

  registrar(detalle: DetalleFormatoInspeccion): Observable<DetalleFormatoInspeccion> {
    return this.http.post<DetalleFormatoInspeccion>(`${this.apiUrl}/registrar`, detalle);
  }

  listar(): Observable<DetalleFormatoInspeccion[]> {
    return this.http.get<DetalleFormatoInspeccion[]>(`${this.apiUrl}/listar`);
  }


  listarComponentes(){
    return this.http.get<Componente[]>(`${this.apiUrl}/listarComponentes`);
  }

  listarEstadosConservacion() {
    return this.http.get<EstadoConservacion[]>(`${this.apiUrl}/listarEstadoConservacion`);
  }
}
