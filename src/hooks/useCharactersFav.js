import { useState } from 'react'

const useCharactersFav = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('CharactersFav')) || [])

  const handleAddToFavorite = (character) => {
    const existInFavorites = favorites.some(characterFav => characterFav.id === character.id)

    if (!existInFavorites) {
      const newFavorites = [
        ...favorites,
        character
      ]

      localStorage.setItem('CharactersFav', JSON.stringify(newFavorites))
      setFavorites(newFavorites)
    }
  }

  const handleDeleteFromFavorite = (character) => {
    const newFavorites = favorites.filter(characterFav => characterFav.id !== character.id)

    localStorage.setItem('CharactersFav', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  return { favorites, handleAddToFavorite, handleDeleteFromFavorite }
}

export default useCharactersFav
