import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Journal from "./pages/Journal";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="journal" element={<Journal/>}/>
            </Routes>
        </div>
    );
}

export default App;
