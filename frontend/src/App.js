import './App.css';
import "./bootstrap-grid.css"
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Navigation from "./components/Navigation"
import About from "./pages/About.js"
import Team from "./pages/Team.js"
function App() {
  return (
    <div className="App">
     
      <Router>
        
      <Navigation/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/team" component={Team}/>
        </Switch>
      
      
      </Router>
    </div>
  );
}

export default App;
