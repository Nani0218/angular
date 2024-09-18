import { Component } from '@angular/core';

import { restaurant } from '../../model/Restaurant';
import { Rating } from '../../model/Rating';
import { Address } from '../../model/Address';

@Component({
  selector: 'app-addingrestaurant',
  templateUrl: './addingrestaurant.component.html',
  styleUrl: './addingrestaurant.component.css'
})
export class AddingrestaurantComponent {

  restaurant =new restaurant('',new Address('','','','',''),new Rating(0,''));

  addRestaurant():void{
    console.log("jcbhckbjgzxbhk")
  }
}
