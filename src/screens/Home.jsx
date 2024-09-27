import React from 'react'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import CardData from '../components/CardDetails'

const Home = () => {

return (
    <>
    <Navbar/>
    <div><Carousel/></div>
    <div className='row container m-auto'>
        <Cards details={CardData}/>
    </div>
    </>
)
}

export default Home
