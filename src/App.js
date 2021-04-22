import Home from './views/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
