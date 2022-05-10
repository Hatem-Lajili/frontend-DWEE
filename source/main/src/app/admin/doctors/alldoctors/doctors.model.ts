import { formatDate } from "@angular/common";
import {Gender} from "./gender";

export class Doctors {
  id: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  gender: Gender;
  date: string;
  constructor(doctors) {
    {
      this.id = doctors.id || this.getRandomID();
      this.firstname = doctors.firstname || "";
      this.lastname = doctors.lastname || "";
      this.email = doctors.email || "";
      this.date = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.phonenumber = doctors.phonenumber || "";
      this.gender = doctors.gender;
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
