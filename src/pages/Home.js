import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Hero>
      <Banner tile="luxurious rooms" subtitle="deluxe rooms starting at $229">
        <Link to="rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  )
}
export default Home
