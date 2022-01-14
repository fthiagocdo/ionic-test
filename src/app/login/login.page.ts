import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6)]]
      })
  }

  submitLoginForm() {
    this.router.navigate(['home']);
  }

}
