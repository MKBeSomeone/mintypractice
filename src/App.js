import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import logo from './mintLogo.png';

function App() {
    return (
        <Router basename="/mintypractice">
            <div>
                <nav>
                    <Link className={"link-styles"} to="/">Home</Link>
                    <Link className={"link-styles"} to="/about">About</Link>
                    
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} /> {}
                </Routes>
            </div>
        </Router>
    );
}

// function Home() {
//     return <h2>Home Page</h2>;
// }

// function About() {
//     return <h2>About Page</h2>;
// }

// function Contact() {
//     return <h2>Contact Page</h2>;
// }

// function NotFound() {
//     return <h2>404 - Page Not Found</h2>;
// }

export default App;