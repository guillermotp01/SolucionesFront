import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsetting';
import { FormatoInspeccion } from '../Models/FormatoInspeccion';
import { Observable } from 'rxjs';
import { EstadoConservacion } from '../Models/EstadoConservacion';
import { Componente } from '../Models/Componente';

@Injectable({
  providedIn: 'root'
})
export class FormatoInspeccionService {

  private http=inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/formatoInspeccion";

  constructor() { }

  registrar(formato: FormatoInspeccion): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, formato);
  }

  listar(): Observable<FormatoInspeccion[]> {
    return this.http.get<FormatoInspeccion[]>(`${this.apiUrl}/listar`);
  }
}
