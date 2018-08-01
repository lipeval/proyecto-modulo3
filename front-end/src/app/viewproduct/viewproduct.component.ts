import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CardsService } from 'services/cards.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
  private cardsService: CardsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productId = params.id;
      this.productData = this.cardsService.getOneProduct(this.productId)
      console.log(this.productData)

    })
  }

  productId: String;
  productData: any = {};

}
