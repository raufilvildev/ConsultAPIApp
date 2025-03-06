import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { UsersManagementNotificationComponent } from '../users-management-notification/users-management-notification.component';

@Component({
  selector: 'app-form',
  imports: [ ReactiveFormsModule, UsersManagementNotificationComponent ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() newUserForm: boolean = false;
  @Input() user: IUser = { _id: '', id: 0, first_name: '', last_name: '', username: '', email: '', image: ''};
  @Input() _id: string = '';

  isCreated: boolean = false;
  isUpdated: boolean = false;

  usersService = inject(UsersService);
  router = inject(Router);

  form: FormGroup = new FormGroup({
    first_name: new FormControl('',[ Validators.required ]),
    last_name: new FormControl('',[ Validators.required ]),
    username: new FormControl('',[ Validators.required ]),
    email: new FormControl('',[ Validators.required, Validators.email ]),
    image: new FormControl('',[ Validators.required ])
  });

  updateOrCreateUser(request: any) {
    if (this.newUserForm) {
      this.usersService.createUser(request)
      this.isCreated = true;
      setTimeout(() => this.isCreated = false, 1500);
    } else {
      this.usersService.updateUserById(this._id,request);
      this.isUpdated = true;
      setTimeout(() => this.isUpdated = false, 1500);
    }
  }

  ngOnInit() {
    this.usersService.getUserById(this._id).subscribe({
      next: (response: IUser) => {
        if ('error' in response) {
          this.router.navigate(['/error']);
        } else {
          this.user = response;
          this.form = new FormGroup({
            first_name: new FormControl(this.user.first_name,[ Validators.required ]),
            last_name: new FormControl(this.user.last_name,[ Validators.required ]),
            username: new FormControl(this.user.username,[ Validators.required ]),
            email: new FormControl(this.user.email,[ Validators.required, Validators.email ]),
            image: new FormControl(this.user.image,[ Validators.required ])
          })
        }
      },
      error: (error: any) => {
        this.router.navigate(['/error']);
      }
    })
  }
}
