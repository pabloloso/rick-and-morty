import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const StyleCharacterCardContainer = styled.div`
  min-height: 30vh;
`

const CharacterCard = ({ character, buttonParams }) => {
  const [show, setShow] = useState(false)

  const { handlerFunction, text } = buttonParams
  const { id, image, name } = character

  const element = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]

      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

  return (
    <StyleCharacterCardContainer ref={element}>
      {
        show &&
          <>
            <img src={image} />
            <h4>{name}</h4>
            <Link to={`/${id}`}>Details</Link>
            <button onClick={() => handlerFunction(character)}>{text}</button>
          </>
      }
    </StyleCharacterCardContainer>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  buttonParams: PropTypes.shape({
    handlerFunction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default CharacterCard
