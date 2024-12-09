import React, { useState } from 'react';
import data from './data';
function App() {
  const[count, setCount] = useState(0);
  const[text, setText]= useState([]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = count;
    if(count<=0){
      setCount(0);
      amount=0;
    }
    else if(count>8){
      setCount(8);
      amount = 8;
    }
    setText(data.slice(0, amount));
  }
  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <h5>We can Generate upto 8 Paragraphs</h5>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Paragraphs : 
        </label>
        <input type="number" name='amount' id='amount' value={count}
        onChange={(e)=>setCount(e.target.value)}></input>
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item, index)=>{
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
    )
}

export default App;