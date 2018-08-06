import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ToursService } from '../services/tours.service';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
  private toursService: ToursService) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productId = params.id;
      this.productData = this.toursService.getOneProduct(this.productId);
    })
  }

  productId: String;
  productData: any;

}

