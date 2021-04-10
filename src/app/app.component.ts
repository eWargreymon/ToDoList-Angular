import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tarea1: Tarea;
  tarea2: Tarea;
  tarea3: Tarea;
  idTarea: number=0;

  constructor(){
    this.tarea1 = new Tarea('Task1','Description1',2,true,++this.idTarea);
    this.tarea2 = new Tarea('Task2','Description2',3,true,++this.idTarea);
    this.tarea3 = new Tarea('Task3','Description3',45,true,++this.idTarea);
  }

  ngOnInit(){
    console.log(this.tarea1);
    console.log(this.tarea2);
    console.log(this.tarea3);
  }

}
