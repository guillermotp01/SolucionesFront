import { TestBed } from '@angular/core/testing';

import { DetalleInspeccionService } from './detalle-inspeccion.service';

describe('DetalleInspeccionService', () => {
  let service: DetalleInspeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleInspeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
