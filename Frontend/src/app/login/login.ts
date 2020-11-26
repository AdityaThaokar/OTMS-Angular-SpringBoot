export class Login
{
    userId:string;
    userName:string;
    password:string;
    phoneNo:number;
    role:string
    public constructor(userId:string,userName:string,password:string, phoneNo:number,role:string)
       
    {
		this.userId = userId;
		this.userName = userName;
		this.password = password;
    this.phoneNo = phoneNo;
    this.role = role;
    }
}