import { Component } from '@angular/core';

/**
 * Generated class for the RemoveConfirmationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'remove-confirmation',
  templateUrl: 'remove-confirmation.html'
})
export class RemoveConfirmationComponent {

  text: string;

  constructor() {
    console.log('Hello RemoveConfirmationComponent Component');
    this.text = 'Hello World';
  }

}
