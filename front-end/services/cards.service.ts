import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor() { }

  cards: Array<any> = [
    {
      _id:0,
      name: "Buceo",
      desc: "Sumergete en este hermoso deporte y conoce las maravillas del mar",
      photoURL: ''
    },
    {
      _id:1,
      name: "Tours",
      desc: "Explora México",
      pic: ''
    },
    {
      _id:2,
      name: "Bici de Montaña",
      desc: "Las mejores rutas y bajadas. Diversion garantizada!",
      pic: ''
    },
    {
      _id:3,
      name: "Rafting",
      desc: "Rios en Veracruz te dan la oportunidad de probar esta exhilarante experiencia",
      pic: ''
    },
  ]

  getList(){
    return this.cards
  }
  
  getOneProduct(id){
    return this.cards.find(c=>c._id == id)
  }

  updateProduct(card){
    return new Promise((resolve, reject)=>{
      this.cards = this.cards.map(c=>{
        if(c._id == card._id) return card
        return c
      }) //map
      return resolve(this.cards)
    })


  }
  
}
