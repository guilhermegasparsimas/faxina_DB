import express from 'express';
import { criarAgendamento, deletarAgendamento, editarAgendamento, listarAgendamentos } from '../controllers/agendamentoController/agendamentoController.js';
const agendamentoRouter = express.Router();

agendamentoRouter.post('/agendamento', criarAgendamento)
agendamentoRouter.get('/agendamento', listarAgendamentos)
agendamentoRouter.delete('/agendamento/:id', deletarAgendamento)
agendamentoRouter.put('/agendamento/:id', editarAgendamento)


export {agendamentoRouter};