import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { listaalumnos } from './modulos/listaalumnos';
@Injectable({
  providedIn: 'root'
})
export class ServicioalumnoService {

  mialumnos:listaalumnos[]=[

    {id:1, dni:1234123, nombre:"Manuel", horas:120},
    {id:2, dni:9876542, nombre:"Alberto", horas:120},
    {id:3, dni:3246472, nombre:"Isra", horas:120},
    {id:4, dni:4455656, nombre:"Ruben", horas:120},
    
  ]


  constructor() { }
  getalumnos():Observable<listaalumnos[]>{
    return of (this.mialumnos)

  }
  getcursobyid(ids : number){
    return this.mialumnos.find(curso => curso.id==ids)
  }

  anadiralumno(curso:listaalumnos){
    this.mialumnos.push(curso)
  }
  buscarfactura(id:number):Observable<listaalumnos>{
    let dato = this.mialumnos.find((mialumnos) => mialumnos.id == id);
    if(dato!=undefined){
      return of(dato)
    }
    else {
      return of({id:0, dni:0, nombre:"", horas:0})
    }

  }
  eliminarfacuta(id:number){
    let dato = this.mialumnos.findIndex((mialumnos) => mialumnos.id=== id)
    if(dato!==-1){
    this.mialumnos.splice(dato, 1)
    }

  }
  modificarcurso(id:number, nuevafactura:listaalumnos){
   
     let dato = this.mialumnos.findIndex((mialumnos) => mialumnos.id==id)
    if(dato!=-1){
    this.mialumnos[dato]=nuevafactura

  } 
}
}
