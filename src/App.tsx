import React, { useEffect } from 'react'
import './App.css'
import Homebody from './components/UI/organisms/HomeBody/Homebody'
import Nav from './components/UI/organisms/Nav/Nav'
import { useDispatch } from 'react-redux'
import { fetchMovies } from './store/Actions/MoviesAction'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div className="App">
      <Nav />
      <Homebody />
    </div>
  )
}

export default App
