import { TestBed } from '@angular/core/testing';

import { FormatoInspeccionService } from './formato-inspeccion.service';

describe('FormatoInspeccionService', () => {
  let service: FormatoInspeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatoInspeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
