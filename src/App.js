import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { CharactersFavContextProvider } from './context/CharactersFavContext'

import CharactersResults from './screens/CharactersResults'
import CharacterDetail from './screens/CharacterDetail'
import Layout from './components/Layout'

import GlobalStyles from './styles/GlobalStyles'

function App () {
  return (
    <BrowserRouter>
      <CharactersFavContextProvider>
        <Layout>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<CharactersResults />} />
            <Route path="/:id" element={<CharacterDetail />} />
          </Routes>
        </Layout>
      </CharactersFavContextProvider>
    </BrowserRouter>
  )
}

export default App
