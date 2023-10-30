import { useState } from 'react'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Banner from './components/Banner'
import Popular from './components/Popular'
import TestiCards from './components/TestiCards'
import { Button } from 'flowbite-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  const textCap = [
    "\"Mendengarkan musik di Gunung Puntang, Mudah-mudahan dilirik Gemintang\"",
    "\"Dengan Casan hidup mu jadi Berkesan\"",
    "\"Akhirnya ketemu kosan walaupun agak bocor dikir,tapi gak ngaruh\"",
    "\"All in Prabowo\"",
    "\"Bagus sekali...\""
  ];
  return (
    <div className="py-8 px-3 xl:px-20">
      <Header />
      <Jumbotron />
      <Banner />
      <Popular />
      <h3 className="text-2xl font-bold my-3">Apa kata mereka?</h3>
      
      <div className="w-full h-fit">
        <Carousel responsive={responsive}>
          <TestiCards fullName="Alfi Ahnaffi" username="alfiaff" texts={textCap[0]}/>
          <TestiCards fullName="Bilvi Akbar" username="bilviakbar" texts={textCap[1]}/>
          <TestiCards fullName="Fahriza N.R" username="fahriz.n_r" texts={textCap[2]}/>
          <TestiCards fullName="Rafli Al-Ghifari" username="raflialghifari28_" texts={textCap[3]} />
          <TestiCards fullName="Rawas" username="rawas_" texts={textCap[4]} />
          
        </Carousel>
      </div>
    </div>
  )
}

export default App
