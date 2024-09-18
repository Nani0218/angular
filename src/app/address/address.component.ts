import { Component, output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  
  
  

  address={
    add1:'',
    add2:'',
    pincode:'',
    state:'',
    city:'',

  }
}
