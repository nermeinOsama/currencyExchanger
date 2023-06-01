import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { StorageService } from '../storage/storage.service';
import { LoginResponse } from '../../interfaces/CurrencyExchanger/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  login(username: string, password: string) {
      return this.http.post<LoginResponse>(`${environment.baseAPIUrl}/login`, { username, password }).pipe(
          tap((response: LoginResponse) => {
              if (response.token) {
                  StorageService.setItem('token', response.token);
              }
          }),
      );
  }

  removeToken() {
      StorageService.removeItem('token');
  }

  logout() {
      this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
      return StorageService.getItem('token') !== null;
  }
}
