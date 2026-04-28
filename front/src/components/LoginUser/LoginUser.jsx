import {useState} from 'react';

    const LoginUser = () => {
        const [credentials, setCredentials] = useState({
            cpf: '',
            senha: ''
        });

        const handleChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
        };

        const handleLogin = (e) => {
            e.preventDefault();
            console.log("Tentativa de login com:", credentials);
        };
        return (
            <div style={{ padding: '20px' }}>
                <h2>Login</h2>
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