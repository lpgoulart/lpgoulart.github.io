import './App.css';
import { Link, Routes, BrowserRouter as Router, Route, } from 'react-router-dom';
import Landing from './pages/landing';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
