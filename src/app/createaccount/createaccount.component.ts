import { Component } from '@angular/core';

import { AccountserviceService } from '../accountservice.service';
import { Account } from '../../model/Account';
import { Address } from '../../model/Address';
import { AddressComponent } from '../address/address.component';



@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  
  accountnumber:string='TEST';
  account=new Account('','','',0,'',new Address('','','','',''));
  responseFlag:boolean=true;
 

  constructor(private accountService:AccountserviceService){

  }
  


  creataccount(custaddress:AddressComponent){
    console.log('custaddress'+JSON.stringify(custaddress));
    
    console.log("account details"+JSON.stringify(this.account));

    this.accountService.createAccount(this.account).subscribe(
     data=>{
      this.responseFlag=true;
      this.accountnumber=data.accountnumber2;
      console.log(JSON.stringify(data))
      console.log(this.responseFlag);
      this.account=data;
     }

    )
     
      }
    


  }