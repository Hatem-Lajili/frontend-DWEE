import {Gender} from "../../doctors/alldoctors/gender";

export class ChiefService {
  id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  dateJoining: Date;
  password: string;
  confirmPassword: string;
  constructor(chiefService) {
    {
      this.id = chiefService.id || this.getRandomID();
      this.firstname = chiefService.firstname || "";
      this.lastname = chiefService.lastname || "";
      this.email = chiefService.email || "";
      this.dateJoining = chiefService.dateJoining || "";
      this.phoneNumber = chiefService.phonenumber || "";
      this.gender = chiefService.gender || "";
      this.password = chiefService.password || "";
      this.confirmPassword = chiefService.confirmPassword || "";
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
