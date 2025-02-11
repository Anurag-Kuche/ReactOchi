function Featured() {
  return (
    <div className='w-full py-10'>
      <div className='w-full px-20 border-b border-zinc-700 pb-20'>
        <h1 className='text-7xl tracking-tight mb-10'>Featured Projects</h1>
        
        <div className="cards w-full flex gap-10">
          
   
          <div className="cardcontainer w-1/2 h-[80vh] rounded-lg overflow-hidden bg-red-700">
            <img 
              className='w-full h-full object-cover' 
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" 
              alt="Featured Project 1" 
            />
          </div>

    
          <div className="cardcontainer w-1/2 h-[80vh] rounded-lg overflow-hidden bg-blue-700">
            <img 
              className='w-full h-full object-cover' 
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" 
              alt="Featured Project 2" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
