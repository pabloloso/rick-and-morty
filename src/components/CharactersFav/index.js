import React from 'react'
import PropTypes from 'prop-types'

import CharactersList from '../CharactersList'

const CharactersFav = ({ characters }) => {
  return (
    <div>
      <h4>Favorites</h4>
      <CharactersList
        characters={characters}
        buttonParams={{
          handlerFunction: () => {},
          text: 'Remove from favorites'
        }}
      />
    </div>
  )
}

CharactersFav.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharactersFav
