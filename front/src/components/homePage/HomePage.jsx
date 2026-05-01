import { useState } from 'react';
import { Gallery, CardBody, Image, Card } from './styles';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const [form, setForm] = useState({
    nome_cliente: "",
    data: "",
    hora: "",
    endereco_cliente: "",
    servico: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log(form)
      const response = await fetch('http://localhost:9001/agendamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(form),
      });

      if (!response.ok) {

        const errorData = await response.json();

        console.log(errorData);

        throw new Error(errorData.error || errorData.message);
      }

      const data = await response.json();

      console.log(data);

      alert('Agendamento realizado com sucesso!');

      setModalOpen(false);

      setForm({
        nome_cliente: "",
        data: "",
        hora: "",
        endereco_cliente: "",
        servico: ""
      });

    } catch (error) {
      console.error(error);
      alert('Erro ao agendar serviço');
    }
  };

  return (
    <div style={styles.page}>

      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <div style={styles.userBox}>

          <p style={styles.userText}>
            👋 Olá,
          </p>

          <strong>
            {usuario?.nome}
          </strong>

        </div>
        <h2 style={styles.logo}>Faxina App</h2>
        <button
          style={styles.menuButton}
          onClick={() => setModalOpen(true)}
        >
          🧹 Agendar nova faxina
        </button>

        <button
          style={styles.menuButton}
          onClick={() => navigate('/agendamento')}
        >
          📅 Meus agendamentos
        </button>

        <button style={styles.menuButton}>
          🔎 Pesquisar serviços
        </button>
      </aside>

      {/* CONTEÚDO */}
      <main style={styles.content}>
        <h1 style={{ color: "black" }} className="fw-bold">
          Bem-vindo 👋
        </h1>

        <p>Escolha um serviço no menu ao lado.</p>

        {/* GALERIA DE SERVIÇOS */}
        <Gallery>

          <Card>
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
              alt="Limpeza residencial"
            />

            <CardBody>
              <h3>🏠 Limpeza Residencial</h3>

              <p>
                Deixe sua casa impecável com profissionais qualificados.
              </p>
            </CardBody>
          </Card>

          <Card>
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt="Limpeza comercial"
            />

            <CardBody>
              <h3>🏢 Limpeza Comercial</h3>

              <p>
                Ambientes limpos para empresas e escritórios.
              </p>
            </CardBody>
          </Card>

        </Gallery>
        <Gallery>

          <Card>
            <Image
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop"
              alt="Limpeza profunda"
            />

            <CardBody>
              <h3>✨ Limpeza Profunda</h3>

              <p>
                Higienização completa para cozinhas, banheiros e ambientes mais exigentes.
              </p>
            </CardBody>
          </Card>

        </Gallery>
      </main>

      {/* MODAL */}
      {modalOpen && (
        <div style={styles.overlay} onClick={() => setModalOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

            <h2 style={{ marginBottom: '15px', color: "black" }} >
              🧹 Novo Agendamento
            </h2>

            <form onSubmit={handleSubmit} style={styles.form}>

              <input
                name="nome_cliente"
                type="text"
                placeholder="Nome do Cliente"
                style={styles.input}
                onChange={handleChange}
                required
                value={form.nome_cliente}
              />

              <input
                name="data"
                type="date"
                style={styles.input}
                onChange={handleChange}
                required
                value={form.data}
              />

              <input
                name="hora"
                type="time"
                style={styles.input}
                onChange={handleChange}
                required
                value={form.hora}
              />
              <input
                name="endereco_cliente"
                type="text"
                placeholder="Endereço"
                style={styles.input}
                onChange={handleChange}
                required
                value={form.endereco_cliente}
              />
              <select
                name="servico"
                style={styles.input}
                onChange={handleChange}
                required
                value={form.servico}
              >
                <option value="">Selecione o serviço</option>
                <option value="residencial">🏠 Limpeza Residencial</option>
                <option value="comercial">🏢 Limpeza Comercial</option>
                <option value="profunda">✨ Limpeza Profunda</option>
              </select>



              <button type="submit" style={styles.button}>
                Confirmar agendamento
              </button>

              <button
                type="button"
                style={styles.cancelButton}
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

const styles = {

  page: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f5f7fb'
  },

  userBox: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: '12px',
    borderRadius: '10px',
    marginBottom: '15px',
    color: '#fff'
  },

  userText: {
    margin: 0,
    fontSize: '14px',
    opacity: 0.8
  },

  sidebar: {
    width: '260px',
    background: 'linear-gradient(180deg, #4a6fa5, #6c8fc7)',
    color: '#fff',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },

  logo: {
    marginBottom: '20px'
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
    padding: '40px'
  },

  /* MODAL */
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
    width: '380px',
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },

  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    outline: 'none'
  },

  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#4a6fa5',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  cancelButton: {
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default Home;