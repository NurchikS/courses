export class Course {
    constructor(
        public title: string,
        public description: string, 
        public creationDate: Date,
        public duration: number,
        public authors: string[],
        public isEditable: boolean
    ) { }
}