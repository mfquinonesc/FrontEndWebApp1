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
  card: Card = {
    id:'',
    cardHolderName:'',
    cardNumber: '',
    cvc:'',
    expiryMonth:'',
    expiryYear:''
  }
  constructor(private CardService:CardsService){

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.CardService.getAllCards()
    .subscribe(
      response =>{
        // console.log(Response)
        this.cards = response;

      }
    );
  }

  onSubmit(){
   console.log(this.card);    
   this.CardService.addCard(this.card)
   .subscribe(
    response => {
      console.log(response);      
    }
   );
  }

}
