import React from 'react'
import Text from '../../atoms/Text/Text'
import './style.css'
import { fonts } from '../../../../constants/fonts'
import usericon from '../../../../assets/user 1.png'

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
        <Text text="Home Page" type="logo" font={fonts.NAVFONT} />
      </div>

      <div className="flex links">
        {user2.admin ? (
          <div className="flex links">
            {adminNavLinks.map(({ id, text }) => (
              <div key={id}>
                <Text text={text} type="navlink" font={fonts.NAVFONT} />
              </div>
            ))}
          </div>
        ) : (
          <Text
            text="List of my watched movies"
            type="navlink"
            font={fonts.NAVFONT}
          />
        )}
        <img src={usericon} alt="profile" />
      </div>
    </div>
  )
}

export default Nav
