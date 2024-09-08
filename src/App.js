import './App.css';
import {BrowserRouter as Router,Route, Routes, BrowserRouter} from "react-router-dom"
import Contact from './Contact-Page/contact';
import Employee from './Employee-Data-Page/employee';

function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/" element={<Employee />}> </Route>
          </Routes>
      </div>
      </Router>
  );
}

export default App;
