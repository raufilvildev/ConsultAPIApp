import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-management-notification',
  imports: [],
  templateUrl: './users-management-notification.component.html',
  styleUrl: './users-management-notification.component.css'
})
export class UsersManagementNotificationComponent {
  @Input() newUserForm: boolean = false;
  @Input() isCreated: boolean = false;
  @Input() isUpdated: boolean = false;
  @Input() isDeleted: boolean = false;
  text: string = '';
  
  ngOnInit() {
    if (this.isCreated) {
      this.text = "Usuario creado correctamente.";
    } else if (this.isUpdated) {
      this.text = "Usuario actualizado correctamente.";
    } else if (this.isDeleted) {
      this.text = "Usuario eliminado correctamente.";
    }
  }
  
}
