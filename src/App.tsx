import React, { useEffect } from 'react'
import './App.css'
// import Homebody from './components/UI/organisms/HomeBody/Homebody'
import Nav from './components/UI/organisms/Nav/Nav'
import { useDispatch } from 'react-redux'
import { fetchMovies } from './store/Actions/MoviesAction'
import MovieDetails from './components/pages/MovieDetails'
import { Routes, Route } from 'react-router-dom'
import { ManageMovie } from './components/UI/organisms/ManageMovie/ManageMovie'
import NewMovie from './components/pages/NewMovie'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: <NewMovie />,
      isNavItem: true,
    },
    {
      path: '/movies/:id',
      name: 'Details',
      component: <MovieDetails />,
    },
  ]

  return (
    <div className="App">
      <Nav />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Routes>
    </div>
  )
}

export default App
