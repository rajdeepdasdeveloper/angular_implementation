import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm : FormGroup;

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { 
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  
  ngOnInit(): void {
  }

  public formBeingSubmitted = false;
  public loginUnsuccessful = false;
  public loginSuccessful = false;
  signIn() : void{
    console.log(this.signInForm.get('username')?.value, this.signInForm.get('password')?.value);
    this.formBeingSubmitted = true;
    this.signInForm.disable();
    if(this.signInForm.get('username')?.value == 'admin' && this.signInForm.get('password')?.value == 'Password@1234'){
      setTimeout(() =>{
        alert("Success!!!");
        this.signInForm.get('username')?.patchValue('');
        this.signInForm.get('password')?.patchValue('');
        this.signInForm.get('username')?.reset();
        this.signInForm.get('password')?.reset();
        this.storageService.setItem('accessToken', 'bearer ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+' );
        this.formBeingSubmitted = false;
        this.loginSuccessful = true;
        this.loginUnsuccessful = false;
        this.router.navigate(['/']);
      }, 3000);
    } else {
      setTimeout(() =>{
        this.signInForm.get('password')?.patchValue('');
        this.signInForm.get('password')?.reset();
        this.formBeingSubmitted = false;
        this.signInForm.enable();
        this.loginSuccessful = false;
        this.loginUnsuccessful = true;
      }, 3000);
    }
    this.signInForm.get('password')?.patchValue('********');
  }
}
