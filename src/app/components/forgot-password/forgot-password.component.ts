import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  formRecover!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formRecover = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get email() {
    return this.formRecover.get('email')!;
  }

  onSubmit() {
    if (this.formRecover.invalid) {
      return;
    }
    console.log("Recuperou!");
  }

}
