import React from 'react'
import {Carousel} from 'flowbite-react'
const HeroCarousel = () => {
  return (
    <div className="shadow-xl h-56 w-full sm:h-64 xl:h-80 2xl:h-96 hover:shadow-2xl hover:scale-105 ">
  <Carousel slideInterval={5000}>
    <img
      src="https://img.freepik.com/free-vector/human-use-computer-control-robot-arms-working-procuction-convoyed-smart-factory-industry-4_1150-43056.jpg?w=1480&t=st=1668644891~exp=1668645491~hmac=5c4bb2d6f3a5c59e7fcc7823c72c6cd3ad9388fe8a9af8cfde33302874ee93fd"
      alt="..."
    />
    
    <img
      src="https://img.freepik.com/free-vector/industrial-augmented-reality-isometric-composition_1284-29750.jpg?w=740&t=st=1668644740~exp=1668645340~hmac=0851bea80842aee021ca21303ce81673c55aac44e7798f39ec4b37353c6be921"
      alt="..."
    />
    <img
      src="https://img.freepik.com/free-vector/gradient-halftone-technology-facebook-cover_23-2149022334.jpg?w=1380&t=st=1668645489~exp=1668646089~hmac=e57c8372332e8585b9c1d0ac4f36fd191266784cc28ecc88ba7e277338b04997"
      alt="..."
    />
  </Carousel>
</div>
  )
}

export default HeroCarousel