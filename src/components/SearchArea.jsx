import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const SearchArea = () => {
  const [searchParks, setSearchParks] = useState([])

  const fetchParkData = async () => {
    const resp = await Axios.get(
      'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Rej2n2IORGYVcDo8mXeH0eyo4Nak5GPpTmBqvMjA'
    )
    setSearchParks(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchParkData()
  })

  return (
    <div className="button-area">
      <button onClick={fetchParkData} className="search-button">
        Where To?
      </button>
    </div>
  )
}

export default SearchArea
