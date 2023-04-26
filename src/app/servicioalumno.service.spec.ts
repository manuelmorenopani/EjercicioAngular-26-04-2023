import { TestBed } from '@angular/core/testing';

import { ServicioalumnoService } from './servicioalumno.service';

describe('ServicioalumnoService', () => {
  let service: ServicioalumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioalumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
