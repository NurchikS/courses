import { Component, Input } from "@angular/core";
import { Course } from "./course";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})

export class CourseComponent {
    @Input() course!: Course

    iconTrash = faTrash;
    iconEdit = faPen;
    buttonText: string = "Show course"
}