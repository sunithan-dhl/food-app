export class  Order{
    constructor(
        public item : any,
        public price : any,
        public fname : string,
        public lname : string,
        public address : string,
        public city : string,
        public zip : number
    ){}
}