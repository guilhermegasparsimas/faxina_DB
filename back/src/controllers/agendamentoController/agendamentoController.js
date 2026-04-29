import { db } from '../../config/db.js';

const criarAgendamento = async (req, res) => {

    const {data_hora, endereco_cliente} = req.body;

   if (!data_hora || !endereco_cliente || data_hora.trim() === "" || endereco_cliente.trim() === "") {
        return res.status(400).json({ 
            message: "Todos os campos (Data/Hora e Endereço) são obrigatórios." 
        });
    }

    const [result] = await db.query("INSERT INTO agendamento (data_hora, endereco_cliente) VALUES (?, ?)", [data_hora, endereco_cliente]);

    try {
    } catch (error) {
        res.status(500).json({ message: "Erro interno.", error: error.message });
    }
};

export { 
    criarAgendamento
};