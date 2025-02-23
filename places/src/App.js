import "./HomePage/css/style.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import NavPage from './NavigationPage/NavPage';
import DestinationPage from "./DestinationPage/DestinationPage";
import CrewPage from "./CrewPage/CrewPage";
import TechnologyPage from "./TechnologyPage/TechnologyPage";
function App() {
  return (
    <Router>
      <NavPage/>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/DestinationPage" element={<DestinationPage/>} />
        <Route path="/CrewPage" element={<CrewPage/>} />
        <Route path="/TechnologyPage" element={<TechnologyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
