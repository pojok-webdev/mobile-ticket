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
    public ticket: TicketProvider
  ) {
    this.ticket.getTickets(result => {
      console.log('Result',result)
      this.objs = result
    })
  }
  clickOption(){
    console.log("Item clicked")
  }
  doAction(event,item){
    console.log("selected",event)
    switch(event){
      case 'removeticket':
        console.log('ticket should be removed')
        this.ticket.removeTicket(item,result => {
          console.log("Remove Result",result)
          this.ticket.getTickets(result => {
            this.objs = result
          })
        })
      break
    }
  }
  removeTicket(event){
    console.log("Remove Event",event)
    this.ticket.removeTicket(event.target.value,result => {
      console.log("Remove Result",result)
    })
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
