import { UserRole } from "./UserRole";

export class LoginUser
{
    loginName: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    
    username: string;
    password: string;

    applicationRoles: UserRole[];
}