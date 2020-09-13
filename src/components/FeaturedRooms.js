import React from 'react'
import { RoomContext } from '.././context'
//import Title from './Titles'
//import Room from './Room'
//import Loading from './Loading'
class FeaturedRooms extends React.Component {
  static contextType = RoomContext
  render() {
    const { loading, featuredRooms: rooms } = this.context
    return (
      <div>
        Hello from featured rooms
        <Room />
      </div>
    )
  }
}
export default FeaturedRooms
