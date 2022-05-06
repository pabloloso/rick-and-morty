import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import CharactersList from './screens/CharactersResults'
import CharacterDetail from './screens/CharacterDetail'
import Layout from './components/Layout'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/:id" element={<CharacterDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
