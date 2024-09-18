import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''


  };

}
