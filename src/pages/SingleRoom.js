import React from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'

class SingleRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    }
  }
  static contextType = RoomContext
  render() {
    const { getRoom } = this.context
    let room = getRoom(this.state.slug)
    if (!room) {
      return (
        <Hero className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Hero>
      )
    }
    const {
      name,
      description,
      capacity,
      images,
      prices,
      size,
      extras,
      breakfast,
      pets,
    } = room
    return (
      <Hero className="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
    )
  }
}

export default SingleRoom
