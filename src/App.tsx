import React, { useEffect } from 'react'
import './App.css'
// import Homebody from './components/UI/organisms/HomeBody/Homebody'
import Nav from './components/UI/organisms/Nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from './store/Actions/MoviesAction'
import MovieDetails from './components/pages/MovieDetails'
import { Routes, Route } from 'react-router-dom'
import { ManageMovie } from './components/UI/organisms/ManageMovie/ManageMovie'
import NewMovie from './components/pages/NewMovie'
import Homebody from './components/UI/organisms/HomeBody/Homebody'
// import WatchedMovies from './components/pages/WatchedMoviesPage'
import PendingUsersPage from './components/pages/PendingUsersPage'
import { Loginform } from './components/pages/Login'
import { isLoggedIn } from './store/Actions/UserActions'
import { RootState } from './store/Reducers/rootReducers'
import PendingCommentsPage from './components/pages/PendingCommentsPage'
import WatchedMovies from './components/pages/WatchedMoviesPage'
import EditMovie from './components/pages/EditMovie'
import ProfilePage from './components/pages/ProfilePage'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isLoggedIn())
  }, [dispatch])

  const user = useSelector((state: RootState) => state.user.user)

  // user ? console.log(user.role) : console.log('non')

  // if (user) {
  //   console.log(user.role)
  // }

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: <Homebody />,
      isNavItem: true,
    },
    {
      path: '/movies/:id',
      name: 'Details',
      component: <MovieDetails />,
    },
    {
      path: '/add-movie',
      name: 'NewMovie',
      component: <NewMovie />,
    },
    {
      path: '/pending-comments',
      name: 'PendingComments',
      component: <PendingCommentsPage />,
    },
    {
      path: '/pending-users',
      name: 'PendingUsers',
      component: <PendingUsersPage />,
    },
    {
      path: '/watched-movies',
      name: 'WatchedMovies',
      component: <WatchedMovies />,
    },
    {
      path: '/edit-movie/:id',
      name: 'EditMovie',
      component: <EditMovie />,
    },
    {
      path: '/users/:id',
      name: 'Profile',
      component: <ProfilePage />,
    },
  ]

  return (
    <div className="App">
      {user ? (
        <>
          <Nav />
          <Routes>
            {routes.map(({ path, component }) => (
              <Route path={path} key={path} element={component} />
            ))}
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Loginform />} />
          ))
        </Routes>
      )}
    </div>
  )
}

export default App
