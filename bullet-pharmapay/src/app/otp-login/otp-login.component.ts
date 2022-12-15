import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent {
numberForm!: FormGroup;
  submitted = false;
  // router: any;
  constructor(private formBuilder: FormBuilder, private host: ElementRef, private router: Router) { }
  keyPress(event: any) {
    const number = event.target.value;
    console.log(number.length)
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
    if(number.length == 5){
      // console.log('wwwwwwwwwwwwww')
      this.router.navigateByUrl('/clinic')
    }
  }

  ngOnInit(){
    this.numberForm = this.formBuilder.group({
      phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  ngAfterViewInit(){
    console.log('jsjsjsj')
    this.host.nativeElement.focus();
  }

  get f() { return this.numberForm.controls; }
}
