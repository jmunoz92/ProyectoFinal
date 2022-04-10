import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Input() frmFormulario:any;

  constructor() { }

  ngOnInit(): void {
  }

}
