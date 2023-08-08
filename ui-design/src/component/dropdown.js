import React from 'react'

function Dropdown() {
  return (
    <div>
    <div>
      <h6>1#</h6>
      <select name="Size" >
      <option value="small">SMALL</option>
      <option value="medium">Medium</option>
      <option value="large">LARGE</option>
      </select>
      <select name="Color" >
      <option value="red">RED</option>
      <option value="blue">BLUE</option>
      <option value="green">GREEN</option>
      <option value="yellow">YELLOW</option>
      </select>
    </div>
    <div>
    <h6>2#</h6>
    <select name="Size" >
    <option value="small">SMALL</option>
    <option value="medium">Medium</option>
    <option value="large">LARGE</option>
    </select>
    <select name="Color" >
    <option value="red">RED</option>
    <option value="blue">BLUE</option>
    <option value="green">GREEN</option>
    <option value="yellow">YELLOW</option>
    </select>
  </div>
  </div>
  )
}

export default Dropdown
