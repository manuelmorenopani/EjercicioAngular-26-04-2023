import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2ListaComponent } from './componente2-lista.component';

describe('Componente2ListaComponent', () => {
  let component: Componente2ListaComponent;
  let fixture: ComponentFixture<Componente2ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2ListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
