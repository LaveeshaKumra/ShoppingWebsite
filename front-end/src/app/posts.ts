

export class posts
{
    constructor(
        public username : string,
        public active : number,
        public password : string,
        public role : string,
        public firstname:string,
        public lastname:string,
        public email:string
    ){}
}


export class product
{
    constructor(
        public  category: string,
        public active : number,
        public color : string,
        public detail : string,
        public pname : string,
        public pprice : string,
        public image:string
    ){}
}