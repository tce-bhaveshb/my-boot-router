import './App.css';
import { BrowserRouter } from "react-router-dom";
import IndexPages from './components/IndexPages';
import Header from './components/header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <IndexPages />
    </BrowserRouter>
  );
}

export default App;