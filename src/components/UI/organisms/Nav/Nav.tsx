import React, { useEffect, useState } from 'react'
import Text from '../../atoms/Text/Text'
import './style.css'
import { fonts } from '../../../../constants/fonts'
import usericon from '../../../../assets/user 1.png'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../store/Reducers/rootReducers'
import { isLoggedIn, logOut } from '../../../../store/Actions/UserActions'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.user.user)

  const userPage = `/users/${user!.id}`

  useEffect(() => {
    dispatch(isLoggedIn())
  }, [dispatch])

  let role
  if (user) role = user.role

  // const user = {
  //   admin: true,
  // }

  const userNavLink = 'List of my watched movies'
  const adminNavLinks = [
    {
      id: '1',
      text: 'Add new movie',
      path: '/add-movie',
    },
    {
      id: '2',
      text: 'Pending comments',
      path: '/pending-comments',
    },
    {
      id: '3',
      text: 'Pending users',
      path: 'pending-users',
    },
  ]

  const userNavLinks = [
    {
      id: '1',
      text: 'List of my watched movies',
      path: 'watched-movies',
    },
  ]

  const navigate = useNavigate()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleClose = () => setModalIsOpen(false)
  const handleShow = () => setModalIsOpen(true)

  const handleLogout = () => {
    // dispatch(logOut())
    localStorage.removeItem('user')
    dispatch(isLoggedIn())
    navigate('/')
    handleClose()
  }

  return (
    <div className="nav-bar flex">
      <div>
        <NavLink to="/">
          <Text text="Home Page" type="logo" font={fonts.NAVFONT} />
        </NavLink>
      </div>

      <div className="flex links">
        {role == 'ADMIN' ? (
          <div className="flex links">
            {adminNavLinks.map(({ id, text, path }) => (
              <NavLink to={path}>
                <div key={id}>
                  <Text text={text} type="navlink" font={fonts.NAVFONT} />
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <NavLink to="watched-movies">
            <div>
              {userNavLinks.map(({ id, text, path }) => (
                <NavLink to={path}>
                  <div key={id}>
                    <Text text={text} type="navlink" font={fonts.NAVFONT} />
                  </div>
                </NavLink>
              ))}
            </div>
          </NavLink>
        )}
        <div onClick={handleShow} style={{ cursor: 'pointer' }}>
          <img src={usericon} alt="profile" />
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleClose}
          shouldCloseOnOverlayClick={true}
          style={{
            content: {
              width: '175px',
              borderRadius: '20px',
              position: 'absolute',
              top: '80px',
              right: '0',
              marginLeft: 'auto',
              textAlign: 'center',
              height: '90px',
              padding: '10px 0',
              overflow: 'hidden',
            },
            overlay: {
              backgroundColor: 'rgba(255, 255, 255, 0)',
            },
          }}
        >
          <div className="logoutmod">
            <NavLink to={userPage}>
              <div
                style={{
                  color: 'purple',
                  fontSize: '20px',
                  cursor: 'pointer',
                }}
              >
                Profile
              </div>
            </NavLink>

            <hr className="trik" />

            <div
              onClick={handleLogout}
              style={{
                color: 'purple',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              Log out
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Nav
