import {Status} from "./Status";
export class DepartmentList {
  id: string;
  numberDepartment: number;
  name: string;
  description: string;
  departmentDate: Date;
  departmentHead: string;
  status: Status;
  constructor(departmentList) {
    {
      this.id = departmentList.id || this.getRandomID();
      this.numberDepartment = departmentList.numberDepartment || "";
      this.name = departmentList.name || "";
      this.description = departmentList.description || "";
      this.departmentDate = departmentList.departmentDate || "";
      this.departmentHead = departmentList.departmentHead || "";
      this.status = departmentList.status || "";
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
