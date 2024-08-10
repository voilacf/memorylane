import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Start from "./views/Start";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Todolist from "./views/Todolist";

function Application() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/todolist" element={<Todolist/>}/>
            </Routes>
        </Router>
    )
}

export default Application;