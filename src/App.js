import Home from './views/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DetailedPost from './views/DetailedPost';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" component={DetailedPost} />
      </Switch>
    </Router>
  );
}

export default App;
