import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import { WithRoomConsumer } from '../context'
import Loading from './Loading'

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  )
}
export default WithRoomConsumer(RoomContainer)
// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value
//         if (loading) {
//           return <Loading />
//         }
//         return (
//           <>
//             Hello from Rooms Containers
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </>
//         )
//       }}
//     </RoomConsumer>
//   )
// }

// export default RoomContainer
