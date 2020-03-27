export class User {
    id: number;
    name: string;
    email:any;
    userName: string;
    password: string;

    constructor(id:number,name:string,email:any,userName:string,password:string){
    	this.id=id;
    	this.name=name;
    	this.email=email;
    	this.userName=userName;
    	this.password=password;
    }
   }