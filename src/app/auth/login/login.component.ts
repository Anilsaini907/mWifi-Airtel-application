import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      myCheckbox: new FormControl(false)
    });
  }

  ngOnInit(): void {
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

 get myCheckbox(){
  return this.loginForm.get('myCheckbox');
 }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
    
      if (formData.username != '' && formData.password != '') {
        console.log('Login successful');
        this.router.navigate(['/pages/dashboard']);
      }
      console.log('Form Data:', formData);
    }
    else {
      console.log('Login failed');
      this.router.navigate(['/auth/login']);
    }
  }


}
