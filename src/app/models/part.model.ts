import { Category } from "./category.model";

export class Part {

    constructor(
        public id?: number, 
        public name?: string, 
        public description?: string, 
        public eanNumber?: string, 
        public price?: number, 
        public categoryID?: number,
        public category?: Category
        )
    {}
}
