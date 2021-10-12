import { NgModule } from "@angular/core";
import { CourseComponent } from "../features/course/course.component";
import { CoursesComponent } from "../features/courses/courses.component";
import { LoginComponent } from "../features/login/login.component";
import { RegistrationComponent } from "../features/registration/registration.component";
import { CommonModule } from "@angular/common";
import { BuildingBlocksModule } from "../building-blocks/building-blocks.module";
import { InfoComponent } from "../building-blocks/info/info.component";
import { DurationPipe } from "../duration.pipe";

@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent,
        LoginComponent,
        RegistrationComponent,
        DurationPipe
    ],
    exports: [
        CoursesComponent,
        CourseComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [CommonModule, BuildingBlocksModule],
    providers: [],
    bootstrap: []
})

export class SharedModule {

}