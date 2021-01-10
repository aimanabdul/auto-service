export class Repair {

    constructor(
        public id?: string,
        public customerId?: string,
        public employeeId?: string,
        public type?: string,
        public price?: number,
        public date?: string ,
        public description?: string,
        public  parts?: number[] ,


    )
    {}
}
