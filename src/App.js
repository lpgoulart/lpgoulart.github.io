import './App.css';
import { Link, Routes, BrowserRouter as Router, } from 'react-router-dom';

const App = () => {

  return (
    <Router>
        <Link to={"/calculator"} >calculator</Link>
    </Router>
  );
}

export default App;
