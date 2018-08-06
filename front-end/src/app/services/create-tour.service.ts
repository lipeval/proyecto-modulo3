import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTourService {

  url = "http://localhost:3000/"
  currentTour: String = ''

  constructor(private http: Http) { }

  addTour(tour){
    this.currentTour = tour;
  }

  //create place
  createPlace(obj): Observable<string>{
    return this.http.post(this.url + 'tours', obj)
    .pipe(map((res: Response)=>res.json()))
  }


  //get list
    getOneList(id){
      return this.http.get(this.url + 'tours/' + id)
          .pipe(map((res: Response)=>res.json()));
  }

  //edit list
  updateOneList(newPlace){
    return this.http.put(this.url + 'tours/' + newPlace._id, newPlace)
    .pipe(map((res: Response)=>res.json()))
  }}

  //edit list from survey
  // updateListFromSurvey(list){
  //   console.log('service', list)
  //   return this.http.put(this.url + 'city-survey/' + list._id, list)
  //   .pipe(map((res: Response)=>res.json()))
  //