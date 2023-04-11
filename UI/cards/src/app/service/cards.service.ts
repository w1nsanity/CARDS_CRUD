import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7087/api/cards';

  constructor(private http: HttpClient) { }

  //get all cards
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl);
  }

  //add card
  addCard(card: Card): Observable<Card> {
    card.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Card>(this.baseUrl, card)
  }

  deleteCard(id: string): Observable<Card>{
    return this.http.delete<Card>(this.baseUrl + "/" + id);
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(this.baseUrl + "/" + card.id, card);
  }
}
