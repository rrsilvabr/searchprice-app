import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/)]),
    cpf_cnpj: new FormControl('', [Validators.required, Validators.pattern(/^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{11}|\d{14})$/)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),
    confirm_password: new FormControl('', Validators.required),
    terms_checkbox: new FormControl('', Validators.requiredTrue)
});

  handleSubmit() {
    alert(this.signupForm.value.name + ' | ' + this.signupForm.value.email + ' | ' + 
         this.signupForm.value.phone + ' | ' + this.signupForm.value.cpf_cnpj + ' | ' +
         this.signupForm.value.password);
  }
}
