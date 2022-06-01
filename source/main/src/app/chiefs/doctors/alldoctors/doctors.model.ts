import {Gender} from "./gender";

export class Doctors {
  id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  dateJoining: Date;
  password: string;
  confirmPassword: string;
  constructor(doctors) {
    {
      this.id = doctors.id || this.getRandomID();
      this.firstname = doctors.firstname || "";
      this.lastname = doctors.lastname || "";
      this.email = doctors.email || "";
      this.dateJoining = doctors.dateJoining || "";
      this.phoneNumber = doctors.phoneNumber || "";
      this.gender = doctors.gender || "";
      this.password = doctors.password || "";
      this.confirmPassword = doctors.confirmPassword || "";
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
