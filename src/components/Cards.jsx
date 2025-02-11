import React from 'react';

function Cards() {
  return (
    <div className="w-full py-10 px-10">
      <div className="grid grid-cols-3 gap-8">

        <div className="w-full h-[350px] bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img 
            className="w-full h-full object-cover" 
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" 
            alt="Card 1" 
          />
        </div>

        
        <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img 
            className="w-full h-full object-cover" 
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" 
            alt="Card 2" 
          />
        </div>

      
        <div className="w-full h-[250px] bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img 
            className="w-full h-full object-cover" 
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" 
            alt="Card 3" 
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
