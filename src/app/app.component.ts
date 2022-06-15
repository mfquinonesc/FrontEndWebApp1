import { Component, OnInit } from '@angular/core';
import { Card } from './model/card.model';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Cards';
  cards: Card[] =[];
  constructor(private CardService:CardsService){

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.CardService.getAllCards()
    .subscribe(
      Response =>{
        // console.log(Response)
        this.cards = Response;

      }
    );
  }

}
