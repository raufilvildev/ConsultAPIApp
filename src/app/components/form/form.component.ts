import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() user: IUser = {id: 0, name: '', lastName: '', username: '', email: '', url: ''};
  @Input() newUserForm: boolean = false;
}
