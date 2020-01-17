"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_controller_1 = __importDefault(require("./../controller/usuario.controller"));
var usuario = express_1.Router();
usuario.get('/usuario', usuario_controller_1.default.getInstance().getAll);
exports.default = usuario;
