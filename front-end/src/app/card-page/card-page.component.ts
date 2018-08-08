import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../services/tours.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css'],
  providers: [ToursService]
})
export class CardPageComponent implements OnInit {

  tours: any;
  user: any;


  constructor(private toursService: ToursService,
  private router: Router,
  private matCard: MatCardModule,
  private matGrid: MatGridListModule,
  private activatedRoute: ActivatedRoute
  ) { }
  
  showProduct(tours){
    console.log(tours)
  }
  link(id){
    this.tours = this.toursService.getOneProduct(id)
  }

  ngOnInit() {
      this.toursService.getAllTours()
      .subscribe(res => {
        console.log(res);
        this.tours = res
      });
      
  }
}
