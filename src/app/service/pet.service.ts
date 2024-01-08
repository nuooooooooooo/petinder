import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import {map, Observable} from 'rxjs';
import {Pet} from "../model/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.backendUrl}/pets`
   }

  getPets() : Observable<any> {
    return this.httpClient.get<Pet []>(this.apiUrl).pipe(
      map(pets => pets.sort((x,y) => x.name.toLowerCase().localeCompare(y.name.toLowerCase())))
    )
  }

  addPet(pet: Pet) : Observable<Pet> {
    return this.httpClient.post<Pet>(this.apiUrl, pet)
  }
}
