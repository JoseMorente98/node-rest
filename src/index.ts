import bodyParser = require('body-parser');
import Server from "./server/server";
import MySQL from './mysql/mysql';
import tipoUsuario from "./router/tipo-usuario.router";
import cursoDetalle from "./router/curso-detalle.router";
import asignacionAuxiliar from "./router/asignacion-auxiliar.router";
import asignacionEstudiante from "./router/asignacion-estudiante.router";
import usuario from "./router/usuario.router";
import curso from "./router/curso.router";
import seccion from "./router/seccion.router";
import mensaje from "./router/mensaje.router";
import foro from "./router/foro.router";
import ticket from "./router/ticket.router";
import actividad from "./router/actividad.router";
import evaluacion from "./router/evaluacion.router";
import saludar from "./router/hola.router";
const port: number = parseInt(<string>process.env.PORT, 10) || 3000

const server = Server.init(port);
const api:string = "/api/"

//MySQL.getInstance();

/**
  * CORS ACCESS
  */
server.app.use((req:any, res:any, next:any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  if(req.methods == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

/**
 * BODY PARSER
 */
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: false }));

/**
 * ROUTER
 */
server.app.use(api, saludar);
/*server.app.use(api, tipoUsuario);
server.app.use(api, usuario);
server.app.use(api, curso);
server.app.use(api, seccion);
server.app.use(api, mensaje);
server.app.use(api, foro);
server.app.use(api, actividad);
server.app.use(api, cursoDetalle);
server.app.use(api, asignacionAuxiliar);
server.app.use(api, asignacionEstudiante);
server.app.use(api, ticket);
server.app.use(api, evaluacion);*/

server.start(()=> {
  console.log("Servidor corriendo en el puerto 3000 :D")
});