import { db } from '../../config/db.js';

const criarAgendamento = async (req, res) => {
    try {
        const { nome_cliente, data, hora, endereco_cliente, servico } = req.body;

        if (!nome_cliente || !data || !hora || !endereco_cliente || !servico) {
            return res.status(400).json({
                message: "Todos os campos são obrigatórios."
            });
        }

        const [result] = await db.query(
            `INSERT INTO agendamento (nome_cliente, data, hora, endereco_cliente, servico)
             VALUES (?, ?, ?, ?, ?)`,
            [nome_cliente, data, hora, endereco_cliente, servico]
        );

        return res.status(201).json({
            message: "Agendamento criado com sucesso!",
            id: result.insertId
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao criar agendamento.",
            error: error.message
        });
    }
};

const editarAgendamento = async (req, res) => {
    try {
        const { id } = req.body;
        const { nome_cliente, data, hora, endereco_cliente, servico } = req.body;

        if(!nome_cliente || !data || !hora || !endereco_cliente || !servico){
            return res.status(400).json({message: "Todos os campos são obrigatórios."})
        }

        const [result] = await db.query(
            `UPDATE agendamento
                SET
                    nome_cliente = ?,
                    data = ?,
                    hora = ?,
                    endereco_cliente = ?,
                    servico = ?`, [nome_cliente, data, hora, endereco_cliente, servico, id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Agendamento não encontrado."
            });
        }

        return res.status(200).json({
            message: "Agendamento atualizado com sucesso!"
        });

    } catch (error) {
        return res.status(500).json({message: "Erro ao editar agendamento."})
    }
 }
const listarAgendamentos = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM agendamento ORDER BY data ASC, hora ASC"
        );

        return res.status(200).json(rows);

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao buscar agendamentos.",
            error: error.message
        });
    }
};

const buscarAgendamentoPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            "SELECT * FROM agendamento WHERE agendamento_id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Agendamento não encontrado."
            });
        }

        return res.status(200).json(rows[0]);

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao buscar agendamento.",
            error: error.message
        });
    }
};

const deletarAgendamento = async (req, res) => {
    try {

        const { id } = req.params;

        const [result] = await db.query(
            "DELETE FROM agendamento WHERE agendamento_id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Agendamento não encontrado."
            });
        }

        return res.status(200).json({
            message: "Agendamento cancelado com sucesso!"
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao cancelar agendamento.",
            error: error.message
        });
    }
};

export { criarAgendamento, listarAgendamentos, buscarAgendamentoPorId, deletarAgendamento, editarAgendamento };