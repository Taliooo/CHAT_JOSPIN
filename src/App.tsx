import './styles/index.css';
import Sidebar from './components/Sidebar/Sidebar';
import Accueil from './pages/Accueil/Accueil';

function App() {
  return (
    <div className='container'>
      <Sidebar/>
      <div className='principal'>
          <Accueil/>
      </div>
    </div>
  )
}

export default App