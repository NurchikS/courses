import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { InfoComponent } from "./info/info.component";
import { SharedModule } from "../shared/shared.module";
import { CoursesModule } from "../features/courses/courses.module";

@NgModule({
    declarations: [ButtonComponent, HeaderComponent, InfoComponent],
    exports: [ButtonComponent, HeaderComponent, InfoComponent],
    imports: [
        FontAwesomeModule,
        CommonModule
      ],
})

export class BuildingBlocksModule {
    
}