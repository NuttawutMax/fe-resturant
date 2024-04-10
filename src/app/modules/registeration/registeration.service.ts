import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Registeration } from './registeration.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  private baseURL = environment.baseURL;
  private registerAPI = 'register';

  constructor(
    private http: HttpClient
  ) { }

  registerMember(data: Registeration) {
    const url = this.baseURL + this.registerAPI;
    return this.http.post(url, data);
  }

}