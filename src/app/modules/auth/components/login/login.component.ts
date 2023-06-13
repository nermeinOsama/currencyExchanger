import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({});
     isSubmit: boolean = false;
     returnUrl: string ='converter';
     animationActive: boolean= false;

    constructor(
        private fb: FormBuilder,
        public router: Router,
        private route: ActivatedRoute,
    ) {
    }

    get f() {
        return this.loginForm.controls;
      }
    
    ngOnInit() {

        this.loginForm = this.fb.group({
            username : ['user1', [Validators.required]],
            password : ['pass1', [Validators.required]],

        });
    }

    onSubmit($event:string) {
        this.isSubmit = true;
        this.animationActive = !this.animationActive;
        this.router.navigate([this.returnUrl]);
       
    }

}
