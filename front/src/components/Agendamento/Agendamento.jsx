import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Overlay,
    Modal,
    Form,
    Input,
    Select,
    SaveButton,
    CancelButton,
    Page,
    Sidebar,
    MenuButton
} from './styles';
import ModalCriarAgendamento from './components/ModalCriarAgendamento';
import ModalEditarAgendamento from './components/ModalEditarAgendamento';

const Agendamento = () => {
    const navigate = useNavigate();

    const [agendamentos, setAgendamentos] = useState([]);

    const [modalCriarOpen, setModalCriarOpen] = useState(false);

    const [modalEditarOpen, setModalEditarOpen] = useState(false);

    const [form, setForm] = useState({
        nome_cliente: '',
        data: '',
        hora: '',
        endereco_cliente: '',
        servico: '',
    });

    const [agendamentoEditando, setAgendamentoEditando] = useState(null);

    useEffect(() => {
        buscarAgendamentos();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const abrirEdicao = (agendamento) => {
        setAgendamentoEditando(agendamento.agendamento_id);

        setForm({
            nome_cliente: agendamento.nome_cliente,
            data: agendamento.data?.split('T')[0],
            hora: agendamento.hora,
            endereco_cliente: agendamento.endereco_cliente,
            servico: agendamento.servico,
        });

        setModalEditarOpen(true);
    };

    const buscarAgendamentos = async () => {
        try {

            const response = await fetch('http://localhost:9001/agendamento');

            const data = await response.json();

            setAgendamentos(data);

        } catch (error) {
            console.error(error);
        }
    };

    const cancelarAgendamento = async (id) => {

        const confirmar = window.confirm(
            'Deseja cancelar este agendamento?'
        );

        if (!confirmar) return;

        try {

            await fetch(`http://localhost:9001/agendamento/${id}`, {
                method: 'DELETE',
            });

            buscarAgendamentos();

        } catch (error) {
            console.error(error);
        }
    };

    const editarAgendamento = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                `http://localhost:9001/agendamento/${agendamentoEditando}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                }
            );

            if (!response.ok) {
                throw new Error('Erro ao editar agendamento');
            }

            alert('Agendamento atualizado!');

            setModalEditarOpen(false);

            buscarAgendamentos();

        } catch (error) {
            console.error(error);
        }
    };

    const criarAgendamento = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                'http://localhost:9001/agendamento',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                }
            );

            if (!response.ok) {
                throw new Error('Erro ao criar agendamento');
            }

            alert('Agendamento criado!');

            setModalCriarOpen(false);

            buscarAgendamentos();

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Page>

            {/* MENU */}
            <Sidebar>
                <h2>Faxina App</h2>

                <MenuButton onClick={() => setModalCriarOpen(true)}>
                    🧹 Nova Faxina
                </MenuButton>

                <MenuButton>
                    📅 Meus Agendamentos
                </MenuButton>

                <MenuButton onClick={() => navigate('/home')}>
                    🏠  Home
                </MenuButton>
            </Sidebar>

            {/* CONTEÚDO */}
            <main style={styles.content}>

                <h1 style={{ color: 'black' }}>
                    Meus Agendamentos
                </h1>

                <div style={styles.list}>

                    {agendamentos.map((item) => (

                        <div key={item.agendamento_id} style={styles.card}>

                            <h3>
                                {item.nome_cliente}
                            </h3>

                            <p>
                                <strong>Serviço:</strong> {item.servico}
                            </p>

                            <p>
                                <strong>Data:</strong> {item.data}
                            </p>

                            <p>
                                <strong>Hora:</strong> {item.hora}
                            </p>

                            <p>
                                <strong>Endereço:</strong> {item.endereco_cliente}
                            </p>

                            <div style={styles.actions}>

                                <button onClick={() => abrirEdicao(item)} style={styles.editButton}>
                                    Editar
                                </button>

                                <button
                                    style={styles.deleteButton}
                                    onClick={() => cancelarAgendamento(item.agendamento_id)}
                                >
                                    Cancelar
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </main>
            {modalEditarOpen && (
                <Overlay>

                    <Modal>

                        <h2 style={{ color: 'black' }}>
                            Editar Agendamento
                        </h2>

                        <Form onSubmit={editarAgendamento}>

                            <Input
                                type="text"
                                name="nome_cliente"
                                value={form.nome_cliente}
                                onChange={handleChange}
                                placeholder="Nome"
                            />

                            <Input
                                type="date"
                                name="data"
                                value={form.data}
                                onChange={handleChange}
                            />

                            <Input
                                type="time"
                                name="hora"
                                value={form.hora}
                                onChange={handleChange}
                            />

                            <Input
                                type="text"
                                name="endereco_cliente"
                                value={form.endereco_cliente}
                                onChange={handleChange}
                                placeholder="Endereço"
                            />

                            <Select
                                name="servico"
                                value={form.servico}
                                onChange={handleChange}
                            >
                                <option value="residencial">
                                    Residencial
                                </option>

                                <option value="comercial">
                                    Comercial
                                </option>

                                <option value="profunda">
                                    Profunda
                                </option>
                            </Select>

                            <SaveButton type="submit">
                                Salvar
                            </SaveButton>

                            <CancelButton
                                type="button"
                                onClick={() => setModalEditarOpen(false)}
                            >
                                Cancelar
                            </CancelButton>

                        </Form>

                    </Modal>

                </Overlay>
            )}
            {modalCriarOpen && (
                <ModalCriarAgendamento
                    form={form}
                    handleChange={handleChange}
                    fechar={() => setModalCriarOpen(false)}
                    criarAgendamento={criarAgendamento}
                />
            )}

            {modalEditarOpen && (
                <ModalEditarAgendamento
                    form={form}
                    handleChange={handleChange}
                    fechar={() => setModalEditarOpen(false)}
                    editarAgendamento={editarAgendamento}
                />
            )}

        </Page>
    );
}

const styles = {

    page: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f7fb',
        fontFamily: 'Segoe UI'
    },

    sidebar: {
        width: '260px',
        background: 'linear-gradient(180deg, #4a6fa5, #6c8fc7)',
        padding: '25px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },

    menuButton: {
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: 'rgba(255,255,255,0.15)',
        color: '#fff',
        cursor: 'pointer',
        textAlign: 'left'
    },

    content: {
        flex: 1,
        padding: '40px',
        overflowY: 'auto'
    },

    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px'
    },

    card: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
    },

    actions: {
        display: 'flex',
        gap: '10px',
        marginTop: '15px'
    },

    editButton: {
        padding: '10px 14px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#f39c12',
        color: '#fff',
        cursor: 'pointer'
    },

    deleteButton: {
        padding: '10px 14px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#e74c3c',
        color: '#fff',
        cursor: 'pointer'
    }
};

export default Agendamento;