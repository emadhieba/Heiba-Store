import { Component, ElementRef, ViewChild, AfterViewInit,  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { CreatAcount,loginData } from '../constans/DTO';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  imports:[SharedModuleModule]
})
export class SignComponent implements AfterViewInit{

  @ViewChild('signUp', { static: false }) signUpButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('signIn', { static: false }) signInButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;

  signUpForm: FormGroup;
  signInForm: FormGroup;
  apiErrorMessage:string='';
   apiErrorMessageS:string='';
  constructor(private service:LoginService , private router: Router){

    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.nullValidator])
      });
   

    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.nullValidator]) // ✅ كلمة المرور يجب أن تكون 6 أحرف على الأقل
    });

  }
  ngAfterViewInit(): void {
    if (this.signUpButton && this.signInButton && this.container) {
      console.log('Buttons and container found.');

      this.signUpButton.nativeElement.addEventListener('click', () => {
        console.log('Sign Up button clicked');
        this.container.nativeElement.classList.add("right-panel-active");
      });

      this.signInButton.nativeElement.addEventListener('click', () => {
        console.log('Sign In button clicked');
        this.container.nativeElement.classList.remove("right-panel-active");
      });
    } else {
      console.error('One or more elements not found.');
    }
  }

 onSignUp(): void {
  if (this.signUpForm.invalid) {
    this.signUpForm.markAllAsTouched();
    console.log('Invalid Sign Up Form');
    return;
  }

  const maill: CreatAcount = {
    username: this.signUpForm.value['name'],   
    email: this.signUpForm.value['email'],
    password: this.signUpForm.value['password'],
    role: 'user',
  
  
  };

  this.service.CreateUser(maill).subscribe({
    next: (res) => {
      console.log('User Created Successfully', res);
      this.signUpForm.reset();
      this.signUpForm.setValue({
        name: '',
        email: '',
        password: ''
      });
      this.signUpForm.markAsPristine();
      this.signUpForm.markAsUntouched();
      this.container.nativeElement.classList.remove("right-panel-active");
    },
    error: (err) => {
      console.error('API Error:', err);
      this.apiErrorMessageS = err.error?.message || 'An error occurred while creating an account.';
    }
  });
}

  onSignIn(): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched(); 
      console.log('Invalid Sign In Form');
      return;
    }
  
    const userLogin: loginData = {
      email: this.signInForm.value['email'], 
      password: this.signInForm.value['password'],
      role: 'user'
    };
  
    this.service.Login(userLogin).subscribe({
      next: (res) => {
        console.log('Login Successful', res);
        localStorage.setItem('user', this.signInForm.value['email'])
        this.signInForm.reset();
        this.signInForm.setValue({
          email: '',
          password: ''
        });
        this.signInForm.markAsPristine();
        this.signInForm.markAsUntouched();
        
        this.router.navigateByUrl("Home");

      },
      error: (err) => {
        console.error('API Error:', err);
        this.apiErrorMessage = err.error?.message || 'Invalid username or password.';
      }
    });
  }
  
  
}
