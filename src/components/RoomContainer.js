import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from './Loading'

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value
        return (
          <div>
            Hello from Rooms Containers
            <RoomFilter />
            <RoomList />
          </div>
        )
      }}
    </RoomConsumer>
  )
}

export default RoomContainer
