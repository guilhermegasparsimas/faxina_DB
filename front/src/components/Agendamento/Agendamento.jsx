import { useEffect, useState } from 'react';

const Agendamento = () => {
    const [agendamentos, setAgendamentos] = useState([]);
    const [editando, setEditando] = useState(null);

    const [form, setForm] = useState({
        data: "",
        hora: "",
        endereco_cliente: "",
        servico: ""
    });

    // 🔄 Simulação (depois vira API GET)
    useEffect(() => {
        setAgendamentos([
            {
                id: 1,
                data: "2026-05-01",
                hora: "10:00",
                endereco_cliente: "Rua A, 123",
                servico: "Residencial"
            },
            {
                id: 2,
                data: "2026-05-03",
                hora: "14:00",
                endereco_cliente: "Av. Central, 500",
                servico: "Comercial"
            }
        ]);
    }, []);

    const handleDelete = (id) => {
        const filtrados = agendamentos.filter(a => a.id !== id);
        setAgendamentos(filtrados);
    };

    const handleEdit = (agendamento) => {
        setEditando(agendamento);
        setForm(agendamento);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const salvarEdicao = (e) => {
        e.preventDefault();

        const atualizados = agendamentos.map(a =>
            a.id === editando.id ? { ...form, id: a.id } : a
        );

        setAgendamentos(atualizados);
        setEditando(null);
    };

    return (
        <div style={styles.container}>

            <h1 style={styles.title}>📅 Meus Agendamentos</h1>

            <div style={styles.grid}>
                {agendamentos.map((a) => (
                    <div key={a.id} style={styles.card}>

                        <p><strong>Serviço:</strong> {a.servico}</p>
                        <p><strong>Data:</strong> {a.data}</p>
                        <p><strong>Hora:</strong> {a.hora}</p>
                        <p><strong>Endereço:</strong> {a.endereco_cliente}</p>

                        <div style={styles.actions}>
                            <button
                                style={styles.editBtn}
                                onClick={() => handleEdit(a)}
                            >
                                Editar
                            </button>

                            <button
                                style={styles.deleteBtn}
                                onClick={() => handleDelete(a.id)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL DE EDIÇÃO */}
            {editando && (
                <div style={styles.overlay}>
                    <div style={styles.modal}>
                        <h2>Editar Agendamento</h2>

                        <form onSubmit={salvarEdicao} style={styles.form}>

                            <input
                                name="data"
                                type="date"
                                value={form.data}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <input
                                name="hora"
                                type="time"
                                value={form.hora}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <input
                                name="endereco_cliente"
                                placeholder="Endereço do cliente"
                                value={form.endereco_cliente}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <select
                                name="servico"
                                value={form.servico}
                                onChange={handleChange}
                                style={styles.input}
                            >
                                <option value="">Selecione o serviço</option>
                                <option value="Residencial">Residencial</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Profunda">Profunda</option>
                            </select>

                            <button style={styles.saveBtn} type="submit">
                                Salvar
                            </button>

                            <button
                                type="button"
                                style={styles.cancelBtn}
                                onClick={() => setEditando(null)}
                            >
                                Fechar
                            </button>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

const styles = {

    container: {
        padding: '40px',
        fontFamily: 'Segoe UI',
        backgroundColor: '#f5f7fb',
        minHeight: '100vh'
    },

    title: {
        color: '#2c3e50',
        marginBottom: '20px'
    },

    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
    },

    card: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
    },

    actions: {
        marginTop: '15px',
        display: 'flex',
        gap: '10px'
    },

    editBtn: {
        padding: '8px 12px',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#4a6fa5',
        color: '#fff',
        cursor: 'pointer'
    },

    deleteBtn: {
        padding: '8px 12px',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: '#e74c3c',
        color: '#fff',
        cursor: 'pointer'
    },

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '12px',
        width: '350px'
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },

    input: {
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ddd'
    },

    saveBtn: {
        padding: '10px',
        backgroundColor: '#4a6fa5',
        color: '#fff',
        border: 'none',
        borderRadius: '8px'
    },

    cancelBtn: {
        padding: '10px',
        backgroundColor: '#ccc',
        border: 'none',
        borderRadius: '8px'
    }
};

export default Agendamento;