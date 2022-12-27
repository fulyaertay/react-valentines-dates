import React, {useState} from 'react';
import './App.css';
import data from './data';

function App() {
  const [dates,setDates]=useState(data);
  return (
    <main>
    <section className='container'>
      <h3>
        Valentine's Week
      </h3>
      {dates.map((date)=>{
        return(
          <div className='date' key={date.id}>
            <img src={date.image}></img>
            <div>
              <p>{date.title}</p>
              <p>{date.date}</p>
            </div>
          </div>
        )
      })}
     
      <button onClick={()=>{setDates([])}}>
        Clear All
      </button>
    </section>
   </main>
  );
}

export default App;
