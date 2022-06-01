import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { User } from "../models/user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

setUserValue(user){
  console.log('testing cuurent user', user );
  this.currentUserSubject.next(user);
}
  login(email: any, password: any) {
    console.log('testing', email , password );
    return this.http
      .post<any>(`${environment.apiUrl}auth/signin`, {
        email,
        password,
      });
  }
  register(email: any, firstname: any, lastname: any, phoneNumber: any, gender: any, dateJoining: any, password: any, role: any  ) {
    console.log('testing', email , password, role );
    return this.http
      .post<any>(`${environment.apiUrl}auth/signup`, {
        email,
        firstname,
        lastname,
        phoneNumber,
        gender,
        dateJoining,
        password,
        role
      });
  }

  logout() {
    // remove user from local storage to log user out

    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
