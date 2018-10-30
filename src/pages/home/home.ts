import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TicketProvider } from '../../providers/ticket/ticket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  objs
  constructor(
    public navCtrl: NavController,
    private ticket: TicketProvider
  ) {
    this.ticket.getTickets(result => {
      console.log('Result',result)
      this.objs = result
    })
  }
  doAction(event){
    console.log("selected",event)
  }
  getItem(event){
    console.log("Event",event.target.value)
    this.ticket.searchTicket({
      name:event.target.value,
      offset:10,
      segment:0
    },result => {
      console.log("searchResult",result)
      this.objs = result
    })
  }
}
