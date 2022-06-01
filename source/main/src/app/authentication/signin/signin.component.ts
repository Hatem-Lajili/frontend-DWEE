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
      email: ["admin@mail.com", Validators.required],
      password: ["admin123", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
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
                } else if (res.role[0] === 'ROLE_DOCTOR') {
                  this.router.navigate(["/doctor/dashboard"]);
                } else if (res.role[0] === 'ROLE_CHIEF_SERVICE') {
                  this.router.navigate(["/chiefs"]);
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
