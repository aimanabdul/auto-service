export class Repair {

    constructor(
        public id: number,
        public customerId: number,
        public employeeId: number,
        public type: string ="",
        public price: number= 0,
        public date: Date = new Date(),
        public description: string ="",
        public  parts: number[] ,


    )
    {}
}
