import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router';
import { CredentialsDto } from '../types/credentialsdto';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router:Router) {}

  

  get isAuthenticated()
  {
    return !!localStorage.getItem('token')
  }

  register(credentials: CredentialsDto) {
    this.http.post<any>(`https://localhost:44316/api/Account`,credentials).subscribe(res=>{
      this.authenticate(res)
    });
  }

  login(credentials: CredentialsDto) {
    this.http.post<any>(`https://localhost:44316/api/Account/login`,credentials).subscribe(res=>{
    this.authenticate(res)
    });
  }

  logout()
  {
    localStorage.removeItem('token')
  }

  authenticate(res)
  {
    localStorage.setItem('token',res)
    this.router.navigate(['/'])
  }

}
