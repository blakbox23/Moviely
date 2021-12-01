import React from 'react'
import Text from '../../atoms/Text/Text'
import './style.css'

interface NavProps {}

const Nav = () => {
  const user = {
    admin: false,
  }
  const user2 = {
    admin: true,
  }
  const userNavLink = 'List of my watched movies'
  const adminNavLinks = [
    {
      id: '1',
      text: 'Add new movie',
      path: 'Pending users',
    },
    {
      id: '2',
      text: 'Pending comments',
      path: 'Pending users',
    },
    {
      id: '3',
      text: 'Pending users',
      path: 'Pending users',
    },
  ]

  return (
    <div className="nav-bar flex">
      <div>
        <Text text="Home Page" type="logo" />
      </div>

      <div className="flex links">
        <Text text="O" type="logo" />
      </div>
    </div>
  )
}

export default Nav
