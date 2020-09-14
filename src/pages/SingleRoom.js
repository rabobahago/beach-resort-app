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
      price,
      size,
      extras,
      breakfast,
      pets,
    } = room

    const [mainImg, ...defaultImg] = images
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                Max Capacity :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pet allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section room-extras>
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default SingleRoom
