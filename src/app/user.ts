export class User
{
    id:number=0;
    firstname:string="";
    lastname:string="";
    email:string="";
    phoneno:string="";
    location:string="";

    constructor(id:number,firstname:string,lastname:string,
        email:string,phoneno:string,location:string)
    {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.phoneno= phoneno;
        this.location=location;
    }


}