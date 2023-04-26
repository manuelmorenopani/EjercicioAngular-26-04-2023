import { Component } from '@angular/core';
import { listaalumnos } from '../modulos/listaalumnos';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioalumnoService } from '../servicioalumno.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-componente1-formulario',
  templateUrl: './componente1-formulario.component.html',
  styleUrls: ['./componente1-formulario.component.css']
})
export class Componente1FormularioComponent {
  alumnoFormulario:FormGroup = new FormGroup ({
    id : new FormControl(0),
    dni : new FormControl(0),
    nombre : new FormControl (''),
    horas : new FormControl(0)
   })
  alumnonuevo: listaalumnos;

  

   constructor(private servicioalumnos: ServicioalumnoService, private activateroute: ActivatedRoute){
    
   }
   ngOnInit(): void {
    this.activateroute.params.subscribe(params=>{

      this.servicioalumnos.buscarfactura(params["id"]).subscribe(alumno => {
        this.alumnonuevo=alumno;

        this.alumnoFormulario= new FormGroup ({

          id : new FormControl(this.alumnonuevo.id),
          dni : new FormControl(this.alumnonuevo.dni),
          nombre : new FormControl (this.alumnonuevo.nombre),
          horas : new FormControl(this.alumnonuevo.horas)
        });
      
        
      })
      

    })

  
}
   anadir(){
    const alumno2 :listaalumnos={
      id : this.alumnoFormulario.value.id,
      dni : this.alumnoFormulario.value.dni,
      nombre : this.alumnoFormulario.value.nombre,
      horas: this.alumnoFormulario.value.horas,
    };
    
    this.servicioalumnos.modificarcurso(alumno2.id, alumno2)
    console.log(alumno2)
    
    }
  alta(){
  
    const alumno1:listaalumnos={
      id : this.alumnoFormulario.value.id,
      dni : this.alumnoFormulario.value.dni,
      nombre : this.alumnoFormulario.value.nombre,
      horas: this.alumnoFormulario.value.horas,
    };
    this.servicioalumnos.anadiralumno(alumno1)
  }

}
