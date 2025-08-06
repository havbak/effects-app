import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  http = inject(HttpClient);
  private url = 'https://reqres.in/api';

  constructor() { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=20`, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).pipe(
      map((resp: any) => resp['data'])
    );
  }

}
