import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CardsService } from 'services/cards.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  cards: Array<any>     
  constructor(private service: CardsService,
  private router: Router) { }
  
  showProduct(card){
    console.log(card)
  }

  ngOnInit() {
  }

}
