import './App.css';
// import Heading from './component/Heading/Heading';
import Home from './component/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from './component/About/About';

function App() {
  return (
    <div >
      {/* <Heading/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/anime/:id" element={<About/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
