import React from 'react';
import { useParams } from 'react-router-dom';
import './Result.css'
const Result = () => {
    const {score} = useParams()
    return (
        <div className='result-page'>
            <section className='score'>
                  <div className='image1'></div>


                  <div className='score-div'>
                      <h3>aaaa</h3>

                      <button>test</button>
                  </div>


                  <div className='image2'>image2</div>
            </section>


            <section className='playAgain'>

            </section>
        </div>
    );
}

export default Result;
