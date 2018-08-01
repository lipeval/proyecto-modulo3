import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CardsService } from 'services/cards.service';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  cards:  Array<any> 
  constructor(private cardsService: CardsService,
  private router: Router,
  private matCard: MatCardModule,
  private matGrid: MatGridListModule
  ) { }
  
  showProduct(card){
    console.log(card)
  }
  link(id){
    this.cards = this.cardsService.getOneProduct(id)
  }

  ngOnInit() {
      this.cards = this.cardsService.getList()
      
  }
}
