import express from 'express';
import { createUser, getUser } from '../controllers/cadasterUser/cadasterUserController.js';
const routerUser = express.Router();


routerUser.post('/usuario', createUser); 
routerUser.get('/usuarios', getUser);

export  {routerUser};