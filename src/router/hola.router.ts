import { Router } from "express";
import HolaController from "./../controller/hola.controller"
const foro = Router();

foro.get('/saludar', HolaController.getInstance().getAll);

export default foro;