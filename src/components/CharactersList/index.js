import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CharactersList = ({ characters, buttonParams }) => {
  const { handlerFunction, text } = buttonParams

  return (
    <div>
      {characters.map(character => (
        <div key={character.id}>
          <img src={character.image} />
          <h4>{character.name}</h4>
          <Link to={`/${character.id}`}>Details</Link>
          <button onClick={() => handlerFunction(character)}>{text}</button>
        </div>
      ))}
    </div>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
  buttonParams: PropTypes.objectOf(PropTypes.shape({
    handlerFunction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }))
}

export default CharactersList
