import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  implements OnInit
{
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ["admin@hospital.org", Validators.required],
      password: ["admin@123", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get("email").setValue("admin@hospital.org");
    this.authForm.get("password").setValue("admin@123");
  }
  doctorSet() {
    this.authForm.get("email").setValue("doctor@hospital.org");
    this.authForm.get("password").setValue("doctor@123");
  }
  patientSet() {
    this.authForm.get("email").setValue("patient@hospital.org");
    this.authForm.get("password").setValue("patient@123");
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    if (this.authForm.invalid) {
      this.error = "Username and Password not valid !";
      return;
    } else {
       this.authService
        .login(this.f.email.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res) {
              setTimeout(() => {
                localStorage.setItem("currentUser", JSON.stringify(res));
                this.authService.setUserValue(res);
                console.log('test role', JSON.stringify(res)  );
                if (res.role === Role.All || res.role[0] === 'ROLE_ADMIN') {
                  this.router.navigate(["/admin/dashboard/main"]);
                } else if (res.role[0] === Role.Doctor) {

                  this.router.navigate(["/doctor/dashboard"]);

                  this.router.navigate(["/chiefs/dashboard"]);
                } else {

                  this.router.navigate(["/admin/dashboard/main"]);
                }
                this.loading = false;
              }, 2000);
            } else {
              this.error = "Invalid Login";
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
            this.loading = false;
          }
        );
    }
  }
}
