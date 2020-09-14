import React from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

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
        <StyledHero className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </StyledHero>
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
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
        </section>
      </>
    )
  }
}

export default SingleRoom
