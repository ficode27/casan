import MenuToggle from './MenuToggle'
import React, { useState, useEffect } from 'react';

function Header() {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = '';
    
    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = 'Selamat pagi';
    } else if (currentHour >= 12 && currentHour < 17) {
      newGreeting = 'Selamat siang';
    } else if (currentHour >= 17 && currentHour < 20) {
      newGreeting = 'Selamat sore';
    } else {
      newGreeting = 'Selamat malam';
    }
    
    setGreeting(newGreeting);
  }, []);

  return (
    <header class="flex items-center justify-between px-[0.3rem] mb-7">
      <div class="font-bold">
        <h2>{greeting}</h2>
        <h4>alfiaff</h4>
      </div>
      
      <MenuToggle />
    </header>
  )
}

export default Header