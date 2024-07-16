import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { DetalleCitaComponent } from './Pages/Clientes/detalle-cita/detalle-cita.component';
import { MiCitaComponent } from './Pages/Clientes/mi-cita/mi-cita.component';
import { SacarCitaComponent } from './Pages/Clientes/sacar-cita/sacar-cita.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { PerfilUsuarioComponent } from './Pages/Clientes/perfil-usuario/perfil-usuario.component';
import { AutosUsuarioComponent } from './Pages/Clientes/autos-usuario/autos-usuario.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { UsuariosComponent } from './Pages/Empleados/usuarios/usuarios.component';
import { CitasComponent } from './Pages/Empleados/citas/citas.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    pathMatch: 'full'
  },
  {
    path: 'cita',
    component: SacarCitaComponent,
    pathMatch: 'full'
  },
  {
    path: 'miscita',
    component: MiCitaComponent,
    pathMatch: 'full'
  },
  {
    path: 'detallecita/:id',
    component: DetalleCitaComponent,
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'miperfil',
    component: PerfilUsuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'misautos',
    component: AutosUsuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    pathMatch: 'full'
  },
  {
    path: 'citasAdmin',
    component: CitasComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuarioAdmin',
    component: UsuariosComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
