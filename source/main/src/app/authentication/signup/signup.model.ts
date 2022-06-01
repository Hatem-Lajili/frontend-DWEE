import {Gender} from "../../admin/doctors/alldoctors/gender";
import {Role} from "../../core/models/role";

export class SignupModel {
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
  constructor(signupModel) {
    {
      this.id = signupModel.id || this.getRandomID();
      this.firstname = signupModel.firstname || "";
      this.lastname = signupModel.lastname || "";
      this.email = signupModel.email || "";
      this.dateJoining = signupModel.dateJoining || "";
      this.phoneNumber = signupModel.phonenumber || "";
      this.gender = signupModel.gender || "";
      this.password = signupModel.password || "";
      this.confirmPassword = signupModel.confirmPassword || "";
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
