import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1FormularioComponent } from './componente1-formulario.component';

describe('Componente1FormularioComponent', () => {
  let component: Componente1FormularioComponent;
  let fixture: ComponentFixture<Componente1FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1FormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
