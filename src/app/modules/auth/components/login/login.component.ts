import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/core/services/auth.service/authservice.service';
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
        private authenticationService: AuthserviceService,
    ) {
        this.authenticationService.removeToken();
    }

    get f() {
        return this.loginForm.controls;
      }
    
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/converter';

        this.loginForm = this.fb.group({
            username : ['user1', [Validators.required]],
            password : ['pass1', [Validators.required]],

        });
    }

    onSubmit($event:string) {
        this.isSubmit = true;
        this.animationActive = !this.animationActive;
        this.router.navigate([this.returnUrl]);
        // you can use it with api for post user and return with token 
        // this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
        //     () => {
        //         this.router.navigate([this.returnUrl]);
        //     },
        //     (err: string) => {

        //         this.isSubmit = false;
        //         this.animationActive = false;
        //     },
        // );
    }

}
