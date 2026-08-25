import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JsonFormatter from './pages/JsonFormatter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/JsonFormatter" element={<JsonFormatter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;