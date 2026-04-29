import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadasterUser from './components/CadasterUser/CadasterUser';
import LoginUser from './components/LoginUser/LoginUser';
import HomePage from './components/homePage/homePage';
import Agendamento from './components/Agendamento/Agendamento';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadasterUser />} />
        <Route path="/cadastro" element={<CadasterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/home" element={< HomePage />} />
        <Route path="/agendamento" element={< Agendamento />} />
      </Routes>
    </Router>
  );
}

export default App;