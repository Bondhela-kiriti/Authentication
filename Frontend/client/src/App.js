import {Route,Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Dashbord from './components/Dashbord';

function App() {
  return (

    
      
    <div className="App">
        <Home/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Dashbord/>}/>
        </Routes>
    </div>
  
      
    );
}

export default App;
