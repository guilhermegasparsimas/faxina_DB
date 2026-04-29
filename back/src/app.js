import express from 'express';
import cors from 'cors';
import { routerUser } from './routes/user.js';
import { routerLogin } from './routes/loginUser.js';
import { agendamentoRouter } from './routes/agendamento.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('teste')
});

app.use(routerUser);
app.use(routerLogin);
app.use(agendamentoRouter);

export {app};