import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1 className='Home-h1'>Happy React Quizz Day</h1>
          <div className='cmd-div'>
                <div className='rose-div'>
                    <h3>Join the virtual quizz</h3>
                </div>
                <div className='black-div'>
                    <p className='cmd-p'> A quiz created to assess knowledge and skills. It measures understanding through clear path. Results show accuracy and aaa, A quiz created to assess knowledge and skills. It measures</p>
                </div>
          </div>

          <button className='Start-btn'><Link className='Link-btn' to="/quizz">Start Quizz <span className='arrow'></span></Link></button>
          

          <div className='div-pic'>

          </div>
           
        </div>
    );
}

export default Home;
