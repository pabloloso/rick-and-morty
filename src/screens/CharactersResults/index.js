import React, { useContext } from 'react'

import useFetch from '../../hooks/useFetch'

import { CharactersFavContext } from '../../context/CharactersFavContext'

import CharactersFilter from '../../components/CharactersFilter'
import CharactersFav from '../../components/CharactersFav'
import CharactersList from '../../components/CharactersList'

const CharactersResults = () => {
  const { favorites, handleAddToFavorite } = useContext(CharactersFavContext)

  const {
    characters,
    loading,
    errors,
    handleCharacterFilter
  } = useFetch(`${process.env.REACT_APP_BASE_URL_API}/character`)

  if (errors) {
    return <div>Error</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <CharactersFilter handleCharacterFilter={handleCharacterFilter} />
      <CharactersList
        characters={characters}
        buttonParams={{
          handlerFunction: handleAddToFavorite,
          text: 'Add to favorites'
        }}
      />
      {favorites.length > 0 && <CharactersFav />}
    </>
  )
}

export default CharactersResults
