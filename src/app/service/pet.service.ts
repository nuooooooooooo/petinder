import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.backendUrl}/pets`
   }

  getPets() : Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }
}
