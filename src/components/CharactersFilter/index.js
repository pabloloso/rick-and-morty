import React from 'react'
import PropTypes from 'prop-types'

const CharactersFilter = ({ handleCharacterFilter }) => {
  return (
    <div>
      <input onChange={handleCharacterFilter} />
    </div>
  )
}

CharactersFilter.propTypes = {
  handleCharacterFilter: PropTypes.func.isRequired
}

export default CharactersFilter
