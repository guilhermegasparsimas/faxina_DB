import express from'express';
import { login } from '../controllers/loginUserController/loginUserController.js';
const routerLogin = express.Router();

routerLogin.post('/login', login);

export {routerLogin};