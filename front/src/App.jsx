import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadasterUser from './components/CadasterUser/CadasterUser';
import LoginUser from './components/LoginUser/LoginUser';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadasterUser />} />
        <Route path="/cadastro" element={<CadasterUser />} />
        <Route path="/login" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;