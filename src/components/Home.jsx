import React, { useContext } from 'react';
import Cart from './Cart';
import Header from './Header';
import { TopicContext } from './Root';

const Home = () => {

  const topics= useContext(TopicContext)
  
  const handleToStart =(id)=>{
    console.log(id)
  }

    return (
        <div>
           <section>
             <Header></Header>
           </section>
           <section className='w-[96%]
           lg:w-[80%] grid lg:grid-cols-2 gap-5 mt-12 mx-auto '>
             {
              topics.map(topic=> <Cart 
                handleToStart={handleToStart}
                key={topic.id} 
                topic={topic}></Cart> )
             }
           </section>
        </div>
    );
};

export default Home;