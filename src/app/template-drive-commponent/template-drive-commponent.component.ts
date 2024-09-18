import { Component, Input, output, Output } from '@angular/core';
import { UserserviceService } from '../userregister.service';
import { subscribe } from 'node:diagnostics_channel';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-drive-commponent.component.html',
  styleUrl: './template-drive-commponent.component.css'
})
export class TemplateDriveCommponentComponent {

  name:string="Angular Demo";

  subject = new Subject<string>();
  password:string='';
  @Output()
  userNameEmitter : EventEmitter<string> =new EventEmitter();

  
  constructor(private userserviceSErvice :UserserviceService){
   this.subject.subscribe(data =>{
    console.log(" form subjecct subscriber data value"+data);

   })
   console.log(" form constractor");
   
  }

  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''


  };
  successMessage:String='';
  register(form:any):void{
    this.subject.next(" testing Subject in angular"+this.userDetails.name);
    this.subject.next(" 2222222222222");

    this.userNameEmitter.emit(this.userDetails.name);
    var synchResponse = this.userserviceSErvice.learnObservable(this.userDetails);

   


   var response= this.userserviceSErvice.saveUser(this.userDetails);
   response.subscribe(response=>{
    console.log(" from subscribe of observable"+JSON.stringify(response));

   }, error=>{
    console.log(" from  subscribe of observable Error");

   });

    console.log(" registration is inprogess"+JSON.stringify(this.userDetails)+"response"+response);
  
  }
}