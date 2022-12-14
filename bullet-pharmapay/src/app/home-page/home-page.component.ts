import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  numberForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  keyPress(event: any) {
    const number = event.target.value;
    console.log(number.length)
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
    if(number.length == 10){
      this.router.navigateByUrl('/otp')
    }
  }

  ngOnInit(){
    this.numberForm = this.formBuilder.group({
      phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  get f() { return this.numberForm.controls; }
}
