import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TecnicosService } from '../../services/tecnicos.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  formularioForm: FormGroup;  
  datos_formulario: any;
  tecnicos: any[] = []; 

  constructor(private fb: FormBuilder, private tecnicosService: TecnicosService) {
   
    this.formularioForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
      telefono: [''],
      mensaje: ['']
    });
  }

  ngOnInit(): void {

    this.getTecnicos();
  }

  getTecnicos() {
    this.tecnicosService.getTecnicos().subscribe((data: any[]) => {
      this.tecnicos = data; 
    });
  }

  enviarDatos() {
    if (this.formularioForm.valid) {
      this.datos_formulario = this.formularioForm.value;
    }
  }
}
