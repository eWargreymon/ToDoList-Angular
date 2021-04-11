import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  lista: Tarea[];
  
  constructor(private tareasService: TareasService) { 
    tareasService.getAll()
    .then(arr => {
      this.lista = arr;
    })
  }

  ngOnInit(){ 
    // this.lista = await this.tareasService.getAll();
  }

  completada(index){
    this.tareasService.completada(index);
  }

  eliminada(index){
    this.tareasService.eliminada(index);
  }
  
}
