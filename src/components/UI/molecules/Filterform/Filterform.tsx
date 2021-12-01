import React from 'react'
import { Input } from '../../atoms/Input/Input'
import './style.css'
// import polygone from '../../../../assets/drop.png'

function Filterform() {
  const dropdownName = (a: string, b: string) => {
    return (
      <div className="">
        <div>{a}</div>
        <div>{b}</div>
      </div>
    )
  }
  return (
    <div>
      <div className="flex filter-top">
        <Input placeholder="Title" inputplacement="filter" type="text" border />
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
          <div className="flex grade-label">
            <div>0</div>
            <div>Minimum grade</div>
            <div>5</div>
          </div>
        </div>
        <Input
          placeholder="myplace holder"
          inputplacement="filter"
          type="text"
          border
        />
      </div>
    </div>
  )
}

export default Filterform
