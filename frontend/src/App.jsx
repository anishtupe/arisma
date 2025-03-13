import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import { useEffect } from "react";


const App = () => {


  useEffect(() => {
    let timeoutId;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let titles = [
          "Come back! We miss you 😢",
          "Are you still there? 🧐",
          "We have surprises for you! 🎁",
        ];
        let index = 0;

        const cycleTitles = () => {
          document.title = titles[index];
          index = (index + 1) % titles.length;
          timeoutId = setTimeout(cycleTitles, 2000); 
        };

        cycleTitles();
      } else {
        clearTimeout(timeoutId);
        document.title = "ARISMA";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Routes>
        <Route path='/' element={Home} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />





      </Routes>

    </div>
  )
}

export default App