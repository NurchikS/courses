import { NgModule } from "@angular/core";
import { InfoComponent } from "src/app/building-blocks/info/info.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CoursesComponent } from "./courses.component";

@NgModule({
    imports: [SharedModule],
    exports: [CoursesComponent]
})

export class CoursesModule {

}