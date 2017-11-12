var registro = require('../schemas/registro');

exports.registrar = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin', 'regular']
  // },
  handler: function(request, reply){
    var registros = new registro({
      correo: request.payload.correo,
      comentario: request.payload.comentario
    });
    registros.save();
    console.log('registro saved');
    return reply('ok');
  }
}

exports.createCalcetin = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin']
  // },
  handler: function(request, reply){
    console.log(request.payload);
    var newCalcetin = new calcetin({
      nombre: request.payload.nombre,
      marca: request.payload.marca,
      color: request.payload.color,
      talla: request.payload.talla,
      tipo: request.payload.tipo,
      estampado: request.payload.estampado,
      genero: request.payload.genero,
      precio: request.payload.precio,
      img: request.payload.img
    });
    newCalcetin.save();
    console.log('calcetin saved');
    return reply('ok');
  }
}
