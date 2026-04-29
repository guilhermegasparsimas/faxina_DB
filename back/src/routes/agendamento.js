import express from 'express';
import { criarAgendamento } from '../controllers/agendamentoController/agendamentoController.js';
const agendamentoRouter = express.Router();

agendamentoRouter.post('/agendamento', criarAgendamento)


export {agendamentoRouter};