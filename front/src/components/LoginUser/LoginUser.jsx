import { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginUser = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        cpf: '',
        senha: ''
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage(null);

        try {
            const response = await fetch('http://localhost:9001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ texto: 'Login realizado com sucesso!', tipo: 'sucesso' });
                 navigate('/home')
            } else {
                setMessage({ texto: data.message || 'Erro ao fazer login.', tipo: 'erro' });
            }
        } catch (error) {
            setMessage({ texto: 'Erro de conexão com o servidor.', tipo: 'erro' });
        }
    };
    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>

            {message && (
                <div style={{
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '4px',
                    backgroundColor: message.tipo === 'sucesso' ? '#d4edda' : '#f8d7da',
                    color: message.tipo === 'sucesso' ? '#155724' : '#721c24',
                    border: `1px solid ${message.tipo === 'sucesso' ? '#c3e6cb' : '#f5c6cb'}`
                }}>
                    {message.texto}
                </div>
            )}

            <form onSubmit={handleLogin}>
                <div>
                    <label>CPF:</label><br />
                    <input
                        name="cpf"
                        placeholder="000.000.000-00"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label><br />
                    <input
                        name="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={handleChange}
                        required
                        autoComplete='new-password'
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginUser;