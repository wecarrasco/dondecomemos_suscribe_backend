var registro = require('../schemas/registro');
var user = require('../schemas/user');

exports.registrar = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin', 'regular']
  // },
  handler: function(request, reply){
    var registros = new registro({
      nombreRestaurante: request.payload.nombreRestaurante,
      pagina: request.payload.pagina,
      tags: request.payload.tags,
      direccion: request.payload.direccion,
      latitud: request.payload.latitud,
      longitud: request.payload.longitud
    });
    registros.save();
    console.log('registro saved');

    var users = new user({
      nombre: request.payload.nombre,
      correo: request.payload.correo
    })
    users.save();
    console.log('user salvado');

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
