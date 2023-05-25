import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../containers/Home"
import { About } from "../containers/About"
  
  export const MainRoutes = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
    </Router>
  )