import React from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

const CharacterDetail = () => {
  const { id } = useParams()
  const {
    characters
  } = useFetch(`${process.env.REACT_APP_BASE_URL_API}/character/${id}`)

  return (
    <div>
      <img src={characters.image} />
      <h2>{characters.name}</h2>
      <div>
        <div>Gender: {characters.gender}</div>
        <div>Species: {characters.species}</div>
        <div>Status: {characters.status}</div>
        <Link to={'/'}>Go back</Link>
      </div>
    </div>
  )
}

export default CharacterDetail
