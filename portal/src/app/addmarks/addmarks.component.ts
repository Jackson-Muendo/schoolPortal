import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addmarks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addmarks.component.html',
  styleUrl: './addmarks.component.css'
})
export class AddmarksComponent {
  students:any = [{name:"victor",subject:'íct',marks:'90'},
  {name:"victor",subject:'íct',marks:'90'},
]
  onSubmit(){

  }
  addStudent(){

  }
}
