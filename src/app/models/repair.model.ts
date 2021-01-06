export class Repair {

    constructor(
        public id?: number,
        public customerId?: number,
        public employeeId?: number,
        public type?: string,
        public price?: number,
        public date?: Date,
        public description?: string,
        public  parts?: string[],


    )
    {}
}
