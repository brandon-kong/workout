import { BaseModel } from "./base_model";

export default class Exercise extends BaseModel {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}