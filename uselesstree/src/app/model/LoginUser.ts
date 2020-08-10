import { UserRole } from "./UserRole";

export class LoginUser
{
    loginName: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    password: string;

    applicationRoles: UserRole[];
}