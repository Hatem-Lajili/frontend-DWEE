import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Role} from "../../core/models/role";
import {Gender} from "../../admin/doctors/alldoctors/gender";
import {AuthService} from "../../core/service/auth.service";
import {DoctorsService} from "../../admin/doctors/alldoctors/doctors.service";
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
    private doctorService: DoctorsService,
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dateJoining: [],
      phoneNumber: [],
      role: ["Role", Validators.required],
      gender: ["Gender", Validators.required],
      password: ["", Validators.required],
      cpassword: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
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
        // tslint:disable-next-line:max-line-length
        .register(this.f.email.value, this.f.firstname.value, this.f.lastname.value, this.f.phoneNumber.value, this.f.gender.value, this.f.dateJoining.value, this.f.password.value, this.f.role.value)
        .subscribe(
          (res) => {
            if (res) {
              console.log('test res', res );

              const role = res;
              console.log('here ROLE ', res );
              this.router.navigate(["/authentication/signin"]);
              }
          //  this.doctorService.addDoctors(this.authService.currentUserValue);
          },
          (error) => {}
        );
    }
  }
}
