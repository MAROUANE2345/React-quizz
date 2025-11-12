import React from 'react';
import Home from './pages/Home';
import Quizz from './pages/Quizz';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <div>
         <BrowserRouter>
             <div className='app-cont'>
                    <Navbar/>
                    <Routes>
                      <Route path='/' element={<Home/>} />
                      <Route path='/quizz' element={<Quizz/>} />
                      <Route path='/result' element={<Result/>} />
                    </Routes>
                    <Footer/>
             </div>
                 
         </BrowserRouter>

          
    </div>
  );
}

export default App;
