import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './App.css'
import CreateGame from './pages/CreateGame';
import DetailGame from './pages/DetailGame';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create-game" element={<CreateGame />} />
          <Route path="/games/:id" element={<DetailGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
