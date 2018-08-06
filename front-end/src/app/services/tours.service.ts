import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToursService {
    constructor(){}

    tours: Array<any> = [
        {
          _id:0,
          name: "Buceo",
          desc: "Sumergete en este hermoso deporte y conoce las maravillas del mar",
          lema: 'Si estás hospedado en Cancún o la Riviera Maya, los siguientes paquetes son para ti. Elige y combina nuestros buceos locales junto con una salida de buceo en Cozumel o a los cenotes en la Riviera Maya.',
          descBuceo: 'Bucea en las hermosas aguas de Cancun y conoce la gran biodiversidad que maneja',
          descBuceo2: 'Prueba el free diving y sientete en paz!',
          descBuceo3: 'Disfruta de la belleza del mar y nada viendo el caer del sol',
          descBuceo4: 'Tenemos varios cursos para principiantes!',
          photoURL: 'https://d3gye3kweytqcv.cloudfront.net/img/tours/53025b6ceb84cd115e38ed88/full/1.jpg',
          photo1:'https://negativespace.co/wp-content/uploads/2017/05/negative-space-boy-swimming-sea-dusk-mohamed-nohassi-thumb-1.jpg',
          photo2: 'https://media.istockphoto.com/photos/diver-picture-id492676134?k=6&m=492676134&s=612x612&w=0&h=F8IQIE13IQFyuD0HJMD-46yLjnyJ_GlBRCAY4JnhEsc=',
          photo3: 'http://static.asiawebdirect.com/m/kl/portals/langkawi-info-com/homepage/diving/pagePropertiesImage/langkawi-diving.jpg.jpg',
          photo4: 'http://www.dive-the-world.com/images/gallery/pages/medium/64ac5f621d-palau-shutterstock-187441337.jpg'

        },
        {
          _id:1,
          name: "Tours",
          desc: "Explora México",
          lema: 'Tours para que conozcas las antiguas civilizaciones y sus ciudades antiguas. Descubre este maravilloso mundo antiguo!',
          photoURL: 'https://geoaventura.com/wp-content/uploads/2016/05/Matacanes.jpg',
          photo1:'https://ep01.epimg.net/internacional/imagenes/2018/01/23/la_serpiente_emplumada/1516724288_604857_1516725179_noticia_normal.jpg',
          photo2: 'https://images.sipse.com/I-3Cfn8il5oYlUa0rrPV22HzCQs=/800x497/smart/imgs/102015/2110155392d1ad5.jpg',
          photo3: 'https://menteurbana.mx/wp-content/uploads/2016/08/Destacada-3-940x625.jpg',
          photo4: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/c0/84/eb/vista-monte-alban.jpg'
        },
        {
          _id:2,
          name: "Bici de Montaña",
          desc: "Las mejores rutas y bajadas. Diversion garantizada!",
          photoURL: 'http://www.kronplatz.com/website/var/tmp/image-thumbnails/370000/372048/thumb__portal-headerslider-full/mountainbike_peitler-kofl.jpeg',
          photo1: 'http://estaticos.marca.com/blogs/esto-es-vida/imagenes_posts/2015/03/28/135652_570x378.jpg',
          photo2: 'https://sportadictos.com/files/2014/02/Bicicleta-de-monta%C3%B1a.jpg',
          photo3: 'http://vilssa.com/uploads/images/600px_Mountain_bike_jump.jpg',
          photo4: 'https://www.practicodeporte.com/wp-content/uploads/2018/02/peugeot-bicicleta-monta%C3%B1a-electrica-660x330.jpg'
        },
        {
          _id:3,
          name: "Rafting",
          desc: "Rios en Veracruz te dan la oportunidad de probar esta exhilarante experiencia",
          photoURL: 'http://www.mexicorafting.com/raftingenmorelos.jpg',
          photo1: 'https://negativespace.co/wp-content/uploads/2018/05/canoe.jpg',
          photo2: 'https://guidapp.s3.eu-central-1.amazonaws.com/activity_base/pyrenerafting.com/descente-sportive-en-rafting-aude.jpg',
          photo3: 'http://saakatours.com/wp-content/uploads/2016/12/White-Water-Rafting2.jpg',
          photo4: 'https://www.huckfinncroatia.com/syst/wp-content/uploads/2016/12/Zrmanja-river-kayaking-002.jpg',
        }
      ]

  
    
      getList(){
        return this.tours
      }
      
      getOneProduct(id){
        
        return this.tours.find(c=>c._id == id);
        
      }
    
      updateProduct(card){
        return new Promise((resolve, reject)=>{
          this.tours = this.tours.map(c=>{
            if(c._id == card._id) return card
            return c
          }) //map
          return resolve(this.tours)
        })
    
    
      }
      
    }