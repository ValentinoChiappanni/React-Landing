import './App.css';
import './estilos.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componentes/Main';
import Formulario from './componentes/Formulario';
function App() {
  return (
    <>
      <Routes>
        <Route path="/React-Landing" element={<Home />} />
        <Route path="/React-Landing/Formulario" element={<Formulario />} />
      </Routes>
    </>
  );
}

export default App;
