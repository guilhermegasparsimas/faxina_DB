// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//     const navigate = useNavigate();

//     return (
//         <div style={styles.page}>

//             {/* MENU LATERAL */}
//             <aside style={styles.sidebar}>
//                 <h2 style={styles.logo}>Faxina App</h2>

//                 <button style={styles.menuButton} onClick={() => navigate('/agendar')}>
//                     🧹 Agendar nova faxina
//                 </button>

//                 <button style={styles.menuButton} onClick={() => navigate('/agendamentos')}>
//                     📅 Meus agendamentos
//                 </button>

//                 <button style={styles.menuButton} onClick={() => navigate('/servicos')}>
//                     🔎 Pesquisar serviços
//                 </button>

//                 <div style={styles.divider}></div>

//                 <button style={styles.logoutButton} onClick={() => navigate('/login')}>
//                     Sair
//                 </button>
//             </aside>

//             {/* CONTEÚDO PRINCIPAL */}
//             <main style={styles.content}>

//                 <h1 style={styles.title}>Bem-vindo ao Faxina App</h1>
//                 <p style={styles.subtitle}>
//                     Encontre, agende e gerencie seus serviços de limpeza de forma simples.
//                 </p>

//                 {/* CARDS DE PROPAGANDA */}
//                 <div style={styles.grid}>

//                     <div style={styles.card}>
//                         <h3>🏠 Limpeza Residencial</h3>
//                         <p>Deixe sua casa impecável com profissionais qualificados.</p>
//                     </div>

//                     <div style={styles.card}>
//                         <h3>🏢 Limpeza Comercial</h3>
//                         <p>Ambientes limpos para melhor produtividade da sua empresa.</p>
//                     </div>

//                     <div style={styles.card}>
//                         <h3>✨ Faxina Profunda</h3>
//                         <p>Limpeza completa para situações que exigem atenção especial.</p>
//                     </div>

//                 </div>

//                 {/* BANNER INFORMATIVO */}
//                 <div style={styles.banner}>
//                     <h2>Agende em poucos cliques</h2>
//                     <p>Escolha o serviço, data e horário. Simples e rápido.</p>
//                 </div>

//             </main>

//         </div>
//     );
// };

// const styles = {
//     page: {
//         display: 'flex',
//         height: '100vh',
//         fontFamily: 'Segoe UI, sans-serif',
//         backgroundColor: '#f5f7fb'
//     },

//     /* SIDEBAR */
//     sidebar: {
//         width: '260px',
//         background: 'linear-gradient(180deg, #4a6fa5, #6c8fc7)',
//         color: '#fff',
//         padding: '25px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '12px'
//     },

//     logo: {
//         marginBottom: '20px'
//     },

//     menuButton: {
//         padding: '12px',
//         border: 'none',
//         borderRadius: '8px',
//         backgroundColor: 'rgba(255,255,255,0.15)',
//         color: '#fff',
//         cursor: 'pointer',
//         textAlign: 'left',
//         fontSize: '14px'
//     },

//     logoutButton: {
//         marginTop: 'auto',
//         padding: '12px',
//         border: 'none',
//         borderRadius: '8px',
//         backgroundColor: '#e74c3c',
//         color: '#fff',
//         cursor: 'pointer'
//     },

//     divider: {
//         height: '1px',
//         backgroundColor: 'rgba(255,255,255,0.3)',
//         margin: '10px 0'
//     },

//     /* CONTEÚDO */
//     content: {
//         flex: 1,
//         padding: '40px'
//     },

//     title: {
//         color: '#2c3e50',
//         marginBottom: '5px'
//     },

//     subtitle: {
//         color: '#7a7a7a',
//         marginBottom: '30px'
//     },

//     grid: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(3, 1fr)',
//         gap: '20px',
//         marginBottom: '30px'
//     },

//     card: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '12px',
//         boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
//     },

//     banner: {
//         background: 'linear-gradient(135deg, #dfe9f3, #ffffff)',
//         padding: '25px',
//         borderRadius: '12px',
//         boxShadow: '0 6px 18px rgba(0,0,0,0.05)'
//     }
// };

// export default Home;

import { useState } from 'react';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    data_horario: "",
    endereco_cliente: "",
    servico: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Agendamento criado:", form);

    // aqui depois você chama sua API
    alert("Agendamento realizado com sucesso!");

    setModalOpen(false);
    setForm({ data: "", horario: "", servico: "" });
  };

  return (
    <div style={styles.page}>

      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
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
        <h1>Bem-vindo 👋</h1>
        <p>Escolha um serviço no menu ao lado.</p>
      </main>

      {/* MODAL */}
      {modalOpen && (
        <div style={styles.overlay} onClick={() => setModalOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

            <h2 style={{ marginBottom: '15px' }}>
              🧹 Novo Agendamento
            </h2>

            <form onSubmit={handleSubmit} style={styles.form}>

              <input
                name="data"
                type="date"
                style={styles.input}
                onChange={handleChange}
                required
              />

              <input
                name="horario"
                type="time"
                style={styles.input}
                onChange={handleChange}
                required
              />

              <select
                name="servico"
                style={styles.input}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o serviço</option>
                <option value="residencial">Limpeza Residencial</option>
                <option value="comercial">Limpeza Comercial</option>
                <option value="profunda">Faxina Profunda</option>
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