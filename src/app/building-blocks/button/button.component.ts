import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {
    @Input() text: string = ""
    @Input() icon !: IconDefinition
}