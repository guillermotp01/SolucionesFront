import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitaService } from '../../../Services/cita.service';
import { Citas } from '../../../Models/Citas';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrl: './detalle-cita.component.css'
})
export class DetalleCitaComponent {
  citas: Citas | undefined;

  constructor(private route: ActivatedRoute, private citaService: CitaService) {}

  ngOnInit(): void {
    this.obtenerDetalleCita();
  }

  obtenerDetalleCita(): void {
    const id = Number(this.route.snapshot.paramMap.get('idCita')); 
    if (id) {
      this.citaService.obtener(id).subscribe(citas => {
        this.citas = citas;
      });
    }
  }
}
