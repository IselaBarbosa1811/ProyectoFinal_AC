import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Barra from '../src/componentes/Barra';
import Registrousuario from '../src/componentes/Registrousuario';
import Registrovet from '../src/componentes/Registrovet';
import Registroventas from '../src/componentes/Registroventas';
import Registroprov from '../src/componentes/Registroprov';
import Registroprod from '../src/componentes/Registroprod';
import Registromasc from '../src/componentes/Registromasc';
import Registrocompras from '../src/componentes/Registrocompras';
import Registroclientes from '../src/componentes/Registroclientes';
import Registrocitas from '../src/componentes/Registrocitas';
import Registrocateg from '../src/componentes/Registrocateg';
import Login from '../src/componentes/Login';






function App() {
  return (
    <Router>
      <Barra />
      <Route path='/' exact component={Login} />
      <Route path='/registrousuario' exact component={Registrousuario} />
      <Route path='/registrovet' exact component={Registrovet} />
      <Route path='/registroventas' exact component={Registroventas} />
      <Route path='/registroprovee' exact component={Registroprov } />
      <Route path='/registroproduc' exact component={Registroprod } />
      <Route path='/registromasc' exact component={Registromasc } />
      <Route path='/registrocompras' exact component={Registrocompras } />
      <Route path='/registroclientes' exact component={Registroclientes } />
      <Route path='/registrocitas' exact component={Registrocitas } />
      <Route path='/registrocateg' exact component={Registrocateg } />
    </Router>
   
  );
}

export default App;
