import {WorkingHours} from './working-hours.model';
import {WorkFunction} from './work-function.model';
export class Employee {

    constructor(
        public id?: number,
        public workingHours?: WorkingHours[],
        public workFunction?: WorkFunction,
        public firstName?: string,
        public lastName?: string,
        public phoneNumber?: string,
        public startContract?: Date,
        public endContract?: Date,
        public active?: boolean,
        public employeeID?: string,
    )
    {}
}
