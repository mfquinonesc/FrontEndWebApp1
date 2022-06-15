import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7198/api/cards';

  constructor(private http:HttpClient) { }

// Method get all cards
getAllCards():Observable<Card []>{
  return this.http.get<Card []>(this.baseUrl);
}
}

