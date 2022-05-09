import React, { useContext } from 'react'

import { CharactersFavContext } from '../../context/CharactersFavContext'

import CharactersList from '../CharactersList'

const CharactersFav = () => {
  const { favorites, handleDeleteFromFavorite } = useContext(CharactersFavContext)

  return (
    <div>
      <h4>Favorites</h4>
      <CharactersList
        characters={favorites}
        buttonParams={{
          handlerFunction: handleDeleteFromFavorite,
          text: 'Remove from favorites'
        }}
      />
    </div>
  )
}

export default CharactersFav
