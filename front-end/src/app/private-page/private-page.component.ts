import { Component, OnInit, Input } from '@angular/core';
import {SignupFormComponent} from '../signup-form/signup-form.component'
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CreateTourService} from '../services/create-tour.service'
import {FirebaseService} from '../services/firebase.service'

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']

})
export class PrivatePageComponent implements OnInit {

  fileToUpload: File = null;

  
  title: String = ''
  place: String = ''
  date: String = ''
  desc: String = ''
  user: any;
  _id: any;
  form={}


  constructor(private authService: AuthService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private createTourService: CreateTourService,
  private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  
      }

      createTour(){
       
        this.createTourService.createPlace(this.form)
          .subscribe(tour=>{console.log(tour)
            
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

    handleFileInput(event){  
      //this.fileToUpload = file.item(0)
      console.log(event.target.files[0])
      this.firebaseService.uploadImage(event.target.files[0])
        .then(url=>{
          console.log(url)
          this.form['photoURL'] = url
        })

    }

 }

  


