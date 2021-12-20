import './App.css';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Navigation from "./components/Navigation"
import About from "./pages/About.js"
function App() {
  return (
    <div className="App">
     
      <Router>
      <Navigation/>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
