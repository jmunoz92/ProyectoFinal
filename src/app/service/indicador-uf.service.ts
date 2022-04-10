import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadorUFService {
url='https://mindicador.cl/api';
  constructor(private http:HttpClient) { }

  getUf():Observable<any>
  {
  return this.http.get(this.url);
  
  }
}
