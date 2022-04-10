import { Component, OnInit } from '@angular/core';
import {IndicadorUFService} from '../service/indicador-uf.service'
import {SismoService} from '../service/sismo.service'

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  valorUF:any;
  fechaUF:any;

  valorIpc:any;
  fechaIpc:any;




  constructor(private IndicadorService:IndicadorUFService) { }

  ngOnInit(): void {
   this.recuperaUf();
   
  }
  
  recuperaUf(){
  this.IndicadorService.getUf().subscribe(resp=>
    {
      this.fechaUF = resp.uf.fecha;
      this.valorUF = resp.uf.valor
      this.valorIpc = resp.ipc.valor;
      this.fechaIpc=resp.ipc.fecha;
    }
    
    )
 
}



}
