import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componets/Navbar';
// import {Home,About,Contact,Projects} from './pages';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Project';
import Intro from './pages/Intro';

const App =()=> {

  return (

    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/' element={<Intro/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
