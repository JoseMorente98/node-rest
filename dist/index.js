"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var server_1 = __importDefault(require("./server/server"));
var hola_router_1 = __importDefault(require("./router/hola.router"));
var port = process.env.PORT || 3000;
var server = server_1.default.init(port);
var api = "/api/";
//MySQL.getInstance();
/**
  * CORS ACCESS
  */
server.app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if (req.methods == "OPTIONS") {
        res.sendStatus(200);
    }
    else {
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
server.app.use(api, hola_router_1.default);
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
server.start(function () {
    console.log("Servidor corriendo en el puerto 3000 :D");
});
