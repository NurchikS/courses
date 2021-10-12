import { Component, Input } from "@angular/core";
import { Course } from "../course/course";



@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})

export class CoursesComponent {

    @Input() courses!: Course []
}