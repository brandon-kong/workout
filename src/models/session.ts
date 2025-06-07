import { BaseModel } from "./base_model";
import Workout from "./workout";

export default class WorkoutSession extends BaseModel {
    private startDate: Date;
    private endDate: Date;
    private workout: Workout;

    constructor(workout: Workout, started: Date, ended: Date) {
        super();
        this.startDate = started;
        this.endDate = ended;
        this.workout = workout;
    }
}