import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (urlApi) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(false)

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
    fetchData().then(characters => setCharacters(characters))
  }, [])

  return {
    characters,
    loading,
    errors
  }
}

export default useFetch
