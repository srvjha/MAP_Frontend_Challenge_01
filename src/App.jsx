import React, { useEffect, useState } from 'react';
import data from './utils/CardData.json'
import Card from "./components/Card";
import SkeletonCard from './helper/SkeletonCard';


function App() {
  // console.log("Data: ", data);
  const[cards,setCards] = useState(data)
  const [toggle,setToggle] = useState(false)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    // delay ke liye
   const timer= setTimeout(()=>{
      setLoading(false)
    },2000);

    return ()=>{
      clearTimeout(timer)
    }
  },[])

  const handleToggle = ()=>{
    setToggle(!toggle)
    console.log("Toggle: ",toggle)
  }
  
  // Function for card shuffling logic
  const handleShuffle = () => {
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      console.error('No cards to shuffle or cards is not an array');
      return;
    }

    try {
      const shuffleCards = [...cards]; 
      for (let i = shuffleCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleCards[i], shuffleCards[j]] = [shuffleCards[j], shuffleCards[i]]; 
      }
      console.log('Shuffled Data: ', shuffleCards);
      setCards(shuffleCards); 
    } catch (error) {
      console.error('Error while shuffling cards:', error);
    }
  };

  

  return (
    <>
      <div className="bg-[#1F062A] min-h-screen flex flex-col max-w-screen-2xl mx-auto">   
       
        <div className="py-2">
        <div className=' flex flex-row space-x-2 text-2xl  text-white justify-center items-center sm:ml-[500px]  p-2 rounded-full mr-[500px]'>
        <div className='bg-yellow-500 hover:bg-yellow-200 text-black font-medium font-serif sm:p-2  md:p-2 p-2 rounded-lg cursor-pointer' onClick={()=>handleToggle()}>Color Switch</div>
        <div className='bg-yellow-500  hover:bg-yellow-200  text-black font-medium font-serif  sm:p-2  md:p-2  p-2 rounded-lg cursor-pointer' onClick={()=>handleShuffle()}>Shuffle Cards</div>
       </div>
        </div>
        <div className='flex-grow mt-20 overflow-x-auto ml-14 '>
           {/* For smooth seamless scrolling created utlitiy in tailwind config.js
           thats why we are 2 times rendering */}
          <div className=' flex overflow-hidden space-x-16 group'>
          <div className='flex flex-row space-x-3 p-3 animate-loop-scroll group-hover:paused cursor-pointer '>
            {
              loading?
              (
                Array.from({length:5}).map((_,index)=>(
                  <SkeletonCard key={index}/>
                ))                  
              
              )
              
              :
              (
                cards.map((card) =>
                  (
                    <div key={card.id} className='flex-shrink-0 '>
                      <Card
                        title={card.title}
                        description={card.description}
                        image={card.picture}
                        team={card.team}
                        color={card.color}
                        tag={card.tag}
                        status={card.status}
                        runs={card.stats.runs}
                        sixes ={card.stats.sixes}
                        strikeRate={card.stats.strike_rate}
                        wickets={card.stats.wickets}
                        economy={card.stats.economy}
                        average={card.stats.average}
                        toggle={toggle}
                      />
                    </div>
                  )
                )
              )
             }
            
          </div>

          <div className='flex flex-row space-x-3 p-3 animate-loop-scroll group-hover:paused cursor-pointer ' aria-hidden="true">
            {
              loading?
              (
                Array.from({length:5}).map((_,index)=>(
                  <SkeletonCard key={index}/>
                ))                  
              
              )
              
              :
              (
                cards.map((card) =>
                  (
                    <div key={card.id} className='flex-shrink-0 '>
                      <Card
                        title={card.title}
                        description={card.description}
                        image={card.picture}
                        team={card.team}
                        color={card.color}
                        tag={card.tag}
                        status={card.status}
                        runs={card.stats.runs}
                        sixes ={card.stats.sixes}
                        strikeRate={card.stats.strike_rate}
                        wickets={card.stats.wickets}
                        economy={card.stats.economy}
                        average={card.stats.average}
                        toggle={toggle}
                      />
                    </div>
                  )
                )
              )
             }
            
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;
