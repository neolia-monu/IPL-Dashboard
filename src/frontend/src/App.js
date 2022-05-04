import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamPage } from "./pages/TeamPage";
import { HomePage } from "./pages/HomePage";
import {MatchPage} from "./pages/MatchPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="teams/:teamName" element={<TeamPage />} />
                <Route path="teams/:teamName/matches/:year" element={ <MatchPage /> } />
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
