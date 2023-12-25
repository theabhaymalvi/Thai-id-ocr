import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div class="navbar">
            <div id="buttons">
                <Link to="/"><button className="buttons" onclick="scanDocument()">Scan Document</button></Link>
            </div>
            <div id="brand">
                <h1> THAI ID OCR </h1>
            </div>
            <div id="buttons">
                <Link to="/records"><button onclick="viewRecords()">Records</button></Link>
            </div>
        </div>
    )
};

export default Navbar;