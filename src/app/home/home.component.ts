import { Component, OnInit } from '@angular/core';
import {SismoService} from '../service/sismo.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sismo:any;
  constructor(private TraeSismo:SismoService) { }

  ngOnInit(): void {
    this.getTemblor();
  }
  
  getTemblor(){
                  this.TraeSismo.getSismo().subscribe(resp=>{
                        /*   this.sismo = resp;
                          console.log(this.sismo.events); */
                          console.log(resp.events)
                          this.sismo=resp.events;
                                                            })
  }  
}

