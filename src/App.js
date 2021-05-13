
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Switch>
      <Home/>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
