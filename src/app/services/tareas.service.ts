import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  arrTareas: Tarea[];

  constructor() { 
    this.arrTareas = [
      new Tarea('Fregar','Fregar el suelo de la cocina',7),
      new Tarea('Barrer','Barrer el suelo del salón',3),
      new Tarea('Limpiar','Limpiar la habitación grande',1),
      new Tarea('Hacer compra','Leche y pan',7),
      new Tarea('Beber agua','2L al menos',3),
      new Tarea('Estudiar','Cómo mejorar en Angular',1)
    ];
  }

  insert(tarea){
    
    tarea['completada'] = (tarea['completada']==='true') ? true : false;
    tarea['prioridad'] = parseInt(tarea['prioridad']);

    this.arrTareas.push(new Tarea(tarea['titulo'],tarea['descripcion'],tarea['prioridad'],tarea['completada']));
    console.log(this.arrTareas);
  }

  getAll(): Promise<Tarea[]>{
    return new Promise((resolve,reject) => {
      resolve(this.arrTareas);
    })
  }

  completada(index){
    this.arrTareas[index].complete = true;
    // this.arrTareas.splice(index,1);
  }

  eliminada(index){
    this.arrTareas.splice(index,1);
  }

}
