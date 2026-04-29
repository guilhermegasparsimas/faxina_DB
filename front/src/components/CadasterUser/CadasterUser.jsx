import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CadasterUser = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        tipo_usuario: "cliente"
    });

    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        try {
            const response = await fetch('http://localhost:9001/usuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/login');
            } else {
                setMessage({ texto: 'Erro ao cadastrar usuário.', tipo: 'erro' });
            }
        } catch (error) {
            setMessage({ texto: 'Erro de conexão com o servidor.', tipo: 'erro' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>

            {/* LADO ESQUERDO */}
            <div style={styles.left}>
                <h1 style={styles.brand}>Faxina App</h1>
                <p style={styles.subtitle}>
                    Crie sua conta e comece a organizar tudo com mais facilidade.
                </p>
            </div>

            {/* LADO DIREITO */}
            <div style={styles.right}>
                <form onSubmit={handleSubmit} style={styles.card}>
                    <h2 style={styles.title}>Criar conta</h2>

                    {message && (
                        <div style={styles.errorBox}>
                            {message.texto}
                        </div>
                    )}

                    <input
                        style={styles.input}
                        name="nome"
                        placeholder="Nome completo"
                        onChange={handleChange}
                        required
                    />

                    <input
                        style={styles.input}
                        name="cpf"
                        placeholder="CPF"
                        onChange={handleChange}
                        required
                    />

                    <input
                        style={styles.input}
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        required
                    />

                    <input
                        style={styles.input}
                        name="senha"
                        type="password"
                        placeholder="Senha"
                        onChange={handleChange}
                        required
                    />

                    <select
                        style={styles.input}
                        name="tipo_usuario"
                        onChange={handleChange}
                    >
                        <option value="cliente">Cliente</option>
                        <option value="adm">Administrador</option>
                        <option value="funcionario">Funcionário</option>
                    </select>

                    <button style={styles.button} type="submit" disabled={loading}>
                        {loading ? 'Criando conta...' : 'Cadastrar'}
                    </button>

                    <p style={styles.footerText} onClick={() => navigate('/login')}>
                        Já tem conta? Entrar
                    </p>
                </form>
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        display: 'flex',
        fontFamily: 'Segoe UI, sans-serif'
    },

    left: {
        flex: 1,
        background: 'linear-gradient(135deg, #4a6fa5, #6c8fc7)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px',
        color: '#fff'
    },

    brand: {
        fontSize: '42px',
        marginBottom: '10px'
    },

    subtitle: {
        fontSize: '18px',
        opacity: 0.9,
        maxWidth: '320px'
    },

    right: {
        flex: 1,
        backgroundColor: '#f5f7fb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        width: '360px',
        backgroundColor: '#fff',
        padding: '35px',
        borderRadius: '14px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
    },

    title: {
        textAlign: 'center',
        color: '#2c3e50'
    },

    input: {
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #dcdfe6',
        fontSize: '14px',
        outline: 'none'
    },

    button: {
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#4a6fa5',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer'
    },

    errorBox: {
        backgroundColor: '#fdecea',
        color: '#c62828',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '13px'
    },

    footerText: {
        textAlign: 'center',
        fontSize: '12px',
        color: '#7a7a7a',
        cursor: 'pointer'
    }
};

export default CadasterUser;