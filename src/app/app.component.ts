import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses';
  icon = faTrash;

  buttonText: string = "Log out"

  courses = [
    {   title: 'Angular',
        description: 'Beneficial', 
        creationDate: new Date(2021, 10, 1),
        duration: 62,
        authors: ["Nural"],
        isEditable : true
    },
    {   title: 'Angular',
        description: 'Beneficial', 
        creationDate: new Date(2021, 10, 1),
        duration: 3,
        authors: ["Nural"],
        isEditable : false
    },
    {   
        title: 'Angular',
        description: 'Beneficial', 
        creationDate: new Date(2021, 10, 1),
        duration: 3,
        authors: ["Nural"],
        isEditable : true
    }
]
}
