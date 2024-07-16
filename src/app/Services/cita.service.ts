import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Citas } from '../Models/Citas';
import { ResponseAPI } from '../Models/ResponseAPI';
import { TipoCita } from '../Models/TipoCita';
import { appsettings } from '../Settings/appsetting';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private http=inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/citas";

  constructor() { }

  listar() {
    return this.http.get<Citas[]>(`${this.apiUrl}/listar`);
  }

  listarTodo() {
    return this.http.get<Citas[]>(`${this.apiUrl}/todasLasCitas`);
  }

  registrarCita(cita: Citas) {
    return this.http.post<ResponseAPI>(`${this.apiUrl}/registrar`, cita);
  }

  obtener(idCita:number){
    return this.http.get<Citas>(`${this.apiUrl}/obtener/${idCita}`);
  }

  listarTipoCita() {
    return this.http.get<TipoCita[]>(`${this.apiUrl}/tipoCita`);
  }

  existeId(id: number){
    return this.http.get<boolean>(`${this.apiUrl}/existeCita/${id}`);
  }
}
