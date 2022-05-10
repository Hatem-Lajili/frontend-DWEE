import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Role} from "../../core/models/role";
import {AuthService} from "../../core/service/auth.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService ,
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", Validators.required],
      cpassword: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    }  else {
      this.authService
        .register(this.f.email.value, this.f.password.value,"ROLE_ADMIN")
        .subscribe(
          (res) => {
            if (res) {
              console.log('test res', res )

                const role = res;

                if (res) {
                  console.log('here 11111')
                  this.router.navigate(["/authentication/signin"]);
                }}
          },
          (error) => {



          }
        );
    }
  }
}
