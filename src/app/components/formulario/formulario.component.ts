import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private tareasService: TareasService) { 
    this.formulario = new FormGroup({
      titulo: new FormControl('',[
        Validators.required,
        Validators.maxLength(15)
      ]),
      descripcion: new FormControl(),
      prioridad: new FormControl(),
      completada: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.tareasService.insert(this.formulario.value);
    this.formulario.reset();
  }

}
