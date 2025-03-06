import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/iresponse.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private baseUrl = "https://peticiones.online/api/users/";
  router = inject(Router);
  

  getUsers(url: string = this.baseUrl): Observable<IResponse> {
    return this.httpClient.get<IResponse>(url);
  }

  getUserById(_id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(this.baseUrl + _id);
  }

  createUser(request: any) {
    this.httpClient.post<any>(this.baseUrl,request).subscribe({
      next: (response) => {
        if ('error' in response) {
          this.router.navigate(['/error']);
        } else {
          setTimeout(() => this.router.navigate(['/home']),1500)
        }
      },
      error: (error: any) => {
        this.router.navigate(['/error']);
      }
    })
  }

  updateUserById(_id: string, request: any) {
    const confirmUpdate = confirm("¿Estás seguro que quieres actualizar este usuario?");
    if (confirmUpdate) {
      this.httpClient.put<any>(`https://peticiones.online/api/users/${_id}`, request).subscribe({
            next: (response) => {
              if ('error' in response) {
                this.router.navigate(['/error']);
              } else {
                setTimeout(() => this.router.navigate(['/home']),1500)
              }
            },
            error: (error: any) => {
              this.router.navigate(['/error']);
            }
          })
    }
  }

  deleteUserById(_id: string) {
    const confirmDeletion = confirm("¿Estás seguro que quieres borrar este usuario?");
    if (confirmDeletion) {
      this.httpClient.delete<any>(`https://peticiones.online/api/users/${_id}`).subscribe({
            next: (response ) => {
              if ('error' in response) {
                this.router.navigate(['/error']);
              } else {
                setTimeout(() => this.router.navigate(['/home']),1500)
              }
            },
            error: (error: any) => {
              this.router.navigate(['/error']);
            }
          })
    }
  }
}
