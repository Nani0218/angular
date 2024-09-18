import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userBehavior =new  BehaviorSubject<string>(' neoteric');
  



  emiName(name:any):void{
    this.userBehavior.next(name);
  }

  public apiUrl = 'http://localhost:8080/api/saveUser';

  constructor(private http: HttpClient) { } //constructor injection Angular will creates the HttpCLient so we need to call httpclient soo we create constructor 




  learnObservable(userDetails: { name: string; email: string; address: string; mobile: string; age: null; gender: string; }):Observable<string>{
     return new Observable<string>( observer=>{
      console.log('Observer executed');
     setTimeout(()=> observer.next('Neoteric'),6000);
     });

  }

  saveUser(user: any) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'companyname':'Neoteric',
        'Content-Type':  'application/json',  //indicate the media type of the class, it give data of the body
        'Accept': 'application/json'
        
      })
    };
    console.log('data in service'+JSON.stringify(user));

    return this.http.post(this.apiUrl, user,httpOptions);
   }

}