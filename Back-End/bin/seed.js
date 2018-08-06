const mongoose = require('mongoose');
const Tour = require('../models/Tour');

const dbName = ('mongodb://lipeval:ladfellas1@ds133621.mlab.com:33621/lipes', { useNewUrlParser: true })
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true } );

const tours = [
    {
        name: "Buceo",
        desc: "Sumergete en este hermoso deporte y conoce las maravillas del mar",
        descBuceo: "Bucea con el Tiburon Ballena o viendo un hermoso arrecife.",
        videobuceo: {
          video1 : "https://www.youtube.com/watch?v=Oonsa8C8AT0"
       } ,
          photos: {
          photo1: "https://d3gye3kweytqcv.cloudfront.net/img/tours/53025b6ceb84cd115e38ed88/full/1.jpg",
          photo2: "https://cdn.stocksnap.io/img-thumbs/280h/9C9TVYUCKN.jpg",
          photo3: "https://cdn.stocksnap.io/img-thumbs/960w/U8ZVW48SHC.jpg"
        }
    
      },
      {
        name: "Tours",
        desc: "Explora México",
        descTours: "Ya sea de Aventura o para relajar, tenemos todo para ti! Atrevete!",
        photoURL:"https://geoaventura.com/wp-content/uploads/2016/05/Matacanes.jpg"
      },
    {
        name: "Bici de Monaña",
        desc: "Las mejores rutas y bajadas. Diversion garantizada!",
        photoURL: "http:/ww.kroplatz.com/website/var/tmp/image-thumbnails/370000/372048/thumb__portal-headerslider-full/mountainbike_peitler-kofl.jpg"
      },  {
        name: "Rafting",
        desc: "Rios en Veracuz te dan la oportunidad de probar esta exhilarante experiencia",
        photoURL: "https://www.atletasla.com/wp-content/uploads/2016/11/rafting-10.jpg"
      }
]    

Tour.create(tours, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${tours.length} tours`)
    mongoose.connection.close()
  });