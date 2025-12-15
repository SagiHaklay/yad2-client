import { LoginInfo } from "./login-info";
export interface RegisterModel extends LoginInfo {
    firstName: string,
    lastName: string,
    phone: string
}