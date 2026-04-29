import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const CadasterUser = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        tipo_usuario: "cliente"
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9001/usuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                
                navigate('/login')
            } else {
                alert("Erro ao cadastrar usuário.");
            }
        } catch (error) {
            console.error("Erro na conexão:", error);
        }
    };
    return (
       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }} autoComplete='off'>
      <h2>Cadastrar Novo Usuário</h2>
      <input name="nome" placeholder="Nome Completo" onChange={handleChange} required autoComplete='off'/>
      <input name="cpf" placeholder="CPF" onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required autoComplete='off' />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required autoComplete='new-password' />
      <select name="tipo_usuario" onChange={handleChange}>
        <option value="cliente">Cliente</option>
        <option value="adm">ADM</option>
      </select>
      <button type="submit">Cadastrar</button>
    </form>
    )
}

export default CadasterUser;