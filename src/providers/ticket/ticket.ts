import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { AppvarProvider } from '../appvar/appvar';

@Injectable()
export class TicketProvider {
  objs : Observable<any>

  constructor(
    public http: HttpClient,
    private appvar: AppvarProvider
  ) {
    console.log('Hello TicketProvider Provider');
  }
  getTickets(callback){
    this.objs = this.http.get('http://'+this.appvar.server.host+':'+this.appvar.server.port+'/gettickets/10/1')
    this.objs.subscribe(
      data => {
        console.log('Data getTicket',data)
        callback(data)
      },
      error => {
        console.log('Error getTicket',error)
        callback(error)
      }
    )
  }
  searchTicket(obj,callback){
    this.objs = this.http.post<any[]>('http://'+this.appvar.server.host+':'+this.appvar.server.port+'/searchtickets/',obj)
    this.objs.subscribe(
      data => {
        console.log("searchTicket",data)
        callback(data)
      },
      err => {
        console.log("error searchTicket",err)
        callback(err)
      }
    )
  }
}
