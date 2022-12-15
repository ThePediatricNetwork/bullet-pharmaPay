import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent {
[x: string]: any;
constructor(private router: Router) { }
async onSave(event: any) {
  const clinic_name = event.target.text;
  await localStorage.setItem('Cllinic Name',clinic_name);

  if(clinic_name.length > 0){
    this.router.navigateByUrl('/enter-amt')
  }

}
}
