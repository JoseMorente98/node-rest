"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hola_controller_1 = __importDefault(require("./../controller/hola.controller"));
var foro = express_1.Router();
foro.get('/saludar', hola_controller_1.default.getInstance().getAll);
exports.default = foro;
