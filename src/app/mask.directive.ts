import { Directive, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {



  @Input()
  
  appMask:string='';
  maskData:string='***';



  constructor() { }


   @HostListener("mouseenter")
  mouseEnter(){
    console.log("Mouse Enter"+this.appMask);

  }
  @HostListener("mouseleave")
  mouseOut(){
    console.log("Mouse Leave"+this.maskData);
       
  }

}