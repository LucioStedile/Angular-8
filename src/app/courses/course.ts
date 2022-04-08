export class  Course {
    static Iterator: (this: void, value: Course, index: number, obj: Course[]) => value is Course;
    static iterator: any;
    static id: any;
    static find(arg0: (_courseItereator: Course) => boolean): Course {
        throw new Error("Method not implemented.");
    }
    id!: number;
    name!: string;
    imageUrl!: string;
    price!: number;
    code!: string;
    duration!: number;
    rating!: number;
    releaseDate!: string;
    description!: string;
}