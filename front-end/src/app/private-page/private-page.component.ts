import { Component, OnInit, Input } from '@angular/core';
import {SignupFormComponent} from '../signup-form/signup-form.component'
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CreateTourService} from '../services/create-tour.service'

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

  newTour: String = ''
  newPlace: String = ''
  newDate: String = ''
  newDesc: String = ''
  newPhotoUrl: String = ''
  user: any;
  _id: any;
  form={}
  listObj: any = {
    newTour: '',
    user: '',
    city: '',
  }


  constructor(private authService: AuthService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private createTourService: CreateTourService) { }

  ngOnInit() {
  
      }

      createTour(){
       
        this.createTourService.createPlace(this.form)
          .subscribe(tour=>{console.log(tour)
            
      })
    }

    updateUser(user){
      this.authService.updateUser(this.user)
      .subscribe(()=>{
        this.router.navigate(['city-survey', this.newPlace]);
      })
    }

    handleLogout(){
      this.authService.logout()
      this.router.navigate(['signup'])
    }

    myFunction() {
      this.createTour()
      alert("Tu tour ha sido creado y esta siendo revisado. Gracias!")
 }
  }


