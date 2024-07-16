import { Injectable } from '@angular/core';
import { ResponseAPI } from '../Models/ResponseAPI';
import { HttpClient } from '@angular/common/http';
import { appsettings } from '../Settings/appsetting';
import { Subject } from 'rxjs';
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = appsettings.apiUrl + "/validar";
  public loginStatusSubject = new Subject<boolean>();
  

  constructor(private http: HttpClient) { }

  // Método para generar el token
  public generarToken(loginData: any){
    return this.http.post<ResponseAPI>(`${this.apiUrl}/ingresar`, loginData);
  }

  // Método para obtener el usuario actual
  public getCurrentUser(){
    return this.http.get(`${this.apiUrl}/actual-usuario`);
  }
  
  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token: any){
    localStorage.setItem('token',token);
    return true;
  }

  public isLoggedIn(): boolean {
    let tokenStr = localStorage.getItem('token');
    return !!tokenStr;
  }

  //cerranis sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role'); 
    this.loginStatusSubject.next(false); // Notificar que el usuario ha cerrado sesión
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.setUserRole(user.authorities[0].authority); // Almacenar el rol del usuario
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public setUserRole(role: string) {
    localStorage.setItem('role', role);
  }

  public getUserRole() {
    return localStorage.getItem('role');
  }
}
