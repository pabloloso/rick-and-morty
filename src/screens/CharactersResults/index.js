import React, { useState } from 'react'

import useFetch from '../../hooks/useFetch'

import CharactersFav from '../../components/CharactersFav'
import CharactersList from '../../components/CharactersList'

const CharactersResults = () => {
  const [favorites, setFavorites] = useState([])

  const {
    characters,
    loading,
    errors
  } = useFetch(`${process.env.REACT_APP_BASE_URL_API}/character`)

  const handleAddToFavorite = (character) => {
    const existInFavorites = favorites.some(characterFav => characterFav.id === character.id)

    if (!existInFavorites) {
      setFavorites([
        ...favorites,
        character
      ])
    }
  }

  if (errors) {
    return <div>Error</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <CharactersList
        characters={characters}
        buttonParams={{
          handlerFunction: handleAddToFavorite,
          text: 'Add to favorites'
        }}
      />
      <CharactersFav characters={favorites} />
    </>
  )
}

export default CharactersResults
