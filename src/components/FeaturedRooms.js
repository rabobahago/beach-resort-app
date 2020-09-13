import React from 'react'
import { RoomContext } from '.././context'
import Titles from './Titles'
import Room from './Room'
import Loading from './Loading'
class FeaturedRooms extends React.Component {
  static contextType = RoomContext
  render() {
    let { loading, featuredRooms: rooms } = this.context
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />
    })
    return (
      <section className="featured-rooms">
        <Titles title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    )
  }
}
export default FeaturedRooms
