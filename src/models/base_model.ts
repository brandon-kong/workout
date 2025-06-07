import { createId } from "@paralleldrive/cuid2";

export default interface IBaseModel {
    id: string;
    createdAt: Date;

    getId(): string;
    getDateCreated(): Date;
}

export abstract class BaseModel implements IBaseModel {
    public id: string;
    public createdAt: Date;

    constructor() {
        // generate a random UUID
        this.id = createId();
        this.createdAt = new Date();
    }

    public getId(): string {
        return this.id;
    }

    public getDateCreated(): Date {
        return this.createdAt;
    }
}