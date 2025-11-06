import React from 'react'
import Navbar from './Navbar'
import SlideshowBlouses from '../assets/slideshow-blouses.webp'

const Header = () => {
    return (
        <>
            <Navbar />
            <header className='px-10 text-white py-10' style={{ 
                backgroundImage: `url(${SlideshowBlouses})`,
                backgroundPosition: 'center center',
                backgroundRepeat : 'no-repeat',
                backgroundSize : 'cover',
                width: '100%',
                height : "100dvh" 
                
                }}>
                <div className='relative top-1/2'>
                    <p>New in !</p>
                    <h1 className='text-7xl font-bold'>Aubreya 8072 <br /> Maxi Dress</h1>

                </div>

            </header>
        </>
    )
}

export default Header
