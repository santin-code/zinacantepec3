import React from 'react'
import Navbar from './components/Navbar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'

const App = () => {
  return (
    <HashRouter>
			<Navbar />
			<Routes>
				<Route index element={<Inicio />} />
			</Routes>
		</HashRouter>
  )
}

export default App