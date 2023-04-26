import { Component } from '@angular/core';
import { listaalumnos } from '../modulos/listaalumnos';
import { ServicioalumnoService} from '../servicioalumno.service';

@Component({
  selector: 'app-componente2-lista',
  templateUrl: './componente2-lista.component.html',
  styleUrls: ['./componente2-lista.component.css']
})
export class Componente2ListaComponent {

  alumno : listaalumnos = {id:0, dni:0, nombre:"", horas:0}
  alumnos : listaalumnos[]=[]
  ids : number = 0


  constructor(private servicioalumnos: ServicioalumnoService){
    
    }
  

  ngOnInit(): void {

    this.servicioalumnos.getalumnos().subscribe(data => {
    this.alumnos=data
  })
}


}
