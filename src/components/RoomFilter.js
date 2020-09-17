import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Titles from './Titles'
//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]
}
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context

  //get all unique values
  let types = getUnique(rooms, 'type')
  //add all
  types = ['all', ...types]
  //map types
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })
  let people = getUnique(rooms, 'capacity')
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })
  return (
    <section className="filter-container">
      <Titles title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <label htmlFor="type">room type</label>
        <select
          name="type"
          id="type"
          value={type}
          className="form-control"
          onChange={handleChange}
        >
          {types}
        </select>
        {/* end of select type */}

        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
          {/* end of capacity */}
        </div>
      </form>
    </section>
  )
}
export default RoomsFilter
