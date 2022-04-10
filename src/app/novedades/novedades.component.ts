import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {
  forma:FormGroup;
  validaIndice:any;
  constructor(private fb:FormBuilder) {
    this.forma=this.fb.group({});
    this.crearFormulario();
   }

  ngOnInit(): void {
  }
crearFormulario(){
  this.forma=this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    paterno:['',[Validators.required,Validators.minLength(3)]],
    materno:['',[Validators.required,Validators.minLength(3)]],
    correo: ['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  })

}
guardar(){
if (this.forma.valid){
  console.log('enviado');
  this.validaIndice='SI';
}
else {
  console.log('invalido');
  this.validaIndice='NO';
}
}

get nombre() {return this.forma.get('nombre');};

}
