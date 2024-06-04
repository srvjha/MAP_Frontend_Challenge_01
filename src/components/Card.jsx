import React, { useState } from 'react';
import "../../src/App.css"
import { StarRating } from '../helper/StarRating';
import ProgressiveImage from '../helper/ProgressiveImage';
import spinner from '/spinner.svg'


const Card = ({ title, description, image,team,color,tag,status,runs,strikeRate,wickets,economy,average,sixes,toggle }) => {
  const[rating,setRating] = useState(0)

  const handleRating = (rate)=>{
      setRating(rate)
  }
 
 
  return (
    
    <div 
    className={`shadow-md rounded-lg w-[350px] h-[500px] flex flex-col justify-between overflow-hidden ${toggle ? 'bg-white' : 'bg-black'} transition-transform duration-300 transform hover:scale-105`} style={{ borderColor: color, borderWidth: '3px' }}>
     
     <div className="aspect-[4/5] overflow-hidden">
      
        <div className={`flex justify-end items-end mr-2 font-serif ${toggle?'bg-black text-white':'bg-white text-black'}   px-1 mt-2  ml-[256px] rounded-s-xl`}>{status}</div>
        
        {/* Implementing lazy Loading for UI rendering */}
        {/* <LazyLoad offset={100} height={200} className='text-red-600' placeholder={<div className='bg-gray-300 w-full h-full'>Loading...</div>}>
        <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" />
        </LazyLoad> */}
         <ProgressiveImage lowResSrc={spinner} 
        highResSrc={image} alt={title} />
       
      </div>
      <div className="p-4 flex-1">
        {team== "Gujarat Titans" || team== "Lucknow Super Giants"?
         <div className="font-bold -ml-10 flex-col -mr-10 text-white text-2xl -mt-5 items-center justify-center flex" style={{ backgroundColor:color}}>

        <div>{team}</div>
                  <div className=' flex flex-cols -mb-10 h-16 w-16'>
                      {Array.from({length:3}).map((_,index)=>(
                        <StarRating
                        key={index}
                        filled={index<rating}
                        onClick={()=> handleRating(index+1)}
                      
                        />
                      ))}
                    </div>
         </div>
         
        :
        <div>
          <div className="font-bold flex-col -ml-10 -mr-10 text-2xl -mt-5 items-center justify-center flex" style={{ backgroundColor:color}}>
            <div>{team}</div>
          <div className=' flex flex-cols -mb-10 h-16 w-16'>
              {Array.from({length:3}).map((_,index)=>(
                <StarRating
                key={index}
                filled={index<rating}
                onClick={()=> handleRating(index+1)}
               
                />
              ))}
            </div>
          </div>
          
        </div>
        
        }
       
        <hr className={`border-2xl ${toggle?"border-black":"border-white"} w-[500px] -ml-5`}/>
        <div className=' -ml-4 p-2 -mb-5 -mr-10 flex-1 overflow-y-auto'>
          <div className=' flex flex-row'>
            <div className={`font-bold ml-2 text-xl ${toggle?' text-black':' text-white'} mb-2`}>{title}</div>
            <div className={`text-[17px] font-semibold ${toggle?' text-black':'b text-white'} mt-[2px] ml-2`}>{`(${description})`}</div>
           
          </div>
       
        <div className='ml-1'>
          <div className={`flex flex-row ${toggle?' text-black':' text-white'}`}>
            <div>
            <div>Runs: {runs}</div>
            <div>6's: {sixes}</div>
            <div>Strike Rate: {strikeRate}</div>
            </div>
            <div className=' flex flex-col items-end justify-end ml-20'>
            <div>Wickets: {wickets}</div>
            <div>Economy: {economy}</div>
            <div>Average: {average}</div>
            </div>
          </div>
        {/* <div className=' flex flex-row justify-end'> */}
          {/* <img src="tag1.png" alt="" className='h-[25px] -ml-4 w-[25px] mt-1 mr-1' /> */}
          {/* <div className=' bg-white rounded-lg p-1 text-black font-bold mr-5 -mt-8'>Finisher</div> */}
        {/* </div> */}
        </div>
       
        </div>
      </div>
    </div>
  );
}

export default Card;
