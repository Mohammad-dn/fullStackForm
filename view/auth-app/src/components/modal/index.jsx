import React from 'react'

function modalForAdd() {
  return (
    <form>
        <input type="number"  placeholder='what is your number?'/>
        <input type="email"  placeholder='what is your email?'/>
        <input type="website"  placeholder='what is your website?'/>
        <input type="location"  placeholder='where are you?'/>
        <button className="submit-btn">myInput</button>
    </form>
  )
}

export default modalForAdd