import { Component, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { UserserviceService } from './userregister.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangulardemo';

  fullNameFromChild:string='';

  constructor(private userregisterServices:UserserviceService){

    this.userregisterServices.userBehavior.subscribe(
    data =>{
        this.fullNameFromChild=data;

        console.log(" from Appcomponent subscribe");
      }
    );
  }


  
  register(){
    
  }

  forgetpassword(){
    
  }
  login(){
   
  }
}
