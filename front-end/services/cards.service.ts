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
      photoURL: 'https://d3gye3kweytqcv.cloudfront.net/img/tours/53025b6ceb84cd115e38ed88/full/1.jpg'
    },
    {
      _id:1,
      name: "Tours",
      desc: "Explora México",
      photoURL: 'https://geoaventura.com/wp-content/uploads/2016/05/Matacanes.jpg'
    },
    {
      _id:2,
      name: "Bici de Montaña",
      desc: "Las mejores rutas y bajadas. Diversion garantizada!",
      photoURL: 'http://www.kronplatz.com/website/var/tmp/image-thumbnails/370000/372048/thumb__portal-headerslider-full/mountainbike_peitler-kofl.jpeg'
    },
    {
      _id:3,
      name: "Rafting",
      desc: "Rios en Veracruz te dan la oportunidad de probar esta exhilarante experiencia",
      photoURL: 'http://www.mexicorafting.com/raftingenmorelos.jpg'
    }
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
