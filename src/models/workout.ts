import { BaseModel } from "./base_model";
import Exercise from "./exercise";

export default class Workout extends BaseModel {
    private name: string;
    private exercises: Exercise[];

    constructor(name: string) {
        super();
        this.name = name;
        this.exercises = [];
    }

    public addExercise(exercise: Exercise): void {
        this.exercises.push(exercise);
    }
}