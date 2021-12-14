import React from 'react'
import { Input } from '../../atoms/Input/Input'
import './style.css'
import { fonts } from '../../../../constants/fonts'

function Filterform() {
  return (
    <div>
      <form action="">
        <div className="flex filter-top">
          <Input
            placeholder="Title"
            inputplacement="filter"
            type="text"
            border
          />
          <select className="genres" name="genres">
            <option className={'dropdName'} value="genre">
              Genre
            </option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
          </select>
          <Input placeholder="Year" inputplacement="filter" type="" border />
        </div>
        <div className="flex filter-bottom">
          <div>
            <Input
              placeholder="myplace holder"
              inputplacement="filter"
              type="range"
              border
            />
            <label
              className="flex grade-label"
              style={{ fontFamily: fonts.FORMFONT }}
            >
              <div>0</div>
              <div>Minimum grade</div>
              <div>5</div>
            </label>
          </div>
          <input className="submit-input" type="submit" value="" />
        </div>
      </form>
    </div>
  )
}

export default Filterform
