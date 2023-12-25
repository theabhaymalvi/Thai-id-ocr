import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Records from "./pages/Records";

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/records" element={<Records/>} />
            </Routes>
        </Router>
    )
};

export default App;