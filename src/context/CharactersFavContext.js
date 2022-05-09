import React, { createContext } from 'react'
import PropTypes from 'prop-types'

import useCharactersFav from '../hooks/useCharactersFav'

export const CharactersFavContext = createContext({})

export const CharactersFavContextProvider = ({ children }) => {
  const characterFav = useCharactersFav()

  return (
    <CharactersFavContext.Provider value={characterFav}>
      {children}
    </CharactersFavContext.Provider>
  )
}

CharactersFavContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
