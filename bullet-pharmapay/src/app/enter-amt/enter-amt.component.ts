import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-amt',
  templateUrl: './enter-amt.component.html',
  styleUrls: ['./enter-amt.component.css']
})
export class EnterAmtComponent {
  constructor(private router: Router) { }
    clinicName:any;
    amount:Array<string>=[] 
    ngOnInit(){
      if(localStorage.getItem('Cllinic Name') != undefined){
        this.clinicName = localStorage.getItem('Cllinic Name')
      }else{
        this.clinicName = 'The Clinic'
      }
      
    }
    backstrok(e:any){
      console.log('rrrrrrrrrrrrr')
      this.amount.pop()
    }
    async onSave(event: any) {
     // const amount = [];
     if(event.target.innerText != '<'){
      this.amount.push(event.target.innerText)
      console.log(this.amount)
     }
      
    }
   
}
