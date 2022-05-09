import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (urlApi) => {
  const [characters, setCharacters] = useState([])
  const [charactersFilter, setCharactersFilter] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)

  const handleCharacterFilter = (event) => {
    setCharactersFilter(
      characters.filter(character =>
        character.name.toLowerCase().search(event.target.value.toLowerCase().trim()) >= 0
      )
    )
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(urlApi)

      return response.data.results || response.data
    } catch (error) {
      setErrors(true)
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData().then(characters => {
      setCharacters(characters)
      setCharactersFilter(characters)
    })
  }, [])

  return {
    characters: charactersFilter.length > 0 ? charactersFilter : characters,
    loading,
    errors,
    handleCharacterFilter
  }
}

export default useFetch
