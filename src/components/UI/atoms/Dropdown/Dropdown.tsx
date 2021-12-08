import React from 'react'
import './style.css'

interface DropdownProps {
  type: string
}

export const Dropdown: React.FC<DropdownProps> = ({ type }) => {
  return (
    <div>
      <select className={`genre-drop ${type}`} name="genres">
        <option value="genre">Genre</option>
        <option value="action">Action</option>
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
      </select>
    </div>
  )
}
