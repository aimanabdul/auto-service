export class Customer {

    constructor(
        public id?: number,
        public uuid?: string,
        public licensePlate?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public carBrand?: string,
        public carModel?: string,
    )
    {}
}
