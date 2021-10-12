import { Component } from "@angular/core";
import { Course } from "src/app/features/course/course";

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})

export class InfoComponent {
    courses!: Course[]

    buttonText = "Add new course"
}