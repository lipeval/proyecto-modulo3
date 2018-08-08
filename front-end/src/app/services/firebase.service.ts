import { Injectable } from '@angular/core';
import * as firebase from 'firebase';





  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCtxWQmbDnTtxQNSE6A_JNO5QVowjZQJZk",
    authDomain: "module3project-eb2b6.firebaseapp.com",
    databaseURL: "https://module3project-eb2b6.firebaseio.com",
    projectId: "module3project-eb2b6",
    storageBucket: "module3project-eb2b6.appspot.com",
    messagingSenderId: "574369399548"
  };
  firebase.initializeApp(config);


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  

  constructor() { }

  uploadImage(file){
    let task;
    return task = firebase.storage()
      .ref()
      .child('/images/'+file.name)
      .put(file)
      .then(res=>{
        console.log(res.task.snapshot.ref)
        return res.task.snapshot.ref.getDownloadURL()
          .then(r=>{
            console.log(r)
            return r
          })
      })
      

      // return task.snapshot.ref.getDownloadURL()
      // .then(url=>{
      //   console.log(url)
      //   return url
      // }).catch(e=>{
      //   console.log(e)
      // })
  }
}

