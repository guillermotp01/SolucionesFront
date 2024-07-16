import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutosUsuarioComponent } from './Pages/Clientes/autos-usuario/autos-usuario.component';
import { DetalleCitaComponent } from './Pages/Clientes/detalle-cita/detalle-cita.component';
import { MiCitaComponent } from './Pages/Clientes/mi-cita/mi-cita.component';
import { SacarCitaComponent } from './Pages/Clientes/sacar-cita/sacar-cita.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { NavegacionComponent } from './Pages/navegacion/navegacion.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { PerfilUsuarioComponent } from './Pages/Clientes/perfil-usuario/perfil-usuario.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { CitasComponent } from './Pages/Empleados/citas/citas.component';
import { UsuariosComponent } from './Pages/Empleados/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AutosUsuarioComponent,
    DetalleCitaComponent,
    MiCitaComponent,
    SacarCitaComponent,
    RegistroComponent,
    LoginComponent,
    PrincipalComponent,
    NosotrosComponent,
    NavegacionComponent,
    FooterComponent,
    PerfilUsuarioComponent,
    ContactoComponent,
    CitasComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    authInterceptorProviders,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
