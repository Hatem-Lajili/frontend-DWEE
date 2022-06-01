import { Role } from "./role";
import {Gender} from "../../admin/doctors/alldoctors/gender";

export class User {
  id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  role: Role;
  gender: Gender;
  dateJoining: Date;
  password: string;
  confirmPassword: string;
  token: string;
  constructor(user) {
    {
      this.id = user.id || this.getRandomID();
      this.firstname = user.firstname || "";
      this.lastname = user.lastname || "";
      this.email = user.email || "";
      this.dateJoining = user.dateJoining || "";
      this.phoneNumber = user.phoneNumber || "";
      this.gender = user.gender || "";
      this.password = user.password || "";
      this.confirmPassword = user.confirmPassword || "";
      this.token = user.token || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      // tslint:disable-next-line:no-bitwise
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
