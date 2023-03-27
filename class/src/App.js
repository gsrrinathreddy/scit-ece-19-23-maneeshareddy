import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import aboutme from './components/pages/skills';
import Hobbies from './components/pages/skills';
import skills from './components/pages/skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/aboutme"element={<aboutme/>}/>
        <Route path="/Hobbies"element={<Hobbies/>}/>
        <Route path="/skills"element={<skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
