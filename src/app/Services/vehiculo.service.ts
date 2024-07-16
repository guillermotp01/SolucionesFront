import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Vehiculo } from '../Models/Vehiculo';
import { appsettings } from '../Settings/appsetting';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../Models/ResponseAPI';
import { Marca } from '../Models/Marca';
import { Modelo } from '../Models/Modelo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  private http=inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/vehiculo";
  constructor() { }

  listarVehiculos() {
    return this.http.get<Vehiculo[]>(`${this.apiUrl}/listar`);
  }

  obtenerVehiculoPorId(vehiculoId: number){
    return this.http.get<Vehiculo>(`${this.apiUrl}/obtener/${vehiculoId}`);
  }

  crear(objeto:Vehiculo){
    return this.http.post<ResponseAPI>(`${this.apiUrl}/agregar`, objeto);
  }

  eliminar(codigo:number){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/eliminar/${codigo}`);
  }

  actualizar(id: number, request: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/actualizar/${id}`, request);
  }

  listarMarca() {
    return this.http.get<Marca[]>(`${this.apiUrl}/marcas`);
  }

  listarModelo() {
    return this.http.get<Modelo[]>(`${this.apiUrl}/modelos`);
  }
}
